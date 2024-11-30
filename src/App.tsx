import { useState } from "react";
import useCurrencyInfo from "./hooks/useCurrencyInfo";
import { Inputbox } from "./component/index.ts";

function App() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState('usd');
  const [to, setTo] = useState('inr');
  const [convertedAmount, setConvertedAmount] = useState(0);
  const currencyInfo: { [key: string]: number } = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo);

  const convert = () => {
    setConvertedAmount(parseFloat((amount * currencyInfo[to]).toFixed(2)));
  }

  const swap = () => {
    setFrom(to);
    setTo(from);
    setConvertedAmount(amount);
    setAmount(convertedAmount);
  }


  return (
    <div className="w-full h-screen bg-cover flex" style={{
      backgroundImage: `url('https://4kwallpapers.com/images/walls/thumbs_3t/19801.jpg')`,
    }}>
      <div
        className="absolute top-4 right-4 flex items-center bg-transparent"
        style={{ zIndex: 1000 }}
      >
        <a
          href="https://github.com/ratnesh-maurya/currency-converter"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center text-white text-sm font-bold gap-2 hover:text-violet-800"
        >
          <img
            src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
            alt="GitHub"
            className="w-6 h-6  rounded-full "
          />
          GitHub
        </a>
      </div>
    <div className="w-full flex flex-wrap justify-center items-center bg-cover "
      >
      
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-black/60">

          <form onSubmit={(e) => {
            e.preventDefault();
            convert();
          }}>
            <div className="w-full mb-1">
              <Inputbox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency: number) => setAmount(currency)}
                selectedCurrency={from}
                onAmountChange={(amount: number) => setAmount(amount)}
                amountDisabled={false}
                currencyDisabled={false}
                classaName="mb-4"
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2  border-white rounded-md bg-violet-950  text-white px-4 py-1"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <Inputbox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency: string) => setTo(currency)}
                selectedCurrency={to}
                amountDisabled={true}
                currencyDisabled = {false}
                onAmountChange={undefined} 
                classaName={""}              />
            </div>
            <button type="submit" className="w-full  bg-violet-950 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>

        </div>
      </div>
    </div>
    </div>
  )
}

export default App
