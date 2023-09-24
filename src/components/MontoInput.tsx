import { ChangeEvent, useState } from "react";

const AmountInput = () => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    const sanitizedValue = value.replace(/[^0-9]/g, '');

    const dollars = sanitizedValue.slice(0, -2);
    const cents = sanitizedValue.slice(-2);

    const formattedValue = `${dollars}.${cents}`;
    setInputValue(formattedValue);
  };

  return (
    <input
      type="text"
      id="amount"
      name="amount"
      className="border border-gray-300 p-2 rounded-lg w-full my-2 text-center flex items-center"
      value={inputValue}
      onChange={handleInputChange}
      placeholder="0.00"
    />
  );
}

export default AmountInput;
