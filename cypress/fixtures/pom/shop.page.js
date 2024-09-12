class Shop {
  get txtFeaturedProducts() {
    return cy.contains("Featured products");
  }
  get btnAccessories() {
    return cy.get("#HeaderDrawer-accessories");
  }
  get firstCard() {
    return cy.get(
      "#CardLink-template--14828910739534__product-grid-6751953256526"
    );
  }
}

export default new Shop();
