/// <reference types="cypress" />

import FormLayoutsPage from './FormLayouts.page.js'
import {NavMenu} from "./components/NavMenuComponent";


describe('Form Layouts', () => {

  const formLayoutsPage = new FormLayoutsPage()
  //  тест залогінитись через властивості
  it.skip('test POM', () => {
    formLayoutsPage.openPages()
    formLayoutsPage.elements.emailInput().type('test@test.com')
    formLayoutsPage.elements.passwordInput().type('password')
    formLayoutsPage.elements.radioButton('Option 1').click()
    formLayoutsPage.elements.signInButton().click()
  })

// коротший варіфнт залогінитись через властивості
  it.skip('test POM', () => {
    formLayoutsPage.openPages()
    formLayoutsPage.login('test@test.com', 'p@ssword', 'Option 1')
  })
// через методи get
  it.skip('test POM', () => {
    formLayoutsPage.openPages()
    formLayoutsPage.emailInput.type('test@test.com')
    formLayoutsPage.passwordInput.type('password')
    formLayoutsPage.radioButton.contains('Option 1').click()
    formLayoutsPage.signInButton.click()

    formLayoutsPage.navMenu.openByTitle('Forms')

  })

  // неробочий тест
  it.skip('test POM', () => {
    formLayoutsPage.openPages()
    formLayoutsPage.elements.menuItem()
  })
})
