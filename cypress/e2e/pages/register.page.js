/// <reference types = "cypress" />
const baseUrl = 'http://localhost:4200/auth/register'
export class RegisterPage {
    openRegisterPage()  {
      cy.visit(baseUrl)
    }
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
    get repeatPasswordInput() {
        return cy.get("#input-re-password");
    }
    get customCheckbox() {
        return cy.get ('span.custom-checkbox')
    }
    get registerButton() {
        return cy.contains ("button[status='primary']", "Register")
    }
    get gitHubButton() {
        return cy.get ("nb-icon[ng-reflect-icon='github']")
    }
    get facebookButton() {
        return cy.get ("nb-icon[ng-reflect-icon='facebook']")
    }
    get twitterButton() {
        return cy.get ("nb-icon[ng-reflect-icon='twitter']")
    }
    get loginSuggest() {
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
    get repeatPasswordError () {
        return cy.get ('p.caption.status-danger').eq(3)
    }

}
