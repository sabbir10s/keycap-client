import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../../components/Loading";
import HandleOrderStatus from "../../../components/Order/HandleOrderStatus";
import CustomerInfo from "../../../components/Order/CustomerInfo";
import OrderItems from "../../../components/Order/OrderItems";
import FormatePrice from "../../../helper/FormatePrice";

const MangeOrderDetails = () => {
  const { orderId } = useParams();
  // const [isOpen, setIsOpen] = useState(false);

  // Get Order Information
  const [orderInfo, setOrderInfo] = useState([]);

  useEffect(() => {
    const url = `https://nexiq-server.vercel.app/admin/order/${orderId}`;
    console.log(url);
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrderInfo(data);
      });
  }, [orderId]);
  if (orderInfo.length === 0) {
    return <Loading />;
  }
  const { status, items, payment, totalAmount, date } = orderInfo;

  // const handleDelete = () => {
  //   const url = `https://nexiq-server.vercel.app/order/${orderId}`;
  //   fetch(url, {
  //     method: "DELETE",
  //     headers: {
  //       "content-type": "application/json",
  //       authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //     },
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       if (data.deletedCount) {
  //         toast.success("Successfully Deleted");
  //         setIsOpen(false);
  //         setIsReload(!reload);
  //       }
  //     });
  // };

  return (
    <div className="space-y-4">
      <div className="bg-white flex flex-col md:flex-row md:items-center justify-between p-4">
        <div>
          <h2 className=" font-semibold uppercase">
            Order Details: #Order-{orderId.slice(0, 4)}
          </h2>
          <p className="text-gray-500 text-sm">Order Created : {date}</p>
        </div>

        <HandleOrderStatus orderId={orderId} status={status} />
      </div>

      <CustomerInfo orderInfo={orderInfo} />

      <div className="bg-white p-4">
        <h2 className=" font-medium pb-2">Order Summery</h2>
        <div className="text-gray-500 text-sm flex flex-col md:flex-row md:justify-between">
          <p>
            Order Date: <span className="text-gray-800">{date}</span>
          </p>
          <p>
            Payment Method:{" "}
            <span className="text-gray-800">{payment.method}</span>
          </p>
        </div>
        <div className="relative overflow-x-auto py-4">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg">
                  Product
                </th>
                <th scope="col" className="px-6 py-3">
                  Qty
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Unit Price
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Total
                </th>
              </tr>
            </thead>
            <tbody>
              {items.map((item, idx) => (
                <OrderItems key={idx} item={item} />
              ))}
            </tbody>
            <tfoot>
              <tr className="font-semibold text-gray-900 dark:text-white">
                <td className="px-6 py-3">{}</td>
                <td className="px-6 py-3">{}</td>
                <th scope="row" className="px-6 py-3 text-base">
                  Total
                </th>
                <td className="px-6 py-3">
                  <FormatePrice price={totalAmount} />
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MangeOrderDetails;
