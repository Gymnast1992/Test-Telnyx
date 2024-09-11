describe('Positive testing', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
  })

  it(' TC01, The user should be able to navigate to the homepage', () => {

    cy.get('#onetrust-accept-btn-handler').click()
    cy.get('.c-fGbiyG')
      .should('have.text', "Modular, resilient communications and connectivity")
    cy.get('[id="header-sign-up"]').should("be.visible")
  })

})
