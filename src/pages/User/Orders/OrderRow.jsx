import React from "react";
import { useNavigate } from "react-router-dom";
import FormatePrice from "../../../helper/FormatePrice";

const OrderRow = ({ order, index }) => {
  const { _id, date, payment, status, totalAmount } = order;
  const navigate = useNavigate();
  const handleOrderDetails = () => {
    navigate(`/dashboard/order/${_id}`);
  };
  const fieldStyle = "px-6 py-4 whitespace-nowrap text-sm  capitalize ";
  return (
    <tr className="text-gray-500 hover:bg-gray-100 duration-200  dark:text-gray-400 dark:hover:bg-gray-600/50 even:bg-white-100 odd:bg-secondary-100/30">
      <td className={fieldStyle}>#{index}</td>
      <td className={fieldStyle}>{date}</td>
      <td className={fieldStyle}>{payment.method}</td>
      <td className={fieldStyle}>{status}</td>
      <td className={fieldStyle}>
        <FormatePrice price={totalAmount} />
      </td>

      <td className={fieldStyle}>
        <button
          className="underline text-blue-600 hover:text-secondary-600 duration-300"
          onClick={handleOrderDetails}
        >
          Details
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
