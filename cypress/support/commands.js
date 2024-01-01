/// <reference types="cypress" />

Cypress.Commands.add("clickMenuByName", (name) => {
  cy.get("nb-sidebar nb-menu").contains(name).click();
});

// forceClick приклад дочірнього елемента
Cypress.Commands.add("forceClick", { prevSubject: "element" }, (subject) => {
  cy.wrap(subject).click({ force: true });
});

// батьківська команда
Cypress.Commands.add("getPrimaryBtn", { prevSubject: "optional" }, (subject) => {
  if(subject){
    cy.wrap(subject).find("[status='primary']")
  }else{
    cy.get("[status='primary']")
  }
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




