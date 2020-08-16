context("Login Api", () => {
  beforeEach(() => {});

  it("navigates to succesful login", () => {
    cy.login();
    cy.visit("https://demo.saleor.io")
    cy.get("[data-testid='user-btn'] > li.main-menu__icon.main-menu__user--active");
  });
});
