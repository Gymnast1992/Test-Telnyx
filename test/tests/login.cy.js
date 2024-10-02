import Login from "../../fixtures/pom/login.page";
const email = "1992maksym1992@gmail.com";
const password = "mynewTest123!";

describe("Login", () => {
  beforeEach(() => {
    cy.visit("https://portal.telnyx.com/#/login/sign-in");
  });

  it("TC06, The user should be able to log in to the existing account", () => {
    Login.inputEmail.type(email);
    Login.inputPassword.type(password);
    Login.btnSubmit.click();
    cy.wait(3000);
    Login.btnSetUpLater.click();
    Login.welcomeMessage.should("be.visible");
  });
});
