/// <reference types="cypress" />

describe("Accordion tub", () => {
  beforeEach(() => cy.visit("/pages/layout/accordion"));

  it("Product Details tub-hidden", () => {
    cy.get("nb-accordion-item").first().find(".item-body").should("be.hidden");
  });

  it("the 'Product Details tub-visible", () => {
    cy.get("button.appearance-filled").click();
    cy.get("nb-accordion-item").first().find(".item-body").should("be.visible");
  });
});
