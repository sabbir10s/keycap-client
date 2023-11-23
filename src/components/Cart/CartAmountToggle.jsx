import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const CartAmountToggle = ({ amount, setIncrease, setDecrease }) => {
  return (
    <div className="flex items-center gap-2 md:gap-4">
      <button
        className="text-sm md:text-base bg-gray-100 p-1.5 md:p-2 hover:bg-gray-200 duration-200"
        onClick={() => setDecrease()}
      >
        <AiOutlineMinus />
      </button>
      <span>{amount}</span>
      <button
        className="text-sm md:text-base bg-gray-100 p-1.5 md:p-2 hover:bg-gray-200 duration-200"
        onClick={() => setIncrease()}
      >
        <AiOutlinePlus />
      </button>
    </div>
  );
};

export default CartAmountToggle;
