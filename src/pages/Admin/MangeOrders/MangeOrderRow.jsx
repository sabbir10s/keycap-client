import React from "react";
import { useNavigate } from "react-router-dom";
import FormatePrice from "../../../helper/FormatePrice";

const MangeOrderRow = ({ order }) => {
  const { customer, items, totalAmount, status, _id, date } = order;

  const fieldStyle = "px-6 py-4 whitespace-nowrap text-sm  capitalize ";

  const navigate = useNavigate();
  const handleOrderDetails = () => {
    navigate(`/adminDashboard/mangeOrders/${_id}`);
  };
  return (
    <tr className="text-gray-500 hover:bg-secondary-100/50 duration-200 even:bg-white odd:bg-gray-100/50">
      <td className={fieldStyle}>#{_id.slice(0, 4)}</td>
      <td className={fieldStyle}>{customer.name}</td>
      <td className={fieldStyle}>{items.length}</td>
      <td className={fieldStyle}>
        <FormatePrice price={totalAmount} />
      </td>
      <td className={fieldStyle}>{date}</td>
      <td className={fieldStyle}>{status}</td>
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

export default MangeOrderRow;
