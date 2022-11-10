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
          onChange={(e) => setGrivnyaAmount(e.target.value)}
          placeholder="enter amount of GRN..."
        />
        <div>USD Amount: {grivnyaAmount / USDPrice}</div>
        <div>EU Amount: {grivnyaAmount / euroPrice}</div>
      </div>
      <div>
        <input
          onChange={(e) => setUSDAmount(e.target.value)}
          placeholder="enter amount of USD..."
        />
        <div>GRN Amount: {USDAmount * USDPrice}</div>
        <div>EU Amount: {(USDAmount * USDPrice) / euroPrice}</div>
      </div>
      <div>
        <input
          onChange={(e) => setEuroAmount(e.target.value)}
          placeholder="enter amount of EU..."
        />
        <div>GRN Amount: {euroAmount * euroPrice}</div>
        <div>USD Amount: {(euroAmount * euroPrice) / USDPrice}</div>
      </div>
    </>
  );
};

export default CurrencyExchanger;
