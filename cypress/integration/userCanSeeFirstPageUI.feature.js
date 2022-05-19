describe('user can see first page', () => {
  before(() => {
    cy.intercept("GET", "/content.viaplay.se/pc-se/serier/samtliga", {
      fixture: "articles.json",
    });
    cy.visit("/");
  });

  describe('Header', () => {
    it("is expected to see image in the header", () => {
      cy.get("[cy-data=image-header]").should("be.visible")
    })
  });
});