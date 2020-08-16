context("Header Main Menu", () => {
  beforeEach(() => {
    cy.visit("https://demo.saleor.io");
    cy.get(":nth-child(1) > .main-menu__nav-dropdown").as("firstdropdown");
  });

  it("firstdropdown contains elements", () => {
    cy.get("@firstdropdown").trigger("mouseover");
    cy.get(":nth-child(1) > ul > li.main-menu__nav-dropdown__body")
      .should("be.visible")
      .find("a")
      .should(($a) => {
        const texts = $a.map((i, el) => Cypress.$(el).text());
        const paragraphs = texts.get();
        expect(paragraphs, "has 2 elements").to.have.length(2);
        expect(paragraphs, "has expected text").to.deep.eq([
          "Paints",
          "Homewares",
        ]);
      });
  });
});
