/// <reference types="cypress" />

describe("Popover tub", () => {
  it("Check popover", () => {
    cy.visit("/pages/modal-overlays/popover");

    cy.contains("Right").trigger("mouseenter");
    cy.get(".primitive-overlay").should("be.visible");
  });
});
