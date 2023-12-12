/// <reference types = "cypress" />

import {ForgotPassword} from '../pages/forgotPassword.page'
import {RegisterPage} from '../pages/register.page'
import {LoginPage} from '../pages/login.page'


describe('Forgot password page', ()=> {
    const forgotPassword = new ForgotPassword()
    const registerPage = new RegisterPage ()
    const loginPage = new LoginPage()

    beforeEach(() => {
        forgotPassword.openForgotPasswordPage()
    })

    it('Negative test', ()=>{
        forgotPassword.emailInput.type('asd')
        forgotPassword.title.click()
        forgotPassword.emailError.should("contain", "Email should be the real one!")
    })

    it('Check button "Register"  ', ()=>{
        forgotPassword.registerButton.click()
        registerPage.title.should("contain.text", "Register")
    })

    it('Check button "Back to Login"  ', ()=>{
        forgotPassword.backToLoginButton.click()
        loginPage.title.should("contain.text", "Login")
    })
})




