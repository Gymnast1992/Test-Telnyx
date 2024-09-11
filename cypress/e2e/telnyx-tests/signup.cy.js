const email = "1992maksym1992@gmail.com";
const firstName = "Maks";
const lastName = "Semen";
const password = "mynewTest123!";
const password11Characters = "newTest123!";
const text = "One last step";
const errorMessageEmail = "errorThis field is required.";
const errorMessageTerms = "errorPlease accept the terms and conditions";
const errorMessagePassword = "Password must be at least 12 characters.";

describe("Sign up", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  // it(' TC02, The user should not be able to sign up twice with the same credentials', () => {
  //     cy.get('[id="header-sign-up"]').click()
  //     cy.get('#email').type(email)
  //     cy.get('#first_name').type(firstName)
  //     cy.get('#last_name').type(lastName)
  //     cy.get('#password').type(password)
  //     cy.get('#terms_and_conditions').check()
  //     cy.get('[type="submit"]').eq(0).click()
  //     cy.get('.c-UUKrH-kDyeyw-type-error')
  //       .should("have.text", "errorThat email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.")

  // })

  it("TC03, The user should not be able to sign up with an empty field email", () => {
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#password").type(password);
    cy.get("#terms_and_conditions").check();
    cy.get('[type="submit"]').eq(0).click();
    cy.get('[id="email_message"]').should("have.text", errorMessageEmail);
  });

  it("TC04, The user should only be able to sign up with checkmark Terms and Conditions", () => {
    cy.get("#email").type(email);
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#password").type(password);

    cy.get('[type="submit"]').eq(0).click();
    cy.get("#terms_and_conditions_message").should(
      "have.text",
      errorMessageTerms
    );
  });

  it("TC05, The user should not be able to sign up with a password of less than 12 characters", () => {
    cy.wait(2000);
    cy.get("#onetrust-accept-btn-handler").click();
    cy.get('[id="header-sign-up"]').click();
    cy.get("#email").type(email);
    cy.get("#first_name").type(firstName);
    cy.get("#last_name").type(lastName);
    cy.get("#password").type(password11Characters);
    cy.get("#terms_and_conditions").check();
    cy.get('[type="submit"]').eq(0).click();
    cy.get('[id="passwordMinLength"]').should(
      "have.text",
      errorMessagePassword
    );
  });
});
