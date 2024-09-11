const text = "Featured products"

describe('Positive testing', () => {
  beforeEach(() => {
    cy.visit('https://shop.telnyx.com/')
  })

  it('TC08, The user should be able to navigate to the Telnyx shop', () => {
    cy.contains(text)
      .should("be.visible")

  })

  it('TC09, The user should be able to navigate to the Accessories section and verify the card', () => {
    cy.get('#HeaderDrawer-accessories').click({force: true})
    cy.get('#CardLink-template--14828910739534__product-grid-6751953256526')
      .should('be.visible')
  })
})
