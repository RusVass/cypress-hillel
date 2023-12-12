/// <reference types = "cypress" />
import {RegisterPage} from '../pages/register.page'
import {HeaderPage} from '../pages/header.page'

describe('Register test with PageObject', ()=> {
    const registerPage = new RegisterPage ()
    const headerPage = new HeaderPage()

  beforeEach(() => {
    registerPage.openRegisterPage()
  })

    it('Negative test', ()=>{
        registerPage.fullName.type('tes')
        registerPage.emailInput.click ().type ('asd')
        registerPage.passwordInput.click().type ('123')
        registerPage.repeatPasswordInput.click()
        registerPage.customCheckbox.click()
        registerPage.fullNameError.should("contain", "Full name should contains from 4 to 50 characters")
        registerPage.emailError.should("contain", "Email should be the real one!")
        registerPage.passwordError.should("contain","Password should contain from 4 to 50 characters")
        registerPage.repeatPasswordError.should("contain","Password confirmation is required!")
    })

    it('Positive test', ()=>{
        registerPage.fullName.click ().type('Admin')
        registerPage.emailInput.click ().type ('it@gmail.com')
        registerPage.passwordInput.click().type ('qwerty123')
        registerPage.repeatPasswordInput.click().type ('qwerty123')
        registerPage.customCheckbox.click()
        registerPage.registerButton.click()
        headerPage.iconUI.should("be.visible")

    })
})
