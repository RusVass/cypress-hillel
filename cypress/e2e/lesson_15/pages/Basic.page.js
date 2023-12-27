export class BasicPage {
  elements = {
    menuItem: () => cy.get(".menu-item"),
  };

  get menuItem() {
    return cy.get(".menu-item");
  }

  openByTitle(title) {
    this.elements.menuItem().contains(title).click();
  }
}
