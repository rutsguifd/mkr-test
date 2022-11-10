import CurrencyExchanger from "../../src/components/CurrencyExchanger";

describe("CurrencyExchanger.cy.js", () => {
  it("playground", () => {
    cy.mount(<CurrencyExchanger />);
    cy.get("#GRN").should("have.value", 1);
    cy.get("#USD").should("have.value", 1);
    cy.get("#EU").should("have.value", 1);
    cy.get("#GRN-to-other").should("have.text", "0.027");
    cy.contains("#GRN-to-other", "0.027");
  });
});
