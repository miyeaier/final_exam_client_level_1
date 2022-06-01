describe("user can see first page", () => {
  beforeEach(() => {
    cy.intercept("GET", "https://content.viaplay.se/pc-se/serier/samtliga", {
      fixture: "viaplay_response.json",
    });
    cy.visit("/");
  });

  it("is expected to show a list of programs", () => {
    cy.get("[data-cy=program-list]").children().should("have.length", 10);
  });

  it("is expected to display name for programs", () => {
    cy.get("[data-cy=series-title]")
      .first()
      .should("have.text", "Grey's Anatomy");
  });

  it("is expected to display an image for programs", () => {
    cy.get("[data-cy=series-image]").should("be.visible");
  });
});
