/// <reference types="cypress" />

import FormLayoutsPage from "../pages/FormLayouts.page.js";

describe("Form Layouts", () => {
  const formLayoutsPage = new FormLayoutsPage();
  //  тест залогінитись через властивості
  it.skip("test POM", () => {
    formLayoutsPage.openPages();
    formLayoutsPage.elements.emailInput().type("test@test.com");
    formLayoutsPage.elements.passwordInput().type("12345");
    formLayoutsPage.elements.radioButton("Option 1").click();
    formLayoutsPage.elements.signInButton().click();
  });

  it("test custom login", () => {
    cy.visit("/pages/forms/layouts");
    cy.loginCustom("test@test.com", "12345", "Option 1");
  });

  // коротший варіфнт залогінитись через властивості
  it.skip("test POM", () => {
    formLayoutsPage.openPages();
    formLayoutsPage.login("test@test.com", "12345", "Option 1");
  });
  // через методи get
  it.skip("test POM", () => {
    formLayoutsPage.openPages();
    formLayoutsPage.emailInput.type("test@test.com");
    formLayoutsPage.passwordInput.type("12345");
    formLayoutsPage.radioButton.contains("Option 1").click();
    formLayoutsPage.signInButton.click();

    formLayoutsPage.navMenu.openByTitle("Forms");
  });

  // щоб тест працював треба закомітити в FormLayoutsPage elements тому що elements який в  BasicPage  перезатирае ці властивості які в FormLayoutsPage
  it.skip("test POM", () => {
    formLayoutsPage.openPages();
    formLayoutsPage.elements.menuItem();
  });
});
