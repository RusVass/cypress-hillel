/// <reference types = "cypress" />

import {ForgotPassword} from '../pages/Forgot-password.page'
import {RegisterPage} from '../pages/Register.page'
import {LoginPage} from '../pages/Login.page'

describe('Forgot password page tests with PageObject', ()=> {
    const forgotPassword = new ForgotPassword()
    const registerPage = new RegisterPage ()
    const loginPage = new LoginPage()

    /*beforeEach(()=> forgotPassword.forgotPasswordPageOpen() )
    в кожному тесті перша дія однакова, тому можна це зробити в beforeEach hook*/

    it('Improper email validation (negative test)', ()=>{
        forgotPassword.forgotPasswordPageOpen()
        forgotPassword.emailInput.type('invalid email')
        forgotPassword.title.click()
        forgotPassword.emailError.should("contain", "Email should be the real one!")
    })

    it('Register button check', ()=>{
        forgotPassword.forgotPasswordPageOpen()
        forgotPassword.registerButton.click()
        registerPage.title.should("contain.text", "Register")
    })

    it('Back to Login button check', ()=>{
        forgotPassword.forgotPasswordPageOpen()
        forgotPassword.backToLoginButton.click()
        loginPage.title.should("contain.text", "Login")
    })
})




/*
    beforeEach(()=> forgotPassword.forgotPasswordPageOpen() )
    в кожному тесті перша дія однакова, тому можна це зробити в beforeEach hook*/
