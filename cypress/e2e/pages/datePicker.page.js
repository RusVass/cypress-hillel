/// <reference types = "cypress" />

const baseUrl = 'http://localhost:4200/pages/forms/datepicker'
export class DatePickerPage {
    openDatePickerPage () {
         cy.visit (baseUrl)
    }
    get formPicker (){
        return cy.get('input[placeholder="Form Picker"]');
    }
    get todayDayButton() {
        return cy.get("nb-calendar-day-cell.day-cell.today");
    }
}
