import Homepage from "../pages/home.page";
import SignUp from "../pages/signup.page";
const email = "1992maksym1992@gmail.com";
const firstName = "Maks";
const lastName = "Semen";
const password = "mynewTest123!";
const password11Characters = "newTest123!";
const text = "One last step";
const errorMessageEmail = "errorThis field is required.";
const errorMessageTerms = "errorPlease accept the terms and conditions";
const errorMessagePassword = "Password must be at least 12 characters.";
const errorMessageCredentials =
  "errorThat email and password combination is not valid, or your browser could not be authenticated via recaptcha. Please try again.";
const successMessage = "One last step";

describe("Sign up", () => {
  beforeEach(() => {
    cy.visit("/sign-up");
  });

  //Sometimes this test is passing but sometimes it has an error message because
  //the user can't sign up twice with the same credentials

  it(" TC02, The user should be able to sign up", () => {
    Homepage.btnSignUp.click();
    SignUp.inputEmail.type(email);
    SignUp.inputFirstName.type(firstName);
    SignUp.inputLastName.type(lastName);
    SignUp.inputPassword.type(password);
    SignUp.checkMarkTerms.check();
    SignUp.btnSubmit.click();
    SignUp.succesMessage.should("have.text", successMessage);
    // SignUp.errorMessageCredentials.should("have.text", errorMessageCredentials);
  });

  it("TC03, The user should not be able to sign up with an empty field email", () => {
    SignUp.inputFirstName.type(firstName);
    SignUp.inputLastName.type(lastName);
    SignUp.inputPassword.type(password);
    SignUp.checkMarkTerms.check();
    SignUp.btnSubmit.click();
    SignUp.errorMessageEmail.should("have.text", errorMessageEmail);
  });

  it("TC04, The user should only be able to sign up with checkmark Terms and Conditions", () => {
    SignUp.inputEmail.type(email);
    SignUp.inputFirstName.type(firstName);
    SignUp.inputLastName.type(lastName);
    SignUp.inputPassword.type(password);
    SignUp.btnSubmit.click();
    SignUp.errorMessageTerms.should("have.text", errorMessageTerms);
  });

  it("TC05, The user should not be able to sign up with a password of less than 12 characters", () => {
    SignUp.inputEmail.type(email);
    SignUp.inputFirstName.type(firstName);
    SignUp.inputLastName.type(lastName);
    SignUp.inputPassword.type(password11Characters);
    SignUp.checkMarkTerms.check();
    SignUp.btnSubmit.click();
    SignUp.errorMessagePassword.should("have.text", errorMessagePassword);
  });
});
