import React from "react";

const CustomerInfo = ({ orderInfo }) => {
  const { customer, email } = orderInfo;
  const { name, mobile, streetAddress, city, zip } = customer;

  const trStyle =
    "bg-white border-b border-gray-200 last:border-0 text-start mx-9";
  const thStyle = "py-3 font-normal w-[50%]";
  const tdStyle = "py-3 text-right";
  return (
    <div className="flex flex-col md:flex-row gap-4 w-full">
      <div className="bg-white p-4 w-full">
        <h2 className="font-medium pb-2">Customer Details</h2>
        <table className="text-sm text-left text-gray-500 w-full">
          <tbody>
            <tr className={trStyle}>
              <th className={thStyle}>Name</th>
              <td className={tdStyle}>{name}</td>
            </tr>
            <tr className={trStyle}>
              <th className={thStyle}>Email</th>
              <td className={tdStyle}>{email}</td>
            </tr>
            <tr className={trStyle}>
              <th className={thStyle}>Phone</th>
              <td className={tdStyle}>{mobile}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="bg-white p-4 w-full">
        <h2 className=" font-medium pb-2">Delivery Address</h2>
        <table className="text-sm text-left text-gray-500 w-full">
          <tbody>
            <tr className={trStyle}>
              <th className={thStyle}>Street</th>
              <td className={tdStyle}>{streetAddress}</td>
            </tr>
            <tr className={trStyle}>
              <th className={thStyle}>City</th>
              <td className={tdStyle}>{city}</td>
            </tr>
            <tr className={trStyle}>
              <th className={thStyle}>Zip Code</th>
              <td className={tdStyle}>{zip}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CustomerInfo;
