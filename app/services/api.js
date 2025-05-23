import AsaasClient from '../lib/AsaasClient';
import { formatPhone } from '../utils/formatters';

/**
 * Get an existing customer in Asaas, by CPF
 * @param {string} cpf - The Asaas customer CPF
 * @returns {Promise} - The customer data
 */
export const fetchCustomerByCPF = async (cpf) => {
    try {
        const asaas = new AsaasClient();
        const customers = await asaas.customers.list({ cpfCnpj: cpf });

        if (customers.data?.[0]) {
            const customer = customers.data[0];
            return formatCustomerResponse(customer);
        }
        return null;
    } catch (error) {
        console.error('Error fetching Asaas customer by CPF:', error);
        throw new Error('Erro ao buscar dados do cliente');
    }
};

/**
 * Get an existing customer in Asaas, by customer ID
 * @param {string} customerId - The Asaas customer ID
 * @returns {Promise} - The customer data
 */
export const fetchCustomerById = async (customerId) => {
    try {
        const asaas = new AsaasClient();
        const customer = await asaas.customers.getById(customerId);

        if (customer) {
            return formatCustomerResponse(customer);
        }
        return null;
    } catch (error) {
        console.error('Error fetching Asaas customer by ID:', error);
        throw new Error('Erro ao buscar dados do cliente pelo ID');
    }
};

/**
 * Format customer data from Asaas API response
 * @param {Object} customer - The customer data from Asaas API
 * @returns {Object} - Formatted customer data
 */
const formatCustomerResponse = (customer) => {
    const crmMatch = customer.observations?.match(/CRM[-\s]*([A-Z]{2})[-\s]*([\d.]+)/i);

    return {
        id: customer.id || '',
        name: customer.name || '',
        email: customer.email || '',
        phone: formatPhone(customer.mobilePhone || ''),
        zipCode: customer.postalCode || '',
        address: customer.address || '',
        number: customer.addressNumber || '',
        complement: customer.complement || '',
        neighborhood: customer.province || '',
        city: customer.city || customer.cityName || '',
        state: customer.state || '',
        country: customer.country || 'Brasil',
        cpf: customer.cpfCnpj || '',
        crm: crmMatch ? crmMatch[2] : '',
        stateCrm: crmMatch ? crmMatch[1] : '',
        isNewCustomer: false,
        societies: customer.groupName ? customer.groupName.split(',') : []
    };
};

/**
 * Updates an existing customer in Asaas
 * @param {string} customerId - The Asaas customer ID
 * @param {Object} data - The customer data to update
 * @returns {Promise} - The updated customer data
 */
export const updateCustomerData = async (customerId, data) => {
  try {
    const asaas = new AsaasClient();
    const response = await asaas.customers.update(customerId, {
      name: data.fullName,
      email: data.email,
      mobilePhone: data.phone.replace(/\D/g, ''),
      postalCode: data.zipCode.replace(/\D/g, ''),
      address: data.address,
      addressNumber: data.number,
      complement: data.complement,
      province: data.neighborhood,
      city: data.city,
      state: data.state,
      observations: data.crm ? `CRM-${data.stateCrm} ${data.crm}` : ''
    });

    return response;
  } catch (error) {
    console.error('Error updating customer:', error);
    throw new Error('Falha ao atualizar dados do cliente!');
  }
};

/**
 * Creates a new customer in Asaas
 * @param {Object} data - The customer data to create
 * @returns {Promise} - The created customer data
 */
export const createCustomerData = async (data) => {
  try {
    const asaas = new AsaasClient();
    const customerData = {
      name: data.fullName,
      cpfCnpj: data.cpf.replace(/\D/g, ''),
      email: data.email,
      mobilePhone: data.phone.replace(/\D/g, ''),
      postalCode: data.zipCode.replace(/\D/g, ''),
      address: data.address,
      addressNumber: data.number,
      complement: data.complement,
      province: data.neighborhood,
      city: data.city,
      state: data.state,
      observations: data.crm ? `CRM-${data.stateCrm} ${data.crm}` : '',
      groupName: data.societies?.join(',') || ''
    };

    const response = await asaas.customers.create(customerData);
    return response;
  } catch (error) {
    console.error('Error creating customer:', error);
    throw new Error('Falha ao criar cadastro do cliente!');
  }
};

export const checkMembership = async (cpf, societies) => {
    if (!cpf || !societies) return null;

    const cleanCPF = cpf.replace(/\D/g, '');
    const memberSocieties = societies.filter(society =>
        society.affiliated?.some(member => member.cpf.replace(/\D/g, '') === cleanCPF)
    ).map(society => {
        const member = society.affiliated.find(
            member => member.cpf.replace(/\D/g, '') === cleanCPF
        );
        return {
            shortName: society.shortName,
            memberName: member?.name || '',
            memberEmail: member?.email || ''
        };
    });

    if (memberSocieties.length === 0) return {
      fullName: '',
      email: '',
      isMember: false,
      societies: []
  };

    return {
        fullName: memberSocieties[0].memberName,
        email: memberSocieties[0].memberEmail,
        isMember: memberSocieties.length > 0,
        societies: memberSocieties.map(society => society.shortName)
    };
};

/**
 * Fetch payments for a customer using their CPF directly
 * @param {string} cpf - The customer's CPF
 * @returns {Promise} - All payment data associated with this CPF
 */
export const fetchPaymentsByCpf = async (cpf) => {
  if (!cpf) {
    throw new Error('CPF é obrigatório');
  }

  try {
    const asaas = new AsaasClient();

    // Format CPF to remove non-numeric characters
    const formattedCpf = cpf.replace(/\D/g, '');

    // Use the cpfCnpj filter directly in the listPayments method
    const payments = await asaas.payments.list({
      cpfCnpj: formattedCpf,
      limit: 100 // Adjust limit as needed
    });

    return {
      success: true,
      data: payments.data || [],
      totalCount: payments.totalCount || 0
    };
  } catch (error) {
    console.error('Error fetching payments by CPF:', error);
    throw new Error('Erro ao buscar pagamentos do cliente');
  }
};

/**
 * Fetch payments for a customer using their customer ID
 * @param {string} customerId - The Asaas customer ID
 * @returns {Promise} - All payment data associated with this customer
 */
export const fetchPaymentsByCustomerId = async (customerId) => {
  if (!customerId) {
    throw new Error('Customer ID é obrigatório');
  }

  try {
    const asaas = new AsaasClient();

    const payments = await asaas.payments.list({
      customer: customerId,
      limit: 100 // Adjust limit as needed
    });

    return {
      success: true,
      data: payments.data || [],
      totalCount: payments.totalCount || 0
    };
  } catch (error) {
    console.error('Error fetching payments by customer ID:', error);
    throw new Error('Erro ao buscar pagamentos do cliente');
  }
};

/**
 * Fetch payment details by ID
 * @param {string} paymentId - The Asaas payment ID
 * @returns {Promise} - Payment details
 */
export const fetchPaymentById = async (paymentId) => {
  if (!paymentId) {
    throw new Error('Payment ID é obrigatório');
  }

  try {
    const asaas = new AsaasClient();
    const payment = await asaas.payments.getById(paymentId);

    return {
      success: true,
      data: payment
    };
  } catch (error) {
    console.error('Error fetching payment by ID:', error);
    throw new Error('Erro ao buscar detalhes do pagamento');
  }
};