/// <reference types="cypress" />

describe("Commands intro", () => {
  // let userID
  // let buttonText

  beforeEach(() => {
    // cy.visit('/pages/forms/layouts')
    cy.visit("/pages/tables/smart-table");
  });
  // отримуємо текст методом .text()
  // text() – цей метод використовується для отримання або встановлення текстового вмісту
  // вибраного елемента HTML
  it.skip("test then", () => {
    cy.visit("/pages/forms/layouts");
    cy.get('button[type="submit"]').eq(0).then((button) => {
        const buttonText = button.text();
        cy.wrap(buttonText).should("to.equal", "Submit");
        expect(buttonText).to.have.length(6);
      });
  });

  // змінюємо First Name та Last Name в  cy.visit('/pages/tables/smart-table')
  it.skip("Edit table row without then", () => {
    cy.get("tbody tr").eq(0).find(".nb-edit").click();
    cy.get("tbody tr").eq(0).find('input[placeholder="First Name"]').clear().type("Artem");
    cy.get("tbody tr").eq(0).find('input[placeholder="Last Name"]').clear().type("test");
    cy.get("tbody tr").eq(0).find(".nb-checkmark").click();
    cy.get("tbody tr").eq(0).find("table-cell-view-mode").eq(1).should("have.text", "Artem");
    cy.get("tbody tr").eq(0).find("table-cell-view-mode").eq(2).should("have.text", "test");
  });

  // коротший варіант через .then(row= > {
  // cy.wrap(row) ........
  it.skip("Edit table row with then", () => {
    cy.get("tbody tr").eq(0).then((row) => {
        cy.wrap(row).find(".nb-edit").click();
        cy.wrap(row).find('input[placeholder="First Name"]').clear().type("Artem");
        cy.wrap(row).find('input[placeholder="Last Name"]').clear().type("test");
        cy.wrap(row).find(".nb-checkmark").click();
        cy.wrap(row).find("table-cell-view-mode").eq(1).should("have.text", "Artem");
        cy.wrap(row).find("table-cell-view-mode").eq(2).should("have.text", "test");
      });
  });

  // ще варіант  через  метод .within(() => {
  // cy.get('.nb-edit').click() пошук в межах одного селектора першоі позиціі
  it.skip("Edit table row with within", () => {
    cy.get("tbody tr")
      .eq(0)
      .within(() => {
        cy.get(".nb-edit").click();
        cy.get('input[placeholder="First Name"]').clear().type("Artem");
        cy.get('input[placeholder="Last Name"]').clear().type("test");
        cy.get(".nb-checkmark").click();
        cy.get("table-cell-view-mode").eq(1).should("have.text", "Artem");
        cy.get("table-cell-view-mode").eq(2).should("have.text", "test");
      });
  });
});

//====================================================
// ========= test popovers =========
describe("popovers", () => {
  beforeEach(() => {
    cy.visit("/pages/modal-overlays/popover");
  });

  it("invoke", () => {
    //== зміна тексту через .then
    // cy.contains("button", "Right").then((button) => {
    //   button.text("NEW NAME");
    //   cy.location(button.text);
    // });

    //== зміна тексту через .invoke який  виклиає метод text
    //cy.contains("button", "Right").invoke("text", "NEW NAME2");

    //=== створюємо новий обєкт і викликаємо за допомогою 'invoke' , its() ,.then ===================================
    const myObg = {
      test: "test",
      a: (myName) => {
        console.log("Hello from obj" + myName);
      },
    };
    //=== invoke() команда дає можливість зробити виклик функції 'a' у об’єкті 'myObg'
    //cy.wrap(myObg).invoke("a", "Artem");

    //=== .then - виклику попередньої функції через  .then
    cy.wrap(myObg).then((el) => {
      el.a("Petrov");
      expect(el.test).to.equal("test");
    });

    //=== its() команда дає можливість отримати значення властивості об’єкта, отриманого як результат
    //cy.wrap(myObg).its("test").should("eq", "test");
  });

  // метод ..trigger() – вызывает событие у выбранных элементов, что приводит к запуску обработчиков этого события
  it.skip("trigger", () => {
    cy.contains("button", "Right").trigger("mouseenter");
  });
});
