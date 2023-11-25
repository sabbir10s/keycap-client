import React, { useEffect, useState } from "react";
import MangeOrderRow from "./MangeOrderRow";
import Loading from "../../../components/Loading";
import Pagination from "../../../shared/Pagination";
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
    const url = "https://nexiq-server.vercel.app/order";
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
  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsPerPage = 5;

  if (orders.length === 0) {
    return <Loading />;
  }
  return (
    <div className="bg-white border-[1px] border-gray-200/80">
      <h2 className="p-4 font-semibold">ORDERS LIST</h2>
      <div className="border-b"></div>
      <div className="overflow-x-auto p-4">
        <div className="align-middle inline-block min-w-full">
          <div className="shadow overflow-hidden border-b border-gray-200 ">
            <table className="min-w-full divide-y divide-gray-200 ">
              <thead className="bg-gray-400 ">
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
              <tbody className=" divide-y divide-gray-200 ">
                {currentItems.map((order, index) => (
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

      <div className="text-gray-700 flex flex-col md:flex-row gap-6 justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm">
        <p className="uppercase font-semibold">
          showing ({itemsOffset + 1}- {itemsOffset + currentItems.length}) of{" "}
          {orders.length}
        </p>
        <Pagination
          pageCount={pageCount}
          setPageCount={setPageCount}
          itemsOffset={itemsOffset}
          setItemsOffset={setItemsOffset}
          setCurrentItems={setCurrentItems}
          itemsPerPage={itemsPerPage}
          items={orders}
        />
      </div>
    </div>
  );
};

export default MangeOrders;
