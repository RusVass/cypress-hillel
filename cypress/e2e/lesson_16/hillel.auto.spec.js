/// <reference types="cypress" />
describe("Form Layouts", () => {
  it("test qauto", () => {
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
    cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
      email: Cypress.env("user"),
      password: Cypress.env("password"),
      remember: false,
    })
    cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/panel/profile")
    });
  })







// describe("Form Layouts", () => {
//   it("test qauto", () => {
//     cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/");
//     cy.request("POST", "https://qauto.forstudy.space/api/auth/signin", {
//       email: Cypress.env("user"),
//       password: Cypress.env("password"),
//       remember: false,
//     }).then(res =>{
//       const token = res.body.token
//       console.log(token)
//
//
//     cy.visit("https://guest:welcome2qauto@qauto.forstudy.space/panel/profile",{
//       onBeforeLoad(win) {
//         win.localStorage.setItem("auth-token", token)
//       }
//
//     })
//     });
//   });
// });
