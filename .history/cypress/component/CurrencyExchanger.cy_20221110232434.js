import CurrencyExchanger from "../../src/components/CurrencyExchanger";

describe("CurrencyExchanger.cy.js", () => {
  it("playground", () => {
    cy.mount(<CurrencyExchanger />);
    cy.get("#GRN").should("have.value", 1);
    cy.get("#USD").should("have.value", 1);
    cy.get("#EU").should("have.value", 1);
    cy.get("#GRNtoUSD").should("have.text", "0.027");
    cy.get("#GRNtoEURO").should("have.text", "0.027");
    cy.get("#USDtoGRN").should("have.text", "0.027");
    cy.get("#USDtoEURO").should("have.text", "0.027");
    cy.get("#EUROtoGRN").should("have.text", "0.027");
    cy.get("#EUROtoUSD").should("have.text", "0.027");
  });
});