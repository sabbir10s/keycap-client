import React, { useEffect, useState } from "react";
import MangeOrderRow from "./MangeOrderRow";
import Loading from "../../../components/Loading";
const title = [
  " Order Id",
  "Customer",
  "Item",
  "Total",
  "Date",
  "status",
  "Action",
];
const MangeOrders = () => {
  const [orders, setOrders] = useState([]);
  const [reload, setIsReload] = useState(true);
  useEffect(() => {
    const url = "http://localhost:5000/order";
    fetch(url, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
      });
  }, [reload]);
  console.log(orders);
  if (orders.length === 0) {
    return <Loading />;
  }
  return (
    <div className="bg-white border-[1px] border-gray-200/80">
      <h2 className="p-4 font-semibold">ORDERS LIST</h2>
      <div className="border-b"></div>
      <div className="overflow-x-auto p-4">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
              <thead className="bg-secondary-500 dark:bg-gray-900 dark:text-gray-300">
                <tr>
                  {title.map((item, idx) => (
                    <th
                      key={idx}
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider"
                    >
                      {item}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className=" divide-y divide-gray-200 dark:divide-gray-600">
                {orders.map((order, index) => (
                  <MangeOrderRow
                    order={order}
                    index={index}
                    key={order._id}
                    setIsReload={setIsReload}
                    reload={reload}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MangeOrders;
