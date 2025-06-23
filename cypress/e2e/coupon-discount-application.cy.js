// cypress/e2e/coupon-discount-application.cy.js
// Teste E2E para verificar se os descontos de cupom estão sendo aplicados corretamente na interface

describe('Coupon Discount Application', () => {
  beforeEach(() => {
    // Configurar estado inicial para o teste
    cy.visit('/')

    // Navegar para a página de inscrição
    cy.get('[data-testid="registration-link"]', { timeout: 10000 }).should('exist')
    cy.get('[data-testid="registration-link"]').click()
  })

  it('should apply course-specific discount correctly', () => {
    // 1. Preencher dados pessoais (simulando)
    cy.get('input[name="fullName"]', { timeout: 10000 }).should('be.visible')
    cy.get('input[name="fullName"]').type('João da Silva Teste')
    cy.get('input[name="email"]').type('joao.teste@email.com')
    cy.get('input[name="cpf"]').type('12345678901')
    cy.get('input[name="phone"]').type('27999999999')

    // Prosseguir para próximo passo
    cy.get('button[type="submit"]').click()

    // 2. Selecionar categoria (Médico Sócio)
    cy.get('[data-category-id="1"]', { timeout: 10000 }).should('be.visible')
    cy.get('[data-category-id="1"]').click()

    // Prosseguir para próximo passo
    cy.get('button[type="button"]').contains('Próximo').click()

    // 3. Selecionar produtos: Congress + Course
    cy.get('[data-product-type="journey"]', { timeout: 10000 }).should('be.visible')
    cy.get('[data-product-type="journey"]').click()

    cy.get('[data-product-type="course"]').first().click()

    // Prosseguir para resumo
    cy.get('button[type="button"]').contains('Próximo').click()

    // 4. Verificar valores originais antes do cupom
    cy.get('[data-testid="journey-price"]', { timeout: 10000 }).should('contain', 'R$ 220,00')
    cy.get('[data-testid="course-price"]').should('contain', 'R$ 150,00')
    cy.get('[data-testid="total-value"]').should('contain', 'R$ 370,00')

    // 5. Aplicar cupom CURSO15
    cy.get('input[placeholder*="cupom"]').type('CURSO15')
    cy.get('button').contains('Aplicar').click()

    // 6. Aguardar aplicação do cupom
    cy.get('[data-testid="applied-coupon"]', { timeout: 5000 }).should('be.visible')
    cy.get('[data-testid="applied-coupon"]').should('contain', 'CURSO15')

    // 7. Verificar que o desconto foi aplicado apenas no curso
    // Journey (Congress) deve manter o preço original
    cy.get('[data-testid="journey-price"]').should('contain', 'R$ 220,00')

    // Course deve mostrar preço com desconto
    cy.get('[data-testid="course-price"]').within(() => {
      cy.get('.originalPrice').should('contain', 'R$ 150,00')
      cy.get('.discountedPrice').should('contain', 'R$ 127,50')
    })

    // 8. Verificar total com desconto
    cy.get('[data-testid="subtotal-value"]').should('contain', 'R$ 370,00')
    cy.get('[data-testid="discount-value"]').should('contain', 'R$ 22,50')
    cy.get('[data-testid="total-value"]').should('contain', 'R$ 347,50')
  })

  it('should apply category-wide discount correctly', () => {
    // Teste com um cupom que aplica a todas as categorias
    // Similar ao teste anterior, mas com cupom "ONCOLOGIA100"

    // 1-3. Mesmo fluxo até a seleção de produtos
    cy.get('input[name="fullName"]', { timeout: 10000 }).type('Maria Teste')
    cy.get('input[name="email"]').type('maria.teste@email.com')
    cy.get('input[name="cpf"]').type('98765432100')
    cy.get('input[name="phone"]').type('27888888888')
    cy.get('button[type="submit"]').click()

    cy.get('[data-category-id="1"]', { timeout: 10000 }).click()
    cy.get('button[type="button"]').contains('Próximo').click()

    cy.get('[data-product-type="journey"]', { timeout: 10000 }).click()
    cy.get('[data-product-type="course"]').first().click()
    cy.get('button[type="button"]').contains('Próximo').click()

    // 4. Aplicar cupom de 100% (ONCOLOGIA100)
    cy.get('input[placeholder*="cupom"]').type('ONCOLOGIA100')
    cy.get('button').contains('Aplicar').click()

    // 5. Verificar que o desconto foi aplicado em todos os produtos
    cy.get('[data-testid="applied-coupon"]', { timeout: 5000 }).should('contain', 'ONCOLOGIA100')

    // Ambos produtos devem mostrar desconto de 100%
    cy.get('[data-testid="journey-price"]').within(() => {
      cy.get('.originalPrice').should('contain', 'R$ 220,00')
      cy.get('.discountedPrice').should('contain', 'R$ 0,00')
    })

    cy.get('[data-testid="course-price"]').within(() => {
      cy.get('.originalPrice').should('contain', 'R$ 150,00')
      cy.get('.discountedPrice').should('contain', 'R$ 0,00')
    })

    // Total deve ser R$ 0,00
    cy.get('[data-testid="total-value"]').should('contain', 'R$ 0,00')
  })

  it('should handle invalid coupons gracefully', () => {
    // Teste com cupom inválido
    // 1-3. Fluxo básico
    cy.get('input[name="fullName"]', { timeout: 10000 }).type('Pedro Teste')
    cy.get('input[name="email"]').type('pedro.teste@email.com')
    cy.get('input[name="cpf"]').type('11111111111')
    cy.get('input[name="phone"]').type('27777777777')
    cy.get('button[type="submit"]').click()

    cy.get('[data-category-id="1"]', { timeout: 10000 }).click()
    cy.get('button[type="button"]').contains('Próximo').click()

    cy.get('[data-product-type="journey"]', { timeout: 10000 }).click()
    cy.get('button[type="button"]').contains('Próximo').click()

    // 4. Tentar aplicar cupom inválido
    cy.get('input[placeholder*="cupom"]').type('INVALID123')
    cy.get('button').contains('Aplicar').click()

    // 5. Verificar mensagem de erro
    cy.get('[data-testid="coupon-error"]', { timeout: 5000 }).should('be.visible')
    cy.get('[data-testid="coupon-error"]').should('contain', 'inválido')

    // 6. Verificar que os preços não foram alterados
    cy.get('[data-testid="journey-price"]').should('contain', 'R$ 220,00')
    cy.get('[data-testid="total-value"]').should('contain', 'R$ 220,00')
  })
})
