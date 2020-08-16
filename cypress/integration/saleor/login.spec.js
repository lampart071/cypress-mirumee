context("Login Page", () => {
  beforeEach(() => {
    cy.loginpage();
    cy.get('input[name="email"]').as("email");
    cy.get('input[name="password"]').as("password");
    cy.get(".login-form__button > .button").as("button");
  });

  it("home page contains login icon", () => {
    cy.get("[data-testid=login-btn]").should("be.visible");
  });

  it("login window has elements", () => {
    cy.get(".overlay__header-text").should("have.text", "Saleor account");
    cy.get(".active-tab").should("have.text", "Sign in to account");
    cy.get(".login__tabs > span:nth-of-type(2)").should(
      "have.text",
      "Register new account"
    );
    cy.get("@button").should("be.enabled").should("have.text", "Sign in");
    cy.get(".login__content__password-reminder > p").should(($p) => {
      expect($p).to.have.length(1);
      expect($p.first()).to.contain("Have you forgotten your password?");
      expect($p.addClass(".u-link")).to.contain("Click Here");
    });
  });

  it("email is visible and has value", () => {
    cy.get("@email")
      .should("be.visible")
      .should("have.attr", "type", "email")
      .should("have.value", Cypress.env("correctEmail"));
  });

  it("password is visible and has value", () => {
    cy.get("@password")
      .should("be.visible")
      .should("have.attr", "type", "password")
      .should("have.value", "admin");
  });

  it("email validation", () => {
    cy.get("@email").clear();
    cy.get("@button").click();
    cy.get(":nth-child(1) > .input__error").should("be.visible");
    cy.get("@email").type(Cypress.env("incorrectEmailSyntaxOne"));
    cy.get(":nth-child(1) > .input__error").should("be.visible");
    cy.get("@email").clear().type(Cypress.env("incorrectEmailSyntaxTwo"));
    cy.get(":nth-child(1) > .input__error").should("be.visible");
    cy.get("@email").clear().type(Cypress.env("correctEmail"));
    cy.get(":nth-child(1) > .input__error").should("not.be.visible");
  });

  it("requires password", () => {
    cy.get("@password").clear();
    cy.get("@button").click();
    cy.get(":nth-child(2) > .input__error").should("be.visible");
    cy.get("@password").type(Cypress.env("correctPassword"));
    cy.get(":nth-child(2) > .input__error").should("not.be.visible");
  });

  it("requires valid username and password", () => {
    cy.get("@email").clear().type(Cypress.env("incorrectEmail"));
    cy.get("@password").clear().type(Cypress.env("correctPassword"));
    cy.get("@button").click();
    cy.get(".form-error").should("be.visible");
    cy.get("@email").clear().type(Cypress.env("correctEmail"));
    cy.get("@password").clear().type(Cypress.env("incorrectPassword"));
    cy.get("@button").click();
    cy.get(".form-error").should("be.visible");
    cy.get("@email").clear().type(Cypress.env("incorrectEmail"));
    cy.get("@password").clear().type(Cypress.env("incorrectPassword"));
    cy.get("@button").click();
    cy.get(".form-error").should("be.visible");
    cy.get("@email").clear().type(Cypress.env("correctEmail"));
    cy.get("@password").clear().type(Cypress.env("correctPassword"));
    cy.get("@button").click();
    cy.get(".form-error").should("not.be.visible");
  });
});
