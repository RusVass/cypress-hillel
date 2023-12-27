/// <reference types="cypress" />

describe("API login", () => {
  it("test", { env: { WORK_ENV: "staging" } }, () => {
    cy.loginViaAPI("r_vasilyev@ukr.net", "12345qwerTY");
    cy.get('[routerlink="settings"]').click();

    cy.log(Cypress.env("POST"));
    cy.log(Cypress.env("password"));
    cy.log(Cypress.env("user"));
    cy.log(Cypress.env("WORK_ENV"));
  });
});
