import Shop from "../../fixtures/pom/shop.page";

describe("Shop", () => {
  beforeEach(() => {
    cy.visit("https://shop.telnyx.com/");
  });

  it("TC08, The user should be able to navigate to the Telnyx shop", () => {
    Shop.txtFeaturedProducts.should("be.visible");
  });

  it("TC09, The user should be able to navigate to the Accessories section and verify the card", () => {
    Shop.btnAccessories.click({ force: true });
    Shop.firstCard.should("be.visible");
  });
});
