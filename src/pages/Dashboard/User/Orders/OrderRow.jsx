import React from "react";
import FormatePrice from "../../../../helper/FormatePrice";

const OrderRow = ({ order, index }) => {
  const { date, payment, status, totalAmount } = order;
  console.log(totalAmount);
  return (
    <tr className="">
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {index + 1}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {date}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {payment.method}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        {status}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        <FormatePrice price={totalAmount} />
      </td>
      <td className="py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400 capitalize">
        <button className="bg-green-100 text-green-700 hover:bg-primary-600 hover:text-white duration-300 text-xs font-semibold tracking-widest px-2 py-1 rounded-full">
          Details
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
