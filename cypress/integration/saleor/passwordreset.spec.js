context("Password Reset", () => {
  beforeEach(() => {
    cy.resetpage();
    cy.get(".u-link").click();
    cy.get('input[name="email"]').as("email");
    cy.get(".password-reset-form__button > .button > span").as("button");
  });

  it("links to Reset Password", () => {
    cy.get(".overlay__header .overlay__header-text").should(
      "have.text",
      "Reset your password"
    );
    cy.get(".password-reset-form > p").should(
      "have.text",
      "Please provide us your email address so we can share you a link to reset your password"
    );
    cy.get("@email")
      .should("be.visible")
      .should("have.attr", "type", "email")
      .should("not.have.value");
    cy.get("button").should("be.enabled").should("have.text", "Reset password");
  });
});
