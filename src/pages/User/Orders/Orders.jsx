import React from "react";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../../components/Loading";
import OrderRow from "../../../components/Order/OrderRow";
import { useAuthContext } from "../../../context/AuthContext";
import { useState } from "react";
import Pagination from "../../../shared/Pagination";
const title = [
  " Order Id",
  "order time",
  "method",
  "status",
  "total",
  "payment",
  "action",
];
const Orders = () => {
  const { user, loading, logOut } = useAuthContext();
  const navigate = useNavigate();
  const url = `https://nexiq-server.vercel.app/user/order/${user.email}`;

  const { isLoading, data: orders } = useQuery("order", () =>
    fetch(url, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        logOut();
        localStorage.removeItem("access-token");
        navigate("/");
      }
      return res.json();
    })
  );

  const [currentItems, setCurrentItems] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [itemsOffset, setItemsOffset] = useState(0);
  const itemsPerPage = 5;

  if (isLoading || loading) {
    return <Loading />;
  }

  return (
    <div className="bg-white border-[1px] border-gray-200/80">
      <h2 className="p-2 md:p-4 font-semibold">ORDERS LIST</h2>
      <div className="border-b"></div>
      {orders.length > 0 ? (
        <div>
          <div className="overflow-x-auto p-2 md:p-4">
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
                      <OrderRow order={order} index={index} key={order._id} />
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="text-gray-700 flex flex-col md:flex-row gap-6 justify-between items-center w-full pl-[15px] pr-[30px] py-6 text-sm">
            <p className="uppercase font-semibold">
              showing ({itemsOffset + 1}- {itemsOffset + currentItems.length})
              of {orders.length}
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
      ) : (
        <div className=" text-center w-full text-gray-500 py-4">
          No orders available
        </div>
      )}
    </div>
  );
};

export default Orders;
