/// <reference types="cypress" />

/* 
  Welcome QA candidate! Good luck in writing your test script! 
  You may structure or name your file however you see fit as this is just a template
*/
describe("Test Suite 1", () => {
  beforeEach(() => {
    cy.visit("https://www.pawshake.com.sg/");
  });

  it("should check the existence and correctness of H2 titles on the Home page", () => {
    const h2Titles = [
      "Who treats your pet like family",
      "Here's how Pawshake works.",
      "Happiness guaranteed",
      "Services on Pawshake",
      "Why choose Pawshake?",
      "Always stay connected",
      "Blog",
      "Frequently asked questions",
      "Learn More",
      "Popular Cities",
      "About Pawshake",
      "Payment Methods",
      "Find us on"
    ];

    h2Titles.forEach(title => {
      cy.get("h2").contains(title).should("exist");
    });
  });
});