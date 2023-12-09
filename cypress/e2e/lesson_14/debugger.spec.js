/// <reference types="cypress" />

describe('Debugger demo', ()=>{
  const colors = {
    "Light": "rgb(255, 255, 255)",
    "Dark": "rgb(34, 43, 90)",
    "Cosmic": "rgb(50, 50, 89)",
    "Corporate": "rgb(255, 255, 255)"
  };

  beforeEach(()=>{
    cy.visit('/')
  })




// ==== Console.log =====
  it('Console.log', () => {
      cy.log("TEST debuggerLOG!!!!!!!")
        console.log("TEST Console.log!!!!!!!")
  })


  // ==debugger==
  // ==cy.log==

  it('debug browser native', () => {
    cy.wrap(Object.keys(colors)).each(color => {
      cy.get('ngx-header .select-button').click()
      cy.contains('nb-option', `${color}`).click()
      cy.log("TEST LOG!!!!!!!")
      cy.wrap(null).then(() => {
              debugger
      })
    })
  })


  //== .debug() зупинка тесту==
  it('debug cypress custom', () => {
    cy.wrap(Object.keys(colors)).each(color => {
      cy.get('ngx-header .select-button').click()
      cy.contains('nb-option', `${color}`).debug().click()
    })
  })


  //== .pause() зупинка тесту==
  it('cypress pause', () => {
    cy.wrap(Object.keys(colors)).each(color => {
      cy.get('ngx-header .select-button').click()
      cy.contains('nb-option', `${color}`).pause().click()
      cy.pause()

    })
  })
})
