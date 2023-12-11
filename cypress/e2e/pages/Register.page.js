/// <reference types = "cypress" />
export class RegisterPage {
    get backButton (){
        return cy.get('a[aria-label="Back"]');
    }
    get title () {
        return cy.get ('#title')
    }
    get fullName(){
        return cy.get('#input-name')
    }
    get emailInput() {
        return cy.get ('#input-email')
    }
    get passwordInput() {
        return cy.get("#input-password");
    }
    get rePasswordInput() {
        return cy.get("#input-re-password");
    }
    get customCheckbox() {
        return cy.get ('span.custom-checkbox')
    }
    get registerButton() {
        return cy.contains ("button[status='primary']", "Register")
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
    get logginSuggest() {
        return cy.get('a[routerlink="../login"]')
    }
    get fullNameError () {
        return cy.get ('p.caption.status-danger').eq(0)
    }
    get emailError () {
        return cy.get ('p.caption.status-danger').eq(1)
    }
    get passwordError () {
        return cy.get ('p.caption.status-danger').eq(2)
    }
    get rePasswordError () {
        return cy.get ('p.caption.status-danger').eq(3)
    }
    registerPageOpen () {
        cy.visit('http://localhost:4200/auth/register')}
}