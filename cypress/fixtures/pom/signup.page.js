class SignUp {
    get inputEmail() {return cy.get('#email')}
    get inputPassword() {return cy.get('#password')}
    get inputFirstName() {return cy.get('#first_name')}
    get inputLastName() {return cy.get('#last_name')}
    get checkMarkTerms() {return cy.get('#terms_and_conditions')}
    get btnSubmit() {return cy.get('[type="submit"]').eq(0)}
    get errorMessageCredentials() {return cy.get('.c-UUKrH-kDyeyw-type-error')}
    get errorMessageEmail() {return cy.get('[id="email_message"]')}
    get errorMessageTerms() {return cy.get("#terms_and_conditions_message")}
    get errorMessagePassword() {return cy.get('[id="passwordMinLength"]')}
    get succesMessage() {return cy.get('[class="c-PJLV c-fGbiyG c-PJLV-cHtIMp-dark-false"]')}
}

export default new SignUp()