/// <reference types="cypress" />

describe('Form Layouts', () => {

  const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthPassword')}`

  it.skip('test qaauto', () => {
    cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/')
    it.only('test qaauto', () => {
      cy.visit(`https://${userAndPass}@qauto.forstudy.space/`)
      cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', {
        "email": Cypress.env('userName'),
        "email": Cypress.env('user'),
        "password": Cypress.env('password'),
        "remember": false
      })
      cy.visit('https://guest:welcome2qauto@qauto.forstudy.space/panel/settings')

      cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile`)
      cy.contains('button', 'Edit profile').click()
      cy.get('input#editProfilePhoto').selectFile('cypress/fixtures/logo.jpg')
      cy.contains('Save').click()
    })
  })
})
