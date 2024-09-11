const email = "1992maksym1992@gmail.com"
const password = "mynewTest123!"

describe('Positive testing', () => {
    beforeEach(() => {
      cy.visit('https://portal.telnyx.com/#/login/sign-in')
      cy.get('[name="email"]').type(email)
      cy.get('[name="password"]').type(password)
      cy.get('[type="submit"]').eq(1).click()
      cy.wait(3000)
      cy.get('.MuiBox-root > .frontend-customer-portal-1l0ohas').click()
      cy.get('[data-testid="welcome-message"]').should("be.visible")
      
    })
  
    it('TC03, The user should be able to sign up for the marketing newsletter', () => {
  
        cy.get('[name="email"]').type(email)
        
  
    })
  
  })