/**
 * Subscription model class
 * Represents a payment subscription in the system
 */
class Subscription {
  /**
   * Constructor for the Subscription class
   * @param {Object} data - JSON object containing subscription properties
   */
  constructor(data = {}) {
    this.object = data.object || '';
    this.id = data.id || '';
    this.dateCreated = data.dateCreated || '';
    this.customer = data.customer || '';
    this.value = data.value || 0;
    this.description = data.description || '';
    this.billingType = data.billingType || '';
    this.confirmedDate = data.confirmedDate || '';
    this.creditCard = data.creditCard || {
      creditCardNumber: '',
      creditCardBrand: '',
      creditCardToken: ''
    };
    this.pixTransaction = data.pixTransaction || null;
    this.status = data.status || '';
    this.dueDate = data.dueDate || '';
    this.clientPaymentDate = data.clientPaymentDate || null;
    this.installmentNumber = data.installmentNumber || null;
    this.invoiceUrl = data.invoiceUrl || '';
    this.invoiceNumber = data.invoiceNumber || '';
    this.externalReference = data.externalReference || null;
    this.transactionReceiptUrl = data.transactionReceiptUrl || null;
    this.nossoNumero = data.nossoNumero || '';
    this.bankSlipUrl = data.bankSlipUrl || '';
    this.lastInvoiceViewedDate = data.lastInvoiceViewedDate || null;
    this.lastBankSlipViewedDate = data.lastBankSlipViewedDate || null;
  }

  /**
   * Get all properties as a JSON object
   * @returns {Object} - JSON representation of the subscription
   */
  get json() {
    return {
      object: this.object,
      id: this.id,
      dateCreated: this.dateCreated,
      customer: this.customer,
      value: this.value,
      description: this.description,
      billingType: this.billingType,
      confirmedDate: this.confirmedDate,
      creditCard: this.creditCard,
      pixTransaction: this.pixTransaction,
      status: this.status,
      dueDate: this.dueDate,
      clientPaymentDate: this.clientPaymentDate,
      installmentNumber: this.installmentNumber,
      invoiceUrl: this.invoiceUrl,
      invoiceNumber: this.invoiceNumber,
      externalReference: this.externalReference,
      transactionReceiptUrl: this.transactionReceiptUrl,
      nossoNumero: this.nossoNumero,
      bankSlipUrl: this.bankSlipUrl,
      lastInvoiceViewedDate: this.lastInvoiceViewedDate,
      lastBankSlipViewedDate: this.lastBankSlipViewedDate
    };
  }

  /**
   * Convert subscription data to a plain JavaScript object
   * @returns {Object} - Object representation of the subscription
   */
  toObject() {
    return {
      object: this.object,
      id: this.id,
      dateCreated: this.dateCreated,
      customer: this.customer,
      value: this.value,
      description: this.description,
      billingType: this.billingType,
      confirmedDate: this.confirmedDate,
      creditCard: this.creditCard,
      pixTransaction: this.pixTransaction,
      status: this.status,
      dueDate: this.dueDate,
      clientPaymentDate: this.clientPaymentDate,
      installmentNumber: this.installmentNumber,
      invoiceUrl: this.invoiceUrl,
      invoiceNumber: this.invoiceNumber,
      externalReference: this.externalReference,
      transactionReceiptUrl: this.transactionReceiptUrl,
      nossoNumero: this.nossoNumero,
      bankSlipUrl: this.bankSlipUrl,
      lastInvoiceViewedDate: this.lastInvoiceViewedDate,
      lastBankSlipViewedDate: this.lastBankSlipViewedDate
    };
  }

  /**
   * Convert subscription data to JSON string
   * @returns {string} - JSON string representation of the subscription
   */
  toJson() {
    return JSON.stringify(this.toObject());
  }
}

export default Subscription;