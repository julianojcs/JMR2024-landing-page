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
                city: customer.cityName || '',
                state: customer.state || '',
                country: customer.country || 'Brasil',
                crm: crmMatch ? crmMatch[2] : '',
                stateCrm: crmMatch ? crmMatch[1] : '',
                isNewCustomer: false
            };
        }
        return null;
    } catch (error) {
        console.error('Error fetching Asaas customer:', error);
        throw new Error('Erro ao buscar dados do cliente');
    }
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
        society.affiliated?.some(member => member?.cpf?.replace(/\D/g, '') === cleanCPF)
    ).map(society => {
        const member = society.affiliated.find(
            member => member?.cpf?.replace(/\D/g, '') === cleanCPF
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