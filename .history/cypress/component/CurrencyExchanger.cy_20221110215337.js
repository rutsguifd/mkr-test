import cypress from "cypress";
import CurrencyExchanger from "../../src/components/CurrencyExchanger";

describe("CurrencyExchanger.cy.js", () => {
  it("playground", () => {
    cypress.cy.mount(<CurrencyExchanger />);
  });
});
