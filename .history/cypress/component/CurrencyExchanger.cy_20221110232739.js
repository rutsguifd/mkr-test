import CurrencyExchanger from "../../src/components/CurrencyExchanger";

describe("CurrencyExchanger.cy.js", () => {
  it("playground", () => {
    cy.mount(<CurrencyExchanger />);
    cy.get("#GRN").should("have.value", 1);
    cy.get("#USD").should("have.value", 1);
    cy.get("#EU").should("have.value", 1);
    cy.get("#GRNtoUSD").should("have.text", "0.027");
    cy.get("#GRNtoEURO").should("have.text", "0.027");
    cy.get("#USDtoGRN").should("have.text", "36.570");
    cy.get("#USDtoEURO").should("have.text", "0.988");
    cy.get("#EUROtoGRN").should("have.text", "37.020");
    cy.get("#EUROtoUSD").should("have.text", "1.012");
    cy.get("#GRN").type("00");
    cy.get("#GRNtoUSD").should("have.text", "2.700");
  });
});
