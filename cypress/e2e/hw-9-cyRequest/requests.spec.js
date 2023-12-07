/// <reference types="cypress" />

const baseUrl = "https://jsonplaceholder.typicode.com/posts/";
const userId = 1;

describe("API request", () => {
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

    it("PUT request test ", () => {
        cy.request("PUT", baseUrl + userId, {
            fixture: "user",
        })
            .its("status")
            .should("eq", 200);
    });

    it("PATCH request ", () => {
            cy.request("PATCH", baseUrl + userId, {"title": "Hillel"}).then((response) => {
              expect(response.status).eq(200)
              expect(response.body).to.have.property('title', 'Hillel')
            });
    });

    it("DELETE request ", () => {
        cy.request("DELETE", baseUrl + userId).then((response) => {
          expect(response.status).eq(200);
          expect(response.duration).lessThan(200);
        });
    });
});
