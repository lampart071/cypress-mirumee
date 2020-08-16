Cypress.Commands.add("login", () => {
  cy.request({
    method: "Post",
    url: "https://pwa.demo.saleor.rocks/graphql/",
    body: {
      operationName: "TokenAuth",
      variables: { email: "admin@example.com", password: "admin" },
      query:
        "fragment Address on Address {\n  id\n  firstName\n  lastName\n  companyName\n  streetAddress1\n  streetAddress2\n  city\n  postalCode\n  country {\n    code\n    country\n    __typename\n  }\n  countryArea\n  phone\n  isDefaultBillingAddress\n  isDefaultShippingAddress\n  __typename\n}\n\nfragment User on User {\n  id\n  email\n  firstName\n  lastName\n  isStaff\n  defaultShippingAddress {\n    ...Address\n    __typename\n  }\n  defaultBillingAddress {\n    ...Address\n    __typename\n  }\n  addresses {\n    ...Address\n    __typename\n  }\n  __typename\n}\n\nmutation TokenAuth($email: String!, $password: String!) {\n  tokenCreate(email: $email, password: $password) {\n    token\n    errors {\n      field\n      message\n      __typename\n    }\n    user {\n      ...User\n      __typename\n    }\n    __typename\n  }\n}\n",
    },
  }).then((resp) => {
    window.localStorage.setItem("token", resp.body.data.tokenCreate.token);
  });
});

Cypress.Commands.add("loginpage", (email, password) => {
  cy.visit("https://demo.saleor.io");
  cy.get("[data-testid=login-btn]").click();
});

Cypress.Commands.add("resetpage", (email, password) => {
  cy.visit("https://demo.saleor.io");
  cy.get("[data-testid=login-btn]").click();
});
