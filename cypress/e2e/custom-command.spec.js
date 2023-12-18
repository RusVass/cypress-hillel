/// <reference types="cypress" />

describe("test task", () => {
  it("test task", () => {
    cy.task("log", "This will be output to the terminal");
  });
});
