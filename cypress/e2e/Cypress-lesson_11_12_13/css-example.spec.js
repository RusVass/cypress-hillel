/// <reference types="cypress" />

cy.findByText = function (button) {

};
describe('CSS intro', () => {
  beforeEach(() => {
    cy.visit('/pages/forms/layouts')
  })

  it('selectors example', () => {
    cy.get('button')                  // за тегом
    cy.get('div.form-group.row')          // за класом
    cy.get('body div input ')          // усі input в div та body
    cy.get('#inputEmail')             // за id
    cy.get('button').eq(1) //пошук за індексом  кнопки
    cy.get('button.status-danger')    // за тегом з класом без пробіла
    cy.get('div, button') // вибор всіх елементів div та button
    cy.get('div button') // вибор всіх елементів button які є нащадками div
    cy.get('div>button') // у div відразу перший button
    // cy.get('css:form > div > div > button.btn') //приклад пошуку по вкладенності тегів де ми послідовно один за
    // одним перебираємо теги результатом якого є кнопка button з класом .btn
    // cy.get('div > p ') // через пробіл  > вибір усіх p де батьківський елемент div
    cy.get('form input:nth-of-type(1)') // перша дитина  input  в form  через :nth-of-type()
    cy.get('form input[type="email"]')// вибирає елемент за певним атрибутом  наприклад [type="email"]
    // cy.get('form input[type="text"][name="email"]') // пошук по 2-х атрибутах
    cy.get('form input:not([type="text"])')// вибирає елемент без атрибуту [type="text"]
    // cy.get('a[href^="https:"]')//знайде усі посилання, які починаються з https,
    // cy.get('a[href$=“.pdf”]')//знайде усі посилання, які закінчуються на .pdf.
  })


  it('cypress helpers', () => {
    cy.get('button').eq(0) //знаходимо тег button за індексом  eq(10) це десята кнопка
    cy.get('button').first() // перший button
    cy.get('button').last()// останній button
    cy.get('form').find('.status-danger')// метод .find додатковий пошук
    cy.contains('button[status="danger"]', 'Submit')//contains повертає лише перше/одне значення, що знайде у
    // тега button  зі статусом текста  [status="danger"] + додаткова опція  будь-який текст наприклад  Submit
    cy.contains('button', 'Submit')// находимо тег button  який содержит текст  Submit
    cy.get('button', {log: true})// логування включене
    // cy.get('button', {log: false})// логування виключене
    // cy.get('button', {timeout: 8000})// задаємо додатковий timeout

    // within - вказує на місце/елемент з якого місця потрібно робити пошук
    cy.contains('nb-card-body form', 'Sign in').last().within(() => {
      cy.get('input').eq(0).type('hi')
      cy.get('input').eq(1).type('test')
    })
    cy.contains('nb-card-body form', 'Send').last().within(() => {
      cy.get('input').eq(0).type('hello')
      cy.get('input').eq(1).type('test2')
    })
  })
})
// cy.get('#my-list').contains('Item 1').should('be.visible')
// Находим первый элемент, содержащий текст  "Add to Cart"
// cy.contains('Add to Cart').click()

// Находим первый элемент, точно соответствующий тексту  "My Account"
// cy.findByText('My Account').should('be.visible')

// Находим первый элемент, содержащий текст  "Search for products" , и вводим в него  "shoes"
// cy.contains('Search for products').type('shoes')
