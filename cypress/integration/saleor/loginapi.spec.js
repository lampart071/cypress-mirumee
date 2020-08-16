context("Login Api", () => {
  beforeEach(() => {});

  it("navigates to succesful login", () => {
    cy.login();
    cy.visit("https://demo.saleor.io");
  });
});
