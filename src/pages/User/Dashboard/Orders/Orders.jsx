import { signOut } from "firebase/auth";
import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import Loading from "../../../../components/Loading";
import auth from "../../../../firebase.init";
import OrderRow from "./OrderRow";
const title = [
  " Order Id",
  "order time",
  "method",
  "status",
  "total",
  "action",
];
const Orders = () => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const url = `https://nexiq-server.vercel.app/order/${user.email}`;

  const { isLoading, data: orders } = useQuery("order", () =>
    fetch(url, {
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("accessToken");
        navigate("/");
      }
      return res.json();
    })
  );

  if (isLoading) {
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
                  <OrderRow order={order} index={index} key={order._id} />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Orders;
