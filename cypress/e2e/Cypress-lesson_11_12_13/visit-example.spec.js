describe('Xpath intro', ()=>{
  it('Test', () =>{
    cy.visit('/'); // перехід на головну сторінку
    // cy.visit(`${Cypress.config().baseUrl}`);
    // expect(true).to.equal(false)
    expect(true).to.equal(true)
  })
  });
