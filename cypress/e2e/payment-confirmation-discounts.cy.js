describe('PaymentConfirmationStep - Coupon Discount Interface', () => {
  beforeEach(() => {
    // Setup mock data for the test
    cy.window().then((win) => {
      // Mock the registration context with coupon data
      win.mockRegistrationData = {
        formData: {
          personalInfo: {
            fullName: 'João Silva',
            email: 'joao@test.com',
            cpf: '12345678901'
          },
          category: {
            title: 'Médico Sócio'
          },
          selectedItems: {
            journey: {
              title: '2ª Jornada de Medicina Reprodutiva',
              getCurrentPrice: () => ({ value: 'R$ 220,00' })
            },
            courses: [{
              title: 'Curso de Embriologia Básica',
              getCurrentPrice: () => ({ value: 'R$ 150,00' })
            }]
          },
          appliedCoupon: {
            code: 'CURSO15',
            name: 'Desconto 15% em Cursos',
            discount: {
              type: 'PERCENTAGE',
              value: 15
            },
            restrictions: {
              applicableProducts: ['COURSE']
            }
          }
        },
        paymentResponse: {
          id: 'PAY123',
          invoiceNumber: 'INV001',
          status: 'CONFIRMED',
          value: 347.50,
          billingType: 'PIX'
        }
      };
    });
  });

  it('should display products with correct coupon discounts applied', () => {
    cy.visit('/payment-confirmation'); // Adjust URL as needed

    // Check if journey (congress) shows no discount
    cy.get('[data-testid="journey-item"]').within(() => {
      cy.get('[data-testid="journey-price"]').should('contain', 'R$ 220,00');
      cy.get('[data-testid="journey-price"]').should('not.contain', 'R$ 0,00');
    });

    // Check if course shows discount applied
    cy.get('[data-testid="course-item-0"]').within(() => {
      cy.get('[data-testid="course-price-0"]').should('contain', 'R$ 150,00');
      cy.get('[data-testid="course-price-0"]').should('contain', 'R$ 127,50');
    });
  });

  it('should display coupon information when discount is applied', () => {
    cy.visit('/payment-confirmation');

    // Check if applied coupon info is displayed
    cy.get('[data-testid="applied-coupon-info"]').should('be.visible');
    cy.get('[data-testid="applied-coupon-info"]').within(() => {
      cy.should('contain', 'CURSO15');
      cy.should('contain', 'Desconto 15% em Cursos');
      cy.should('contain', '15%');
    });
  });

  it('should display discount policy disclaimer when coupon is used', () => {
    cy.visit('/payment-confirmation');

    // Check if disclaimer is shown
    cy.get('[data-testid="coupon-disclaimer"]').should('be.visible');
    cy.get('[data-testid="coupon-disclaimer"]').within(() => {
      cy.should('contain', 'POLÍTICA DE DESCONTOS');
      cy.should('contain', 'não são reembolsáveis');
      cy.should('contain', 'não podem ser convertidos em créditos');
    });
  });

  it('should handle free registration (100% discount) correctly', () => {
    cy.window().then((win) => {
      // Update mock data for 100% discount
      win.mockRegistrationData.formData.appliedCoupon = {
        code: 'FREE100',
        name: 'Inscrição Gratuita',
        discount: {
          type: 'PERCENTAGE',
          value: 100
        }
      };
      win.mockRegistrationData.paymentResponse = {
        ...win.mockRegistrationData.paymentResponse,
        value: 0,
        billingType: 'COUPON'
      };
    });

    cy.visit('/payment-confirmation');

    // Check if free registration message is displayed
    cy.get('[data-testid="free-registration-message"]').should('be.visible');
    cy.get('[data-testid="free-registration-message"]').should('contain', 'inscrição foi confirmada gratuitamente');

    // Check if all products show R$ 0,00
    cy.get('[data-testid="journey-price"]').should('contain', 'R$ 0,00');
    cy.get('[data-testid="course-price-0"]').should('contain', 'R$ 0,00');
  });

  it('should display correct payment status for coupon-based payments', () => {
    cy.window().then((win) => {
      // Update mock data for coupon payment
      win.mockRegistrationData.paymentResponse.billingType = 'COUPON';
      win.mockRegistrationData.paymentResponse.value = 0;
    });

    cy.visit('/payment-confirmation');

    // Check payment status shows as free registration
    cy.get('[data-testid="payment-status"]').should('contain', 'Inscrição Gratuita');
  });

  it('should not show payment links for free registrations', () => {
    cy.window().then((win) => {
      // Set up 100% discount scenario
      win.mockRegistrationData.paymentResponse = {
        ...win.mockRegistrationData.paymentResponse,
        value: 0,
        billingType: 'COUPON'
      };
    });

    cy.visit('/payment-confirmation');

    // Payment buttons should not be visible for free registration
    cy.get('.paymentButton').should('not.exist');
    cy.get('.downloadButton').should('not.exist');
  });

  it('should send email with correct discount information', () => {
    // Mock the email API
    cy.intercept('POST', '/api/emails/send', {
      statusCode: 200,
      body: { success: true }
    }).as('sendEmail');

    cy.visit('/payment-confirmation');

    // Wait for email to be sent automatically
    cy.wait('@sendEmail').then((interception) => {
      const emailData = interception.request.body.data;

      // Check if email contains correct coupon information
      expect(emailData.couponInfo).to.exist;
      expect(emailData.couponInfo.code).to.equal('CURSO15');
      expect(emailData.couponInfo.hasDiscount).to.be.true;

      // Check if selected items have correct pricing format
      const courseItem = emailData.selectedItems.find(item => item.includes('Curso de Embriologia'));
      expect(courseItem).to.include('~~R$ 150,00~~');
      expect(courseItem).to.include('R$ 127,50');

      const journeyItem = emailData.selectedItems.find(item => item.includes('Jornada'));
      expect(journeyItem).to.include('R$ 220,00');
      expect(journeyItem).to.not.include('~~');
    });
  });

  it('should handle products without discount correctly', () => {
    cy.visit('/payment-confirmation');

    // Journey should show normal price without strikethrough
    cy.get('[data-testid="journey-item"]').within(() => {
      cy.get('.originalPrice').should('not.exist');
      cy.get('.singlePrice').should('exist');
      cy.get('.singlePrice').should('contain', 'R$ 220,00');
    });
  });

  it('should handle products with discount correctly', () => {
    cy.visit('/payment-confirmation');

    // Course should show original and discounted price
    cy.get('[data-testid="course-item-0"]').within(() => {
      cy.get('.originalPrice').should('exist');
      cy.get('.discountedPrice').should('exist');
      cy.get('.originalPrice').should('contain', 'R$ 150,00');
      cy.get('.discountedPrice').should('contain', 'R$ 127,50');
    });
  });
});
