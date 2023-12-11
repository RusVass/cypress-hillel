/// <reference types = "cypress" />
import {LoginPage} from '../pages/Login.page'
import {HeaderPage} from '../pages/Header.page'
describe('Login test with PageObject', ()=> {
    const loginPage = new LoginPage()
    const headerPage = new HeaderPage()

    it('Negative login', ()=>{
        loginPage.loginPageOpen()
        loginPage.emailInput.click().type('invalid email')
        loginPage.passwordInput.click().type ('123')
        loginPage.emailError.should("contain", "Email should be the real one!")
        loginPage.customCheckbox.click()
        loginPage.passwordError.should ("contain", "Password should contain from 4 to 50 characters")
        loginPage.loginButton.should('be.disabled')

    })
    it('Possitive login and login check', ()=>{
        loginPage.loginPageOpen()
        loginPage.emailInput.click().type('test@i.ua')
        loginPage.passwordInput.click().type ('testpass')
        loginPage.customCheckbox.click()
        loginPage.loginButton.click()
        headerPage.userAvatar.should("be.visible")

    })
})
