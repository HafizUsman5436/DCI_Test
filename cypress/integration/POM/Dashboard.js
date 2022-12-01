export class Dashboard {
  EntriesNavBar() {
    return cy.get("#leftmenuLinkEmployerPunches");
  }
}
export const dashboard = new Dashboard();
