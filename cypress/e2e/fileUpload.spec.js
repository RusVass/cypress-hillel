/// <reference types="cypress" />
describe('Form layouts', ()=> {
  const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthUserPassword')}`

  it('it test file upload', () => {
    // cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
    cy.visit(`https://${userAndPass}@qauto.forstudy.space`)// дані userAndPass у файлі cypress.env.json в корні папки
    cy.request('POST', 'https://qauto.forstudy.space/api/auth/signin', {
    "email": Cypress.env('user'),
    "password": Cypress.env('password'),
    "remember": false
      })
    cy.visit(`https://${userAndPass}@qauto.forstudy.space/panel/profile/`)
    cy.get('button.btn-primary').click()
    cy.get('input#editProfilePhoto').selectFile('cypress/fixtures/logo.jpg')
    cy.intercept('PUT','api/users/profile').as('logo')
     cy.contains('button','Save').click()
    cy.get("@logo").its('response').then(res => {
      console.log(res)
    expect(res.statusCode).eq(200);
    })
cy.pu

    })
  })

// it("PUT request test ", () => {
//   cy.request("PUT", baseUrl + userId, {
//     fixture: "user",
//   })
//     .its("status")
//     .should("eq", 200);
// });


// describe('CSS intro', ()=>{
//
//
//   it.skip('test db', () => {
//     cy.task(
//       "queryDb",
//       `SELECT * FROM shop.agents`
//     ).then(count => {
//       cy.task('log', count)
//       cy.wrap(count).then(count => {
//         expect(count).to.have.lengthOf(13);
//       })
//     });
//
//     // cy.task('log', count)
//   })
//
//   it.skip('Create user', () => {
//     cy.task('queryDb',
//       "INSERT INTO shop.customer VALUES ('C00113', 'Holmes', 'London', 'London', 'UK', '2', '6000.00', '5000.00', '7000.00', '4000.00', 'BBBBBBB', 'A003');    "
//     ).then(res => {
//       cy.task('log', res)
//     })
//   })
//
// })

