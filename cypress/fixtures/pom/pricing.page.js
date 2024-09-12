class Pricing {
    get btnPricing() {return cy.get('[type="button"]').eq(1)}
    get btnSeeAllPricing() {return cy.contains("See all pricing")}
    get sectionGreen() {return cy.get('[class="c-PJLV c-fKwEGa c-PJLV-cHtIMp-dark-false"]')
        .eq(0)}
    
}

export default new Pricing()