class Login {
    get inputEmail() {return cy.get('[name="email"]')}
    get inputPassword() {return cy.get('[name="password"]')}
    get btnSubmit() {return cy.get('[type="submit"]').eq(1)}
    get btnSetUpLater() {return cy.get(".MuiBox-root > .frontend-customer-portal-1l0ohas")}
    get welcomeMessage() {return cy.get('[data-testid="welcome-message"]')}
}

export default new Login()