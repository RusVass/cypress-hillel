/// <reference types = "cypress" />
import {DatePickerPage} from '../pages/Date-picker.page'
import moment from "moment"
describe('Date picker tests with PageObject', ()=> {
    const datePickerPage = new DatePickerPage()
    const today = moment().format('ll')
    it('Date picker today day check and compare value between input and present time', ()=>{
        datePickerPage.DatePickerPageOpen ()
        datePickerPage.formPicker.click()
        datePickerPage.todayDayButton.click()
        datePickerPage.formPicker.should('have.value', today)
    })
})
