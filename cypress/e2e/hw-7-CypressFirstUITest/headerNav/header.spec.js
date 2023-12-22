/// <reference types="cypress" />
describe("Header tests", () => {
    const colors = {
    Light: "rgb(255, 255, 255)",
    Dark: "rgb(34, 43, 69)",
    Cosmic: "rgb(50, 50, 89)",
    Corporate: "rgb(255, 255, 255)",
  };


  beforeEach(() => {
    cy.visit("/");
  });

  it("Change to light color ", () => {
    cy.get("button.select-button").invoke("text").then((tub) => {
        const tubText = tub.trim();
        cy.wrap(tubText).should("eq", "Light");
      });
    cy.get("nb-layout-header nav").should("have.css", "background-color", colors.Light);
  });

  it("Change to dark color", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='dark']").invoke("text").then((tub) => {
        const tubText = tub.trim();
        cy.wrap(tubText).should("eq", "Dark");
      });

    cy.get("nb-option[ng-reflect-value='dark']").click();
    cy.get("nb-layout-header nav").should("have.css", "background-color", colors.Dark);
  });

  it("Change to cosmic color", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='cosmic']").invoke("text").then((tub) => {
        const tubText = tub.trim();
        cy.wrap(tubText).should("eq", "Cosmic");
      });

    cy.get("nb-option[ng-reflect-value='cosmic']").click();
    cy.get("nb-layout-header nav").should("have.css", "background-color", colors.Cosmic);
  });

  it("Change to corporate  color", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='corporate']").invoke("text").then((tub) => {
        const tubText = tub.trim();
        cy.wrap(tubText).should("eq", "Corporate");
      });

    cy.get("nb-option[ng-reflect-value='corporate']").click();
    cy.get("nb-layout-header nav").should("have.css", "background-color", colors.Corporate);
  });

  it("Return Light color", () => {
    cy.get("button.select-button").click();
    cy.get("nb-option[ng-reflect-value='default']").invoke("text").then((tub) => {
        const tubText = tub.trim();
        cy.wrap(tubText).should("eq", "Light");
      });

    cy.get("nb-option[ng-reflect-value='default']").click();
    cy.get("nb-layout-header nav").should("have.css", "background-color", colors.Light);
  });
});
