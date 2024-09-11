const text = "Pay only for what you use, when you use it.";

describe("Pricing", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it("TC07, The user should be able to navigate to the Pricing page", () => {
    cy.get(".c-gMsfuT").click();
    cy.get('[type="button"]').eq(1).click();
    cy.contains("See all pricing").click({ force: true });
    cy.get('[class="c-PJLV c-fKwEGa c-PJLV-cHtIMp-dark-false"]')
      .eq(0)
      .should("have.text", text);
  });
});
