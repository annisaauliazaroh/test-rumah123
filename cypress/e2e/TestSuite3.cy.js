/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/

describe("Test Suite 3", () => {
  beforeEach(() => {
    cy.visit("https://www.pawshake.com.sg/");
  });

  it("Check Search function works as expected", () => {
    // Enter search criteria
    cy.get('.sc-3d79569-0 .select').click();
    cy.get(".min-w-0").contains("Dog Walking").click()
    cy.get('.fresnel-greaterThanOrEqual-md > button.w-full > .rt-TextFieldRoot > .rt-reset').click();
    cy.get('.rdp-caption_start > .rdp-table > .rdp-tbody > :nth-child(4) > :nth-child(3) > .rdp-button_reset').click();
    cy.get(".sc-39165724-3 > .rt-TextFieldRoot > .rt-TextFieldInput").type("One-north");
    cy.contains("#ex-list-item-2 > strong", "One-North Link").click();

    // Perform search
    cy.get(':nth-child(4) > .sc-dcd0d8ed-0').click();

    // Verify search results
    cy.contains("Dog Walking").should("exist");
    cy.get('.flex.fresnel-greaterThanOrEqual-md > :nth-child(2) > .sc-39165724-3 > .rt-TextFieldRoot > .rt-reset').should("have.value", "One-North Link, Singapore");
  });
});
