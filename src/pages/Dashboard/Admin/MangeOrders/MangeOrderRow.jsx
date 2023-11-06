import React from "react";
import FormatePrice from "../../../../helper/FormatePrice";
import { Link, useNavigate } from "react-router-dom";

const MangeOrderRow = ({ order }) => {
  const { customer, items, totalAmount, status, _id, date } = order;

  const fieldStyle = "px-6 py-4 whitespace-nowrap text-sm  capitalize ";
  console.log(fieldStyle);

  const navigate = useNavigate();
  const handleOrderDetails = () => {
    navigate(`/admin/dashboard/mangeOrders/${_id}`);
  };
  return (
    <tr className="text-gray-500 hover:bg-gray-100 duration-200  dark:text-gray-400 dark:hover:bg-gray-600/50 even:bg-white-100 odd:bg-secondary-100/30">
      <td className={fieldStyle}>#{_id.slice(0, 4)}</td>
      <td className={fieldStyle}>{customer.name}</td>
      <td className={fieldStyle}>{items.length}</td>
      <td className={fieldStyle}>
        <FormatePrice price={totalAmount} />
      </td>
      <td className={fieldStyle}>{date}</td>
      <td className={fieldStyle}>{status}</td>
      <td className={`${fieldStyle} hover:underline`}>
        <button onClick={handleOrderDetails}>Details</button>
      </td>
    </tr>
  );
};

export default MangeOrderRow;
