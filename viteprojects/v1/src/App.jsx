import { useState } from "react";
import { InputBox } from "./components";
import usecurrencyinfo from "./hooks/usecurrencyinfo";
function App() {
  const [amount, setamount] = useState(0);
  const [from, setfrom] = useState("usd");
  const [to, setto] = useState("inr");
  const [convertedamount, setconvertedamount] = useState(0);

  const currencyinfo = usecurrencyinfo(from);

  const options = Object.keys(currencyinfo);

  const swap = () => {
    setfrom(to);
    setto(from);
    setconvertedamount(amount);
    setamount(convertedamount);
  };
  const convert = () => {
    setconvertedamount(amount * currencyinfo[to]);
  };
  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/20178471/pexels-photo-20178471/free-photo-of-tides-of-the-sea-heading-for-the-beach.jpeg?auto=compress&cs=tinysrgb&w=300&lazy=load')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1 text-black">
              <InputBox
                label="From"
                amount={amount}
                onamountchange={(amount) => setamount(amount)}
                currencyoptions={options}
                oncurrencychange={(currency) => setamount(amount)}
                selectcurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5 text-black">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-black px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4 text-black">
              <InputBox
                label="To"
                amount={convertedamount}
                currencyoptions={options}
                oncurrencychange={(currency) => setto(currency)}
                selectcurrency={to}
                amountdisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-black px-4 py-3 rounded-lg"
            >
              Convert{from.toUpperCase()} to{to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
