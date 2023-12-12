/// <reference types = "cypress" />
const baseUrl = 'http://localhost:4200/auth/login'
export class LoginPage {
    openLoginPage () {
        cy.visit (baseUrl)
    }
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
    get passwordInput() {
        return cy.get("#input-password");
    }
    get forgotPassword() {
        return cy.get ('a.forgot-password')
    }
    get customCheckbox() {
        return cy.get ('span.custom-checkbox')
    }
    get loginButton() {
        return cy.contains ("button[status='primary']", "Log In")
    }
    get githubButton() {
        return cy.get ("nb-icon[ng-reflect-icon='github']")
    }
    get facebookButton() {
        return cy.get ("nb-icon[ng-reflect-icon='facebook']")
    }
    get twitterButton() {
        return cy.get ("nb-icon[ng-reflect-icon='twitter']")
    }
    get registerSuggest() {
        return cy.get('a[routerlink="../register"]')
    }
    get emailError () {
        return cy.get ('p.caption.status-danger')
    }
    get passwordError () {
        return cy.get ('p.caption.status-danger').eq(1)
    }
}
