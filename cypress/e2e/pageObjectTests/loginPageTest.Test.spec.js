/// <reference types = "cypress" />

import {LoginPage} from '../pages/login.page'
import {HeaderPage} from '../pages/header.page'
describe('Login test with PageObject', ()=> {
    const loginPage = new LoginPage()
    const headerPage = new HeaderPage()

    beforeEach(() => {
      loginPage.openLoginPage ()
    })

    it('Negative test', ()=>{
        loginPage.emailInput.click().type('asd')
        loginPage.passwordInput.click().type ('123')
        loginPage.emailError.should("contain", "Email should be the real one!")
        loginPage.customCheckbox.click()
        loginPage.passwordError.should ("contain", "Password should contain from 4 to 50 characters")
        loginPage.loginButton.should('be.disabled')

    })
    it('Positive test', ()=>{
        loginPage.emailInput.click().type('test@i.ua')
        loginPage.passwordInput.click().type ('pass')
        loginPage.customCheckbox.click()
        loginPage.loginButton.click()
        headerPage.iconUI.should("be.visible")

    })
})
