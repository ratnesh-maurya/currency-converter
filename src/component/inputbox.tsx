import { useId } from "react";


interface InputBoxProps {
  label: string;
  amount: number;
  onAmountChange: any;
  onCurrencyChange: any;
  currencyOptions: string[];
  selectedCurrency: string;
  amountDisabled: boolean;
  currencyDisabled: boolean;
  classaName: string;
}

function Inputbox(props: InputBoxProps) {
  const ID=useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${props.classaName}`}>
      <div className='w-1/2'>
        <label htmlFor={ID} className="text-black/40 mb-2 inline-block">
          {props.label}
        </label>
        <input
        id={ID}
          className="outline-none w-full bg-transparent py-1.5"
          type="number"
          placeholder="Amount"
          disabled={props.amountDisabled}
          value={props.amount}
          onChange={(e) => props.onAmountChange && props.onAmountChange(Number(e.target.value))}
        />
      </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={props.selectedCurrency || "usd"}
                    onChange={(e) => props.onCurrencyChange && props.onCurrencyChange(e.target.value)}
                    disabled={props.currencyDisabled}
                >
                        {props.currencyOptions.map((currency) => (
                            <option key={currency} value={currency}>
                            {currency}
                            </option>
                        ))}
                
                </select>
            </div>
      

      
    </div>
  )
}

export default Inputbox