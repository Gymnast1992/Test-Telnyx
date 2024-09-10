describe('Positive testing', () => {
    beforeEach(() => {
      cy.visit('/sign-up')
    })

    // it('TC05, The user should not be able to sign up with an empty field email', () => {
        
    //     const errorMessage = "errorThis field is required."
    //     const firstName = "Maks"
    //     const lastName = "Semen"
    //     const password = "mynewTest123!"
        
    //     cy.get('#first_name').type(firstName)
    //     cy.get('#last_name').type(lastName)
    //     cy.get('#password').type(password)
    //     cy.get('#terms_and_conditions').check()
    //     cy.get('[type="submit"]').eq(0).click()
    //     cy.get('[id="email_message"]').should('have.text', errorMessage)

    // })

    // it('TC06, The user should not be able to sign up without checkmark Terms and Conditions', () => {

    //   const errorMessage = "errorPlease accept the terms and conditions"
    //   const email = "testtelnyx@gmail.com"
    //   const firstName = "Maksym"
    //   const lastName = "Semen"
    //   const password = "mynewTest123!"
        
    //   cy.get('#email').type(email)
    //   cy.get('#first_name').type(firstName)
    //   cy.get('#last_name').type(lastName)
    //   cy.get('#password').type(password)
      
    //   cy.get('[type="submit"]').eq(0).click()
    //   cy.get('#terms_and_conditions_message').should('have.text', errorMessage)

    // })

    it('TC07, The user should not be able to sign up with a password of less than 12 characters', () =>{
      
      const email = "1992maksym1992@gmail.com"
      const firstName = "Maks"
      const lastName = "Semen"
      const password = "newTest123!"
      const errorMessage = "Password must be at least 12 characters."

      cy.wait(2000)
      cy.get('#onetrust-accept-btn-handler').click()
      cy.get('[id="header-sign-up"]').click()
      cy.get('#email').type(email)
      cy.get('#first_name').type(firstName)
      cy.get('#last_name').type(lastName)
      cy.get('#password').type(password)
      cy.get('#terms_and_conditions').check()
      cy.get('[type="submit"]').eq(0).click()
      cy.get('[id="passwordMinLength"]').should("have.text", errorMessage)

    })
  
})