/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
const userId = 1;

describe("test1", () => {
    it("GET request ", () => {
        cy.request("GET", baseUrl).then((response) => {
            expect(response.status).eq(200);
            expect(response.body).lengthOf(100);
        });
    });

    it("POST request ", () => {
        cy.request("POST", baseUrl, {
            fixture: "user",
        }).then((response) => {
            expect(response.status).eq(201);
            expect(response.statusText).eq("Created");
        });
    });


});
