/// <reference types="cypress" />
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }

// ====== add ====  clickMenuByName
Cypress.Commands.add("clickMenuByName", (name) => {
  cy.get("nb-sidebar nb-menu").contains(name).click();
});

// forceClick приклад дочірнього елемента
Cypress.Commands.add("forceClick", { prevSubject: "element" }, (subject) => {
  cy.wrap(subject).click({ force: true });
});

// ===== add ====== login
//викликати кастомну команду в тесті: cy.logins("test@test.com", "12345", "Option 1")
Cypress.Commands.add("loginCustom", (email, password, radioButton) => {
  cy.get('input[data-cy="imputEmail1"]').type(email);
  cy.get("#inputPassword2").type(password);
  cy.get("nb-radio-group label").contains("Option 1").click();
  cy.contains('[status="primary"]', "Sign in").click();
});

// ==== overwrite ====  type
Cypress.Commands.overwrite("type", (originalFn, element, text, options) => {
  if (options && options.sensitive) {
    // turn off original log
    options.log = false;
    // create our own log with masked message
    Cypress.log({
      $el: element,
      name: "type",
      message: "*".repeat(text.length),
    });
  }

  return originalFn(element, text, options);
});

Cypress.Commands.add("loginViaAPI", (email, password) => {
  cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
    email: email,
    password: password,
    remember: false,
  });
  cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
});
