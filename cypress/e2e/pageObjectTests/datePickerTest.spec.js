/// <reference types = "cypress" />
import {DatePickerPage} from '../pages/datePicker.page'
import moment from "moment"

describe('Date picker tests with PageObject', ()=> {
    const datePickerPage = new DatePickerPage()
    const today = moment().format('ll')
    it('Check that present date is displayed correctly in the input', ()=>{
        datePickerPage.openDatePickerPage ()
        datePickerPage.formPicker.click()
        datePickerPage.todayDayButton.click()
        datePickerPage.formPicker.should('have.value', today)
    })
})
