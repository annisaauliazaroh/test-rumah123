/// <reference types="cypress" />
Cypress.on("uncaught:exception", (err, runnable) => {
  return false;
});
/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/
describe("Test Suite 2", () => {
  beforeEach(() => {
    cy.visit("https://www.pawshake.com.sg/");
  });

  it("Check Blog links work as expected", () => {
    cy.get("h2").contains("Blog").should("exist");
    cy.get(":nth-child(1) > .sc-9836ea38-3").click();
    cy.url().should("include", "/blog");
    cy.get("body").should("not.be.empty");
    cy.go("back");
    cy.get(":nth-child(2) > .sc-9836ea38-3").click();
    cy.url().should("include", "/blog");
    cy.get("body").should("not.be.empty");
    cy.go("back");
    cy.get(":nth-child(3) > .sc-9836ea38-3").click();
    cy.url().should("include", "/blog");
    cy.get("body").should("not.be.empty");
    cy.go("back");
  });
});
