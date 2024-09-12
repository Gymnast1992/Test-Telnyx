import Homepage from "../../fixtures/pom/home.page";
const text = "Modular, resilient communications and connectivity";

describe("Homepage", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it(" TC01, The user should be able to navigate to the homepage", () => {
    Homepage.btnAcceptCockies.click();
    Homepage.sectionUnderHeader.should("have.text", text);
    Homepage.btnSignUp.should("be.visible");
  });
});
