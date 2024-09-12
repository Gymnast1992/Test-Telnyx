class Homepage {
    get btnAcceptCockies() {return cy.get("#onetrust-accept-btn-handler")}
    get sectionUnderHeader() {return cy.get(".c-fGbiyG")}
    get btnSignUp() {return cy.get('[id="header-sign-up"]')}
    get btnHamburgerMenu() {return cy.get(".c-gMsfuT")}
}

export default new Homepage()