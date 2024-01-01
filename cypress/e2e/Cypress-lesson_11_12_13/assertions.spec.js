/// <reference types="cypress" />

describe("Assertions intro", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it.skip("Assertions", () => {
    const str = "Tom";
    cy.wrap(str).should("equal", "Tom"); // це перевірка порівняння ===

    const obj = {
      a: 1,
    };
    cy.wrap(obj).should("deep.equal", { a: 1 });
    cy.wrap(obj).should("have.property", "a");
    expect(obj).to.deep.equal({ a: 1 }); // перевірка обєкта
    cy.contains("Form").click();
    cy.contains("Form Layouts").click();
    cy.get("[status='primary']").should("exist");
    cy.contains("[status='primary']", "Sign in").should(
      "not.have.property",
      "disabled",
    );
    cy.get("[status='primary']").should("have.length", 3);
    cy.contains("[status='primary']", "Sign in").should(
      "have.class",
      "status-primary",
    );
    cy.get("[data-cy='imputEmail1']").type("1234").should("have.value", "1234");

    cy.contains("[status='primary']", "Sign in").then((button) => {
      const buttonText = button.text();
      expect(buttonText).to.have.length(7);
      expect(buttonText).to.eq("Sign in");
      cy.contains("td", "Jack").then((row) => {
        cy.wrap(row).find(".nb-edit").click();
      });
    });
  });

  it.skip("Assertions", () => {
    cy.contains("Tables & Data").click();
    cy.contains("Smart Table").click();
    cy.contains("tr", "Jack").then((row) => {
      cy.wrap(row).find(".nb-edit").click();
      cy.wrap(row).find("[placeholder='Last Name']").clear().type("Petrov");
    });
  });

  it.skip("invoke, its, each " , () => {
    cy.contains("Forms").click();
    cy.contains("Form Layouts").click();
    cy.contains("[status='primary']", "Sign in").invoke("mouseover");
    //cy.contains("[status='primary']", "Sign in").invoke("text", "SOME TEXT");
    cy.contains("[status='primary']", "Sign in").invoke("attr", "disabled", true);
    cy.contains("[status='primary']", "Sign in")
      .its("length").should("equal", 1);
    cy.get("[status='primary']").each((el, index)=>{
    })
  });

  it.skip("check", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Toastr").click();
    cy.get("nb-checkbox input").eq(0).check({force: true})
  });

  it.skip("trigger", () => {
    cy.contains("Modal & Overlays").click();
    cy.contains("Popover").click();
    cy.contains("Right").trigger("mouseenter");
    //cy.get("[nbpopoverplacement='right]'").trigger('mouseover')
  });

  //======lesson 14 debugger , log , Task, custom commands ====================================================

  it.skip("wait", () => {
    cy.contains("Modal & Overlays").click().as("alies");// очікує поки відпрацює подія
    cy.contains("Popover", {timeout: 6000}).should("be.visible")
    cy.wait(5000)
    cy.get("@alies").should("be.visible")
  });

  it.skip("debugger", () => {
    cy.contains("Modal & Overlays").click();//
    cy.contains("Popover").then(el=>{
      debugger
      cy.wrap(el).click()
      cy.log(el)
    })
  });

  it.skip(".debug()", () => {
    cy.contains("Modal & Overlays").debug().click();//
    cy.contains("Popover").click()
  });

  it("TASK / LOG!!!", () => {
    cy.contains("Modal & Overlays").click();//
    cy.task("log", "from console")
    cy.log("LOG!!!")
  });








  it.skip("custom commands", () => {
    cy.contains("Modal & Overlays").click();//
    cy.contains("Popover").click()
  });
  it.skip("", () => {
    cy.contains("Modal & Overlays").click();//
    cy.contains("Popover").click()
  });
  it.skip("", () => {
    cy.contains("Modal & Overlays").click();//
    cy.contains("Popover").click()
  });





// ===============================================================================
  // beforeEach(()=>{
  //   cy.visit('/pages/forms/layouts')
  // })

  // it.skip('Assertions', () => {
  //   cy.get('#inputEmail1').type('Hello')
  //   cy.get('#inputEmail1').should('have.value', 'Hello')
  //   cy.visit('/pages/layout/accordion')
  //   cy.get('div.item-body').eq(0).should('exist')
  //   cy.get('div.item-body').eq(0).should('be.visible')
  // })

  // it('Functions', () => {
  //   cy.get('[status="primary"]').eq(0).then($button => {
  //     const btnText = $button.text()
  //     expect(btnText).to.have.length(7)
  //     expect(btnText).to.eq('Sign in')
  //   })
  // })

  it.skip("test API", () => {
    // const API_obj = { value: 50}
    // cy.wrap(API_obj.value).should('to.equal', 50)//запис для should - асинхронний код
    // expect(API_obj.value).to.equal(50)// запис для  expect - синхронний код
    // const statuses = ['Paid', 'Open']
    // const resultstatus = 'Open'
    // expect().to.be.true
    // cy.visit("/pages/layout/accordion");
    // cy.get("nb-accordion-item-header").should("be.visible");
    // cy.get("nb-accordion-item-header").first().click();
    // cy.contains("button", "Toggle First Item").should("have.property", 0);
    // cy.get('nb-accordion-item-body').first().find('.ng-trigger-accordionItemBody').should('have.prop',  'class', 'ng-tns-c23-24')
    // cy.wait(1000)
    // cy.get('nb-layout-header nav').should('have.css', 'background-color', 'rgb(255, 255, 255)')
    // cy.get('[placeholder="Jane Doe"]').type('hello')
    // cy.get('[placeholder="Jane Doe"]').should('have.value', 'hello')
  });
});
