import { ChangeEvent } from "react";

type props = {
  inputValue: string;
  handleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const AmountInput = (props: props) => {
  return (
    <input
      type="text"
      id="amount"
      name="amount"
      className="border border-gray-300 p-2 rounded-lg w-full my-2 text-center flex items-center"
      value={props.inputValue}
      onChange={props.handleInputChange}
      placeholder="0.00"
    />
  );
}

export default AmountInput;
