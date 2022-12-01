export class LoginPage {
  LanguageEN() {
    return cy.get("#ddlLanguage");
  }
  Username() {
    return cy.get("#Email");
  }
  Password() {
    return cy.get("#Password");
  }
  SignInButton() {
    return cy.get("#btnSubmit");
  }
}
export const loginpage = new LoginPage();
