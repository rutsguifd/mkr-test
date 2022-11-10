import cypress from "cypress";
import CurrencyExchanger from "../../src/components/CurrencyExchanger";

describe("CurrencyExchanger.cy.js", () => {
  it("playground", () => {
    cypress.mount(<CurrencyExchanger />);
  });
});
