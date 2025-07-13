/**
 * Subscription model class
 * Represents a payment subscription in the system with attendance tracking
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

    // Campos de controle de presença e utilização
    this.selectedItems = this.initializeSelectedItems(data.selectedItems || {});
    this.attendance = data.attendance || {
      present: false,
      checkedInAt: null,
      checkedInBy: null,
      notes: ''
    };
  }

  /**
   * Initialize selectedItems with attendance tracking
   * @param {Object} items - Selected items data
   * @returns {Object} - Items with attendance fields
   */
  initializeSelectedItems(items) {
    const result = {
      journey: null,
      workshops: [],
      courses: [],
      dayUse: null
    };

    // Journey
    if (items.journey) {
      result.journey = {
        ...items.journey,
        attended: items.journey?.attended || false,
        attendedAt: items.journey?.attendedAt || null,
        attendedBy: items.journey?.attendedBy || null
      };
    }

    // Workshops
    if (items.workshops && Array.isArray(items.workshops)) {
      result.workshops = items.workshops.map(workshop => ({
        ...workshop,
        attended: workshop?.attended || false,
        attendedAt: workshop?.attendedAt || null,
        attendedBy: workshop?.attendedBy || null
      }));
    }

    // Courses
    if (items.courses && Array.isArray(items.courses)) {
      result.courses = items.courses.map(course => ({
        ...course,
        attended: course?.attended || false,
        attendedAt: course?.attendedAt || null,
        attendedBy: course?.attendedBy || null
      }));
    }

    // DayUse
    if (items.dayUse) {
      result.dayUse = {
        ...items.dayUse,
        attended: items.dayUse?.attended || false,
        attendedAt: items.dayUse?.attendedAt || null,
        attendedBy: items.dayUse?.attendedBy || null
      };
    }

    return result;
  }

  /**
   * Mark attendance for a specific item
   * @param {string} itemType - Type of item (journey, workshops, courses, dayUse)
   * @param {number} itemIndex - Index for array items (workshops, courses)
   * @param {string} checkedBy - Who marked the attendance
   */
  markItemAttendance(itemType, itemIndex = null, checkedBy = 'system') {
    const now = new Date().toISOString();

    if (itemType === 'journey' && this.selectedItems.journey) {
      this.selectedItems.journey.attended = true;
      this.selectedItems.journey.attendedAt = now;
      this.selectedItems.journey.attendedBy = checkedBy;
    } else if (itemType === 'dayUse' && this.selectedItems.dayUse) {
      this.selectedItems.dayUse.attended = true;
      this.selectedItems.dayUse.attendedAt = now;
      this.selectedItems.dayUse.attendedBy = checkedBy;
    } else if (itemType === 'workshops' && this.selectedItems.workshops[itemIndex]) {
      this.selectedItems.workshops[itemIndex].attended = true;
      this.selectedItems.workshops[itemIndex].attendedAt = now;
      this.selectedItems.workshops[itemIndex].attendedBy = checkedBy;
    } else if (itemType === 'courses' && this.selectedItems.courses[itemIndex]) {
      this.selectedItems.courses[itemIndex].attended = true;
      this.selectedItems.courses[itemIndex].attendedAt = now;
      this.selectedItems.courses[itemIndex].attendedBy = checkedBy;
    }
  }

  /**
   * Mark general attendance for the person
   * @param {string} checkedBy - Who marked the attendance
   * @param {string} notes - Optional notes
   */
  markAttendance(checkedBy = 'system', notes = '') {
    this.attendance.present = true;
    this.attendance.checkedInAt = new Date().toISOString();
    this.attendance.checkedInBy = checkedBy;
    this.attendance.notes = notes;
  }

  /**
   * Check if person attended any item
   * @returns {boolean} - True if attended at least one item
   */
  hasAnyAttendance() {
    const journey = this.selectedItems.journey?.attended || false;
    const workshops = this.selectedItems.workshops?.some(w => w.attended) || false;
    const courses = this.selectedItems.courses?.some(c => c.attended) || false;
    const dayUse = this.selectedItems.dayUse?.attended || false;

    return journey || workshops || courses || dayUse;
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
      lastBankSlipViewedDate: this.lastBankSlipViewedDate,
      selectedItems: this.selectedItems,
      attendance: this.attendance
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
      lastBankSlipViewedDate: this.lastBankSlipViewedDate,
      selectedItems: this.selectedItems,
      attendance: this.attendance
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