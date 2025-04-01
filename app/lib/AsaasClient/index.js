import { create } from "domain";

/**
 * AsaasClient - A client for interacting with the Asaas payment API
 * @class
 * @example
 * // Initialize the client
 * const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
 *   sandbox: true
 * });
 *
 * // List customers
 * async function getCustomers() {
 *   try {
 *     const customers = await asaas.customers.list({
 *       email: "email@email.com",
 *       limit: 10,
 *       offset: 0
 *     });
 *     console.log(customers);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 *
 * // Create a payment
 * async function createPayment() {
 *   try {
 *     const payment = await asaas.create({
 *       customer: "cus_000000000000",
 *       billingType: "BOLETO",
 *       value: 100.00,
 *       dueDate: "2024-03-23"
 *     });
 *     console.log(payment);
 *   } catch (error) {
 *     console.error(error);
 *   }
 * }
 *
 * // Create a customer
 * const asaas = new AsaasClient(process.env.ASAAS_API_KEY, {
 *   sandbox: true
 * });
 *
 * try {
 *   const customer = await asaas.customers.create({
 *     name: "João da Silva",
 *     cpfCnpj: "240.347.657-98",
 *     email: "joaosilva@gmail.com",
 *     mobilePhone: "31999990000",
 *     observations: "CRM/MG: ",
 *     groupName: "SRMG",
 *     address: "Rua da Bahia",
 *     addressNumber: "106",
 *     complement: "ap 202",
 *     province: "Centro",
 *     postalCode: "30160000",
 *     notificationDisabled: true
 *   });
 *   console.log(customer);
 * } catch (error) {
 *   console.error(error);
 * }
 */
class AsaasClient {
  constructor() {
    this.baseApiUrl = '/api/asaas';

    // Initialize customers property with methods
    this.customers = {
      list: this.listCustomers.bind(this),
      create: this.createCustomer.bind(this),
      getById: this.getCustomerById.bind(this),
      update: this.updateCustomer.bind(this)
    };

    // Initialize payments property with methods
    this.payments = {
      create: this.createPayment.bind(this),
      list: this.listPayments.bind(this),
      getById: this.getPaymentById.bind(this)
    }
  }

  async listCustomers(filters = {}) {
    try {
      const queryParams = new URLSearchParams(filters);
      console.log('fetch url: ', `${this.baseApiUrl}/customers?${queryParams.toString()}`)
      const response = await fetch(`${this.baseApiUrl}/customers?${queryParams.toString()}`);

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message);
      }

      return await response.json();
    } catch (error) {
      throw new Error(`Failed to list customers: ${error.message}`);
    }
  }

  /**
   * Create a new customer
   * @param {Object} data - Customer data
   * @param {string} data.name - Customer's full name
   * @param {string} data.cpfCnpj - Customer's CPF or CNPJ (Brazilian tax ID)
   * @param {string} data.email - Customer's email address
   * @param {string} data.mobilePhone - Customer's mobile phone number
   * @param {string} [data.observations] - Additional observations (e.g., CRM number)
   * @param {string} [data.groupName] - Customer's group name
   * @param {string} [data.address] - Street address
   * @param {string} [data.addressNumber] - Street number
   * @param {string} [data.complement] - Address complement
   * @param {string} [data.province] - Neighborhood/District
   * @param {string} [data.postalCode] - Postal code (CEP)
   * @param {boolean} [data.notificationDisabled] - Whether notifications are disabled
   * @returns {Promise<Object>} Created customer response
   * @throws {Error} If the request fails
   */
  async createCustomer(data) {
    try {
      const response = await fetch(`${this.baseApiUrl}/customers`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'access_token': this.apiKey
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(responseData)}`);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Network error: ${error.message}`);
      }
      throw new Error(`Customer creation failed: ${error.message}`);
    }
  }

  /**
   * Get a customer by ID
   * @param {string} customerId - The customer's unique identifier
   * @returns {Promise<Object>} Customer details
   * @throws {Error} If the customer is not found or request fails
   * @example
   * try {
   *   const customer = await asaas.customers.getById('cus_000000000000');
   *   console.log(customer);
   * } catch (error) {
   *   console.error(error);
   * }
   */
  async getCustomerById(customerId) {
    try {
      if (!customerId) {
        throw new Error('Customer ID is required');
      }

      const response = await fetch(`${this.baseApiUrl}/customers/${customerId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'access_token': this.apiKey
        }
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(responseData)}`);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Network error: ${error.message}`);
      }
      throw new Error(`Customer fetch failed: ${error.message}`);
    }
  }

  /**
   * Update an existing customer
   * @param {string} customerId - The customer's unique identifier
   * @param {Object} data - Customer data to update
   * @param {string} [data.name] - Customer's full name
   * @param {string} [data.cpfCnpj] - Customer's CPF or CNPJ (Brazilian tax ID)
   * @param {string} [data.email] - Customer's email address
   * @param {string} [data.mobilePhone] - Customer's mobile phone number
   * @param {string} [data.observations] - Additional observations (e.g., CRM number)
   * @param {string} [data.groupName] - Customer's group name
   * @param {string} [data.address] - Street address
   * @param {string} [data.addressNumber] - Street number
   * @param {string} [data.complement] - Address complement
   * @param {string} [data.province] - Neighborhood/District
   * @param {string} [data.postalCode] - Postal code (CEP)
   * @param {boolean} [data.notificationDisabled] - Whether notifications are disabled
   * @returns {Promise<Object>} Updated customer response
   * @throws {Error} If the request fails
   * @example
   * try {
   *   const updatedCustomer = await asaas.customers.update('cus_000000000000', {
   *     name: "João Silva",
   *     email: "joao.silva@email.com"
   *   });
   *   console.log(updatedCustomer);
   * } catch (error) {
   *   console.error(error);
   * }
   */
  async updateCustomer(customerId, data) {
    try {
      if (!customerId) {
        throw new Error('Customer ID is required');
      }

      const response = await fetch(`${this.baseApiUrl}/customers/${customerId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'access_token': this.apiKey
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(responseData)}`);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Network error: ${error.message}`);
      }
      throw new Error(`Customer update failed: ${error.message}`);
    }
  }

  /**
   * Create a new payment
   * @param {Object} data - Payment data
   * @param {string} data.customer - Customer ID
   * @param {string} data.billingType - Billing type (e.g., "BOLETO")
   * @param {number} data.value - Payment value
   * @param {string} data.dueDate - Payment due date (YYYY-MM-DD)
   * @returns {Promise<Object>} Created payment response
   * @throws {Error} If the request fails
   */
  async createPayment(data) {
    try {
      const response = await fetch(`${this.baseApiUrl}/payments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });

      const responseData = await response.json();
      console.log('responseData: ', responseData)

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(responseData)}`);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Network error: ${error.message}`);
      }
      throw new Error(`Payment creation failed: ${error.message}`);
    }
  }

  /**
   * List payments with optional filters
   * @param {Object} filters - Filter parameters
   * @param {string} [filters.customer] - Filter by Customer ID
   * @param {string} [filters.customerGroupName] - Filter by Customer group name
   * @param {string} [filters.billingType] - Filter by Billing Type
   * @param {string} [filters.status] - Filter by Status
   * @param {string} [filters.subscription] - Filter by Subscription ID
   * @param {string} [filters.installment] - Filter by Installment ID
   * @param {string} [filters.externalReference] - Filter by External Reference
   * @param {string} [filters.paymentDate] - Filter by Payment Date
   * @param {string} [filters.estimatedCreditDate] - Filter by Estimated Credit Date
   * @param {string} [filters.pixQrCodeId] - Filter by Static Pix QR Code ID
   * @param {boolean} [filters.anticipated] - Filter by Antecipated status
   * @param {string} [filters["dateCreated[ge]"]] - Filter by Initial Date Created
   * @param {string} [filters["dateCreated[le]"]] - Filter by End Date Created
   * @param {string} [filters["paymentDate[ge]"]] - Filter by Initial Payment Date
   * @param {string} [filters["paymentDate[le]"]] - Filter by End Payment Date
   * @param {string} [filters["estimatedCreditDate[ge]"]] - Filter by Initial Estimated Credit Date
   * @param {string} [filters["estimatedCreditDate[le]"]] - Filter by End Estimated Credit Date
   * @param {string} [filters["dueDate[ge]"]] - Filter by Initial Due Date
   * @param {string} [filters["dueDate[le]"]] - Filter by End Due Date
   * @param {string} [filters.user] - Filter by the Email address of the user who created the charge
   * @param {number} [filters.offset] - Offset of search
   * @param {number} [filters.limit] - Limit of results
   * @returns {Promise<Object>} Payment list response
   * @throws {Error} If the request fails
   * @example
   * try {
   *   const payments = await asaas.payments.list({
   *     customer: "cus_123abcde456",
   *     limit: 10,
   *     offset: 0
   *   });
   *   console.log(payments);
   * } catch (error) {
   *   console.error(error);
   * }
   */
  async listPayments(filters = {}) {
    try {
      // Build query parameters
      const queryParams = new URLSearchParams();
      const validFilters = [
        'cpfCnpj',
        'customer',
        'customerGroupName',
        'billingType',
        'status',
        'subscription',
        'installment',
        'externalReference',
        'paymentDate',
        'estimatedCreditDate',
        'pixQrCodeId',
        'anticipated',
        'dateCreated[ge]',
        'dateCreated[le]',
        'paymentDate[ge]',
        'paymentDate[le]',
        'estimatedCreditDate[ge]',
        'estimatedCreditDate[le]',
        'dueDate[ge]',
        'dueDate[le]',
        'user',
        'offset',
        'limit'
      ];

      validFilters.forEach(filter => {
        if (filters[filter] !== undefined) {
          queryParams.append(filter, filters[filter]);
        }
      });

      const url = `${this.baseApiUrl}/payments?${queryParams.toString()}`;

      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(responseData)}`);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Network error: ${error.message}`);
      }
      throw new Error(`Payment list fetch failed: ${error.message}`);
    }
  }

  /**
   * Get a payment by ID
   * @param {string} paymentId - The payment's unique identifier
   * @returns {Promise<Object>} Payment details
   * @throws {Error} If the payment is not found or request fails
   * @example
   * try {
   *   const payment = await asaas.payments.getById('pay_000000000000');
   *   console.log(payment);
   * } catch (error) {
   *   console.error(error);
   * }
   */
  async getPaymentById(paymentId) {
    try {
      if (!paymentId) {
        throw new Error('Payment ID is required');
      }

      const response = await fetch(`${this.baseApiUrl}/payments/${paymentId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      });

      const responseData = await response.json();

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}, message: ${JSON.stringify(responseData)}`);
      }

      return responseData;
    } catch (error) {
      if (error instanceof TypeError) {
        throw new Error(`Network error: ${error.message}`);
      }
      throw new Error(`Payment fetch failed: ${error.message}`);
    }
  }
}

export default AsaasClient;