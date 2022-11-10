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
          value={grivnyaAmount}
          onChange={(e) => setGrivnyaAmount(e.target.value)}
          placeholder="enter amount of GRN..."
        />
        <div>
          USD Amount: <span>{(grivnyaAmount / USDPrice).toFixed(3)}</span>
        </div>
        <div>
          EU Amount: <span>{(grivnyaAmount / euroPrice).toFixed(3)}</span>
        </div>
      </div>
      <div>
        <input
          id="USD"
          value={USDAmount}
          onChange={(e) => setUSDAmount(e.target.value)}
          placeholder="enter amount of USD..."
        />
        <div>
          GRN Amount: <span>{(USDAmount * USDPrice).toFixed(3)}</span>
        </div>
        <div>
          EU Amount:
          <span>{((USDAmount * USDPrice) / euroPrice).toFixed(3)}</span>
        </div>
      </div>
      <div>
        <input
          id="EU"
          value={euroAmount}
          onChange={(e) => setEuroAmount(e.target.value)}
          placeholder="enter amount of EU..."
        />
        <div>
          GRN Amount: <span>{(euroAmount * euroPrice).toFixed(3)}</span>
        </div>
        <div>
          USD Amount:
          <span>{((euroAmount * euroPrice) / USDPrice).toFixed(3)}</span>
        </div>
      </div>
    </>
  );
};

export default CurrencyExchanger;
