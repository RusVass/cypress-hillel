/// <reference types = "cypress" />
import {DatePickerPage} from '../pages/Date-picker.page'
import moment from "moment"
describe('Date picker tests with PageObject', ()=> {
    const datePickerPage = new DatePickerPage()
    const today = moment().format('ll')
    it('check that present date is displayed correctly in the input', ()=>{
        datePickerPage.DatePickerPageOpen ()
        datePickerPage.formPicker.click()
        datePickerPage.todayDayButton.click()
        datePickerPage.formPicker.should('have.value', today)
    })
})
