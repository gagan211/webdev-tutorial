// So many red underlines as we have not used PROPS functionality of React/JS

import React, { useId } from "react";

// the function that containes all the fields or eements that we see in the UI
function InputBox({
  label, //{TO,FROM}
  amount, //{THE VALUE / NUMBER}
  onamountchange, //{EVENT THAT SHOULD TAKE PLACE IF AMOUNT IS CHANGED}
  selectcurrency = "usd", //{DEFAULT IS SE TO USD}
  currencyoptions = [], //{THE ARRAY TO CHOSE WHAT S H CURRENCY WE WANT TO/FROM CONVERT}
  oncurrencychange, //{IF THE VALUE CHANGES OF THE CURRENCY THEN TRIGGER THIS}
  amountdisable = false,
  currencydisable = false,
  className = "",
}) {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1/2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={amountdisable}
          value={amount}
          onChange={(e) =>
            onamountchange && onamountchange(Number(e.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          value={selectcurrency}
          onChange={(e) => oncurrencychange && oncurrencychange(e.target.value)}
          disabled={currencydisable}
        >
          {currencyoptions.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
