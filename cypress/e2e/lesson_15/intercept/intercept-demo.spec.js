/// <reference types="cypress" />

describe("Intercept demo", () => {
  it("test", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
    );
    cy.get('input[name="username"]').type("Admin");
    cy.get('input[name="password"]').type("admin123");
    cy.get('button[type="submit"]').click();
    //=====================================
    // приклад intercept та аліес

    /* cy.intercept("/web/index.php/api/v2/admin/subunits").as("subunits");
     cy.visit(
       "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
     );
     cy.wait("@subunits");
     cy.get(".oxd-table").find(".oxd-table-card").should("not.exist");
 */
    //===========================================

    // приклад підміни через json чрез    cy.intercept() as(alias)
    cy.intercept("GET", "/web/index.php/api/v2/pim/employees*", {
      fixture: "employee-response.json",
    }).as("employee");

    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList",
    );

    cy.wait("@employee")
      .its("response")
      .then((resp) => {
        console.log(resp);
        expect(resp.statusCode).to.eq(200);
      });
    cy.get(".oxd-table").find(".oxd-table-card").should("exist");
  });

  // приклад тесту де ми беремо дані  з fixture папки нашого  users.json
  it.skip("fixture test", () => {
    cy.visit("/pages/forms/layouts");
    cy.fixture("users").then((users) => {
      cy.log(users);
      cy.get("#inputEmail1").type(users[0].email);
      cy.get("#inputPassword2").type(users[0].password);
      cy.get("#inputEmail1").should("have.value", users[0].email);
      cy.get("#inputPassword2").should("have.value", users[0].password);
    });
  });
});
