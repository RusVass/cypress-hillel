/// <reference types = "cypress" />
export class HeaderPage {
    get iconUI(){
        return cy.get('div.user-picture.image')
    }
}
