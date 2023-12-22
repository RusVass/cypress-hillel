/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
const userId = 1;


describe("test2 ", () => {
  it("GET request ", () => {
    cy.request("GET", baseUrl).then((response) => {
      expect(response.status).eq(200);
      expect(response.body).lengthOf(100);
    });
  });


});
