import Homepage from "../../fixtures/pom/home.page";
import Pricing from "../../fixtures/pom/pricing.page";
const text = "Pay only for what you use, when you use it.";

describe("Pricing", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it("TC07, The user should be able to navigate to the Pricing page", () => {
    Homepage.btnHamburgerMenu.click();
    Pricing.btnPricing.click();
    Pricing.btnSeeAllPricing.click({ force: true });
    Pricing.sectionGreen.should("have.text", text);
  });
});
