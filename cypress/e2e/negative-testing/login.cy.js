describe('Negative testing', () => {
    beforeEach(() => {
      cy.visit('https://portal.telnyx.com/#/login/sign-in')
    })
  
    it('TC08, The user should be able to log in to the existing account', () => {

        const email = "1992maksym1992@gmail.com"
        const errorMessage = "Required"
  
        cy.get('[name="email"]').type(email)
        cy.get('[type="submit"]').eq(1).click()
        cy.wait(3000)
        cy.get('[type="submit"]').eq(1).click()
        cy.get('.MuiFormHelperText-root').should("have.text", errorMessage)
  
    })
  
  })