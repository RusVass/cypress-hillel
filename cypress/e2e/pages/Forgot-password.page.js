/// <reference types = "cypress" />
export class ForgotPassword {
    get backButton (){
        return cy.get('a[aria-label="Back"]');
    }
    get title () {
        return cy.get ('#title')
    }
    get subTitle () {
        return cy.get ('p.sub-title')
    }
    get emailInput() {
        return cy.get ('#input-email')
    }
    get requestButton() {
        return cy.get ("button[status='primary']", "Request password")
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
    forgotPasswordPageOpen () {
        cy.visit('http://localhost:4200/auth/request-password')
    }


    // forgotPasswordPageOpen () {
    //     cy.visit('http://localhost:4200/auth/request-password')
   /* Налаштуй baseUrl і вказуй лише path
    cy.visit('/auth/request-password')*/

    }
