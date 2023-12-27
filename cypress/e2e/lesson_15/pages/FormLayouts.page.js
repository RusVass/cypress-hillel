import { FormsPage } from "./selectors/FormsSelectors.js";
import { NavMenu } from "./components/NavMenuComponent.js";
import { BasicPage } from "./Basic.page.js";

class FormLayoutsPage extends BasicPage {
  Pages;
  navMenu = new NavMenu();

  elements = {
    title: () => cy.get("nb-card-header").eq(1),
    emailInput: () => cy.get(FormsPage.emailInput),
    passwordInput: () => cy.get("#inputPassword2"),
    radioButton: (radioButtonLabel) =>
      cy.contains("nb-radio-group label", radioButtonLabel),
    signInButton: () => cy.contains('div>button[status="primary"]', "Sign in"),
  };

  // виклик елементів через get:
  get emailInput() {
    return cy.get(FormsPage.emailInput);
  }

  get passwordInput() {
    return cy.get("#inputPassword2");
  }

  get radioButton() {
    return cy.get("nb-radio-group label");
  }

  get signInButton() {
    return cy.contains('[status="primary"]', "Sign in");
  }

  openPages() {
    return cy.visit("/pages/forms/layouts");
  }

  // можемо викликати email через функцію але через get краще нижче запис
  emailInput2() {
    return cy.get(FormsPage.emailInput);
  }

  login(email, password, radioButton) {
    this.elements.emailInput().type(email);
    this.elements.passwordInput().type(password);
    this.elements.radioButton(radioButton).click();
    this.elements.signInButton().click();
  }
}

export default FormLayoutsPage;
