describe('Positive testing', () => {
    beforeEach(() => {
      cy.visit('https://portal.telnyx.com/#/login/sign-in')
    })
  
    it('TC04, The user should be able to log in to the existing account', () => {

        const email = "1992maksym1992@gmail.com"
        const password = "mynewTest123!"
  
        cy.get('[name="email"]').type(email)
        cy.get('[name="password"]').type(password)
        cy.get('[type="submit"]').eq(1).click()
        cy.wait(3000)
        cy.get('.MuiBox-root > .frontend-customer-portal-1l0ohas').click()
        cy.get('[data-testid="welcome-message"]').should("be.visible")
  
    })
  
  })