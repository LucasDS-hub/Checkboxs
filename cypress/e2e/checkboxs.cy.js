describe('Testando Checkboxes', () => {
  beforeEach(() => {
    cy.visit('https://the-internet.herokuapp.com/checkboxes')
  })

  it('Marque o primeiro checkbox se não estiver marcado', () => {
    cy.get('input[type="checkbox"]').first().check().should('be.checked')
  })

  it('Desmarque o segundo checkbox se estiver marcado', () => {
    cy.get('input[type="checkbox"]').eq(1).uncheck().should('not.be.checked')
  })

  it('Marque os dois checkboxes', () => {
    cy.get('input[type="checkbox"]').check().should('be.checked')
  })

  it('Desmarque os dois checkboxes', () => {
    cy.get('input[type="checkbox"]').uncheck().should('not.be.checked')
  })
})