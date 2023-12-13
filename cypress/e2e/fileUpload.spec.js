/// <reference types="cypress" />
describe('Form layouts', ()=> {
  const userAndPass = `${Cypress.env('siteAuthUserName')}:${Cypress.env('siteAuthUserPassword')}`
  it('it test file upload', () => {
    // cy.visit('https://guest:welcome2qauto@qauto.forstudy.space')
     cy.visit(`https://${userAndPass}@qauto.forstudy.space`)
  })
})

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

