import React from "react";
import FormatePrice from "../../helper/FormatePrice";

const OrderItems = ({ item }) => {
  const { name, image, amount, price } = item;
  return (
    <tr className="bg-white dark:bg-gray-800">
      <th
        scope="row"
        className="flex items-center gap-1 px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="border rounded-full w-[30px] h-[30px]">
          <img className="" src={image} alt="" />
        </div>
        {name}
      </th>
      <td className="px-6 py-4">{amount}</td>
      <td className="px-6 py-4">
        <FormatePrice price={price} />
      </td>
      <td className="px-6 py-4">
        <FormatePrice price={price * amount} />
      </td>
    </tr>
  );
};

export default OrderItems;
