
it('login with custom commands', () => {
  cy.visit('/auth/login')
  // cy.get('#input-email').type('email@test.com')
  // cy.get('#input-password').type("password", {sensitive: true})
  // cy.get('form button[status="primary"]').click()
  cy.get('#input-email').type('email@test.com')
  cy.get('#input-password').type("password", {sensitive: true})
  cy.get('form button[status="primary"]').click()
  cy.get('.user-container').should('be.visible')

})
