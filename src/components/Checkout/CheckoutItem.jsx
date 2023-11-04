import React from "react";
import { useCartContext } from "../../context/CartContext";

const CheckoutItem = ({ item }) => {
  const { removeItem } = useCartContext();

  const { _id, name, image, price, amount } = item;
  return (
    <div className="relative mb-3 border-b py-2 lg:border lg:py-0 rounded">
      <div className="flex space-x-2 items-center col-span-2 lg:border rounded-lg lg:p-2 border-gray-100">
        <div className="w-[80px] h-[80px] bg-gray-50  rounded-2xl">
          <img
            src={image}
            className="w-full h-full object-center object-fill"
            alt="product-img"
          />
        </div>
        <div>
          <p className="font-semibold text-primary-600">{name}</p>
          <p className="font-semibold">
            {amount} x ${price}.00
          </p>
        </div>
      </div>
      <div className="absolute -top-1 lg:top-2 -right-1 lg:right-2 ">
        <button onClick={() => removeItem(_id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 border bg-gray-200 p-1 rounded-full text-gray-700"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default CheckoutItem;
