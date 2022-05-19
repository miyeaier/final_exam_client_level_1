describe('user can see first page', () => {
 beforeEach(() => {
    cy.intercept("GET", "https://content.viaplay.se/pc-se/serier/samtliga", {
      fixture: "viaplay_response.json",
    });
    cy.visit("/");
  });

  describe('Header', () => {
    it("is expected to see image in the header", () => {
      cy.get("[cy-data=image-header]").should("be.visible")
    })
  });
});