/// <reference types = "cypress" />
import {RegisterPage} from '../pages/Register.page'
import {HeaderPage} from '../pages/Header.page'
describe('Register test with PageObject', ()=> {
    const registerPage = new RegisterPage ()
    const headerPage = new HeaderPage()

    it('Negative register', ()=>{
        registerPage.registerPageOpen()
        registerPage.fullName.type('tes')
        registerPage.emailInput.click ().type ('invalid mail')
        registerPage.passwordInput.click().type ('123')
        registerPage.rePasswordInput.click()
        registerPage.customCheckbox.click()
        registerPage.fullNameError.should("contain", "Full name should contains from 4 to 50 characters")
        registerPage.emailError.should("contain", "Email should be the real one!")
        registerPage.passwordError.should("contain","Password should contain from 4 to 50 characters")
        registerPage.rePasswordError.should("contain","Password confirmation is required!")
    })

    it('Possitive register and register check', ()=>{
        registerPage.registerPageOpen()
        registerPage.fullName.click ().type('Artour')
        registerPage.emailInput.click ().type ('test@i.ua')
        registerPage.passwordInput.click().type ('12345')
        registerPage.rePasswordInput.click().type ('12345')
        registerPage.customCheckbox.click()
        registerPage.registerButton.click()
        headerPage.userAvatar.should("be.visible")

    })
})
