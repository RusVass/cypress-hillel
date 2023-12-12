/// <reference types = "cypress" />
const baseUrl = 'http://localhost:4200/auth/request-password'
export class ForgotPassword {
  OpenforgotPasswordPage () {
    cy.visit(baseUrl)
  }
    get title () {
        return cy.get ('#title')
    }

    get emailInput() {
        return cy.get ('#input-email')
    }

    get backToLoginButton () {
        return cy.get ('a[routerlink="../login"]')
    }
    get registerButton () {
        return cy.get ('a[routerlink="../register"]')
    }
    get emailError () {
        return cy.get ('p.caption.status-danger')
    }

    }
