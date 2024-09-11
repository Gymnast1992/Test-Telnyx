/// <reference types="cypress" />
const text = "Pay only for what you use, when you use it."

describe('Positive testing', () => {
  beforeEach(() => {
    cy.visit('https://telnyx.com/')
  })

  // it(' TC01, The user should be able to navigate to the homepage', () => {

  //   cy.get('#onetrust-accept-btn-handler').click()
  //   cy.get('.c-fGbiyG')
  //     .should('have.text', "Modular, resilient communications and connectivity")
  //   cy.get('[id="header-sign-up"]').should("be.visible")

  // })

  // it(' TC02, The user should be able to sign up with existing credentials', () => {

  //     const email = "1992maksym1992@gmail.com"
  //     const firstName = "Maks"
  //     const lastName = "Semen"
  //     const password = "mynewTest123!"
  //     const text = "One last step"

  //     cy.wait(2000)
  //     cy.get('#onetrust-accept-btn-handler').click()
  //     cy.get('[id="header-sign-up"]').click()
  //     cy.get('#email').type(email)
  //     cy.get('#first_name').type(firstName)
  //     cy.get('#last_name').type(lastName)
  //     cy.get('#password').type(password)
  //     cy.get('#terms_and_conditions').check()
  //     cy.get('[type="submit"]').eq(0).click()
  //     cy.wait(3000)
  //     cy.get('.c-fGbiyG > .c-PJLV').should("have.text", text)

  // })

  it('TC03, The user should be able to navigate to the Pricing page', () => {
    cy.get('.c-gMsfuT').click()
    cy.get('[type="button"]').eq(1).click()
    cy.contains('See all pricing').click({force: true})
    cy.get('[class="c-PJLV c-fKwEGa c-PJLV-cHtIMp-dark-false"]')
      .eq(0)
      .should("have.text", text)
  })

})
