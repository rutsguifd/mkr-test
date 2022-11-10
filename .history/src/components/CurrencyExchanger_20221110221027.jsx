import React, { useState } from "react";

const CurrencyExchanger = () => {
  const [grivnyaAmount, setGrivnyaAmount] = useState(1);
  const [USDAmount, setUSDAmount] = useState(1);
  const [euroAmount, setEuroAmount] = useState(1);
  const USDPrice = 36.57;
  const euroPrice = 37.02;
  return (
    <>
      <div>
        <input
          id="GRN"
          onChange={(e) => setGrivnyaAmount(e.target.value)}
          placeholder="enter amount of GRN..."
        />
        <div>USD Amount: {(grivnyaAmount / USDPrice).toFixed(3)}</div>
        <div>EU Amount: {(grivnyaAmount / euroPrice).toFixed(3)}</div>
      </div>
      <div>
        <input
          id="USD"
          onChange={(e) => setUSDAmount(e.target.value)}
          placeholder="enter amount of USD..."
        />
        <div>GRN Amount: {(USDAmount * USDPrice).toFixed(3)}</div>
        <div>EU Amount: {((USDAmount * USDPrice) / euroPrice).toFixed(3)}</div>
      </div>
      <div>
        <input
          id="EU"
          onChange={(e) => setEuroAmount(e.target.value)}
          placeholder="enter amount of EU..."
        />
        <div>GRN Amount: {(euroAmount * euroPrice).toFixed(3)}</div>
        <div>
          USD Amount: {((euroAmount * euroPrice) / USDPrice).toFixed(3)}
        </div>
      </div>
    </>
  );
};

export default CurrencyExchanger;
