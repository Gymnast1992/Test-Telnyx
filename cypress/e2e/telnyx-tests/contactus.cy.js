const firstName = "Maks";
const lastName = "Semen";
const businessEmail = "1992maksym1992@gmail.com";
const countryCode = "Ukraine (+380)";
const phoneNumber = "732702093";
const website = "www.companywebsite.com";
const addInfo = "My request";
const howDidYouHear = "Friends";
const successMessage =
  "Thank you.We’ve received your request and one of our experts will be in touch shortly.";

describe("Contact us", () => {
  beforeEach(() => {
    cy.visit("https://telnyx.com/");
  });

  it(" TC10, The user should be able to submit the Contact Us form", () => {
    cy.get('[href="/contact-us"]').eq(1).click();
    cy.get('[name="Reason_for_Contact__c"]').select("Support");
    cy.get('[id="FirstName"]').type(firstName);
    cy.get('[id="LastName"]').type(lastName);
    cy.get('[id="Email"]').type(businessEmail);
    cy.get('[id="Phone_Number_Extension__c"]').select(countryCode);
    cy.get('[id="Phone_Number_Base__c"]').type(phoneNumber);
    cy.get('[id="Website"]').type(website);
    cy.get('[id="Form_Additional_Information__c"]').type(addInfo);
    cy.get('[id="How_did_you_hear_about_Telnyx_Open__c"]').type(howDidYouHear);
    cy.get('[type="submit"]').click();
    cy.get('[class="c-cUhiIV c-cUhiIV-iiVCtIu-css"]').should(
      "have.text",
      successMessage
    );
  });
});
