import CurrencyExchanger from "../../src/components/CurrencyExchanger";

describe("CurrencyExchanger.cy.js", () => {
  beforeEach(() => {
    cy.mount(<CurrencyExchanger />);
  });
  it("Mount", () => {
    cy.mount(<CurrencyExchanger />);
  });
  it("Start Values", () => {
    cy.get("#GRN").should("have.value", 1);
    cy.get("#USD").should("have.value", 1);
    cy.get("#EU").should("have.value", 1);
    cy.get("#GRNtoUSD").should("have.text", "0.027");
    cy.get("#GRNtoEURO").should("have.text", "0.027");
    cy.get("#USDtoGRN").should("have.text", "36.570");
    cy.get("#USDtoEURO").should("have.text", "0.988");
    cy.get("#EUROtoGRN").should("have.text", "37.020");
    cy.get("#EUROtoUSD").should("have.text", "1.012");
  });
  it("Check", () => {
    cy.get("#GRN").type("00");
    cy.get("#GRNtoUSD").should("have.text", "2.734");
    cy.get("#GRNtoEURO").should("have.text", "2.701");
    cy.get("#USD").type("00");
    cy.get("#USDtoGRN").should("have.text", "3657.000");
    cy.get("#USDtoEURO").should("have.text", "98.784");
    cy.get("#EU").type("00");
    cy.get("#EUROtoGRN").should("have.text", "3702.000");
    cy.get("#EUROtoUSD").should("have.text", "101.231");
  });
});
