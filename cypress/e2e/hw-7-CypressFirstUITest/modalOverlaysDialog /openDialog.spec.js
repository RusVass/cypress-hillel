
/// <reference types="cypress" />

  describe("Dialog tub", () => {
    it("Check popover", () => {

      const name =  "Admin";
      cy.visit("/pages/modal-overlays/dialog");
      cy.get("nb-card-body.result-from-dialog > button").click();
      cy.get("input[placeholder='Name']").type(name);
      cy.get("button[status='success']").click();
      cy.get("nb-card-body.result-from-dialog > ul > li").should("have.text", name);
    });
  });
