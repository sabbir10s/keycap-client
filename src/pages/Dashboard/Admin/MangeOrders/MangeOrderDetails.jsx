import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "../../../../components/Select";
import { signOut } from "firebase/auth";
import auth from "../../../../firebase.init";
import Button from "../../../../shared/Button/Button";
import Loading from "../../../../components/Loading";
import OrderItems from "../../../../components/Order/OrderItems";
import FormatePrice from "../../../../helper/FormatePrice";

const MangeOrderDetails = () => {
  const { orderId } = useParams();
  const [isOpen, setIsOpen] = useState(false);
  const [statusValue, setStatusValue] = useState("pending");
  const navigate = useNavigate();

  // Get Order Information
  const [orderInfo, setOrderInfo] = useState([]);
  const [reload, setIsReload] = useState(true);
  useEffect(() => {
    const url = `https://nexiq-server.vercel.app/order/${orderId}`;
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
  const { customer, email, status, items, payment, totalAmount, date } =
    orderInfo;
  const { name, mobile, streetAddress, city, zip } = customer;

  const handleDelete = () => {
    const url = `https://nexiq-server.vercel.app/order/${orderId}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Successfully Deleted");
          setIsOpen(false);
          setIsReload(!reload);
        }
      });
  };

  const options = [
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "delivered", label: "Delivered" },
  ];

  const selectStatus = (e) => {
    e.preventDefault();
    const value = e.target.value;
    console.log(value);
    setStatusValue(value);
  };
  const updateStatus = (e) => {
    e.preventDefault();
    console.log(statusValue);
    const json = JSON.stringify({ status: statusValue });
    const url = `https://nexiq-server.vercel.app/order/${orderId}`;

    fetch(url, {
      method: "PUT",
      body: json,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to change");
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          setIsReload(!reload);
          toast.success("Successfully updated");
        }
      });
  };

  return (
    <div className="space-y-4">
      <div className="bg-white flex items-center justify-between p-4">
        <div>
          <h2 className=" font-semibold uppercase">
            Order Details: #Order-{orderId.slice(0, 4)}
          </h2>
          <p>Order Created : </p>
        </div>
        <form onSubmit={updateStatus} className="flex items-center gap-2">
          <small>Change Status :</small>
          <div className="relative inline-block ">
            <select
              className="w-[130px] appearance-none block rounded-md border px-4 py-2 text-gray-600 text-base leading-6 outline-none duration-300"
              onChange={selectStatus}
              name="status"
              id="status"
            >
              <option selected={status === "pending" && true} value="pending">
                Pending
              </option>
              <option
                selected={status === "confirmed" && true}
                value="confirmed"
              >
                Confirmed
              </option>
              <option
                selected={status === "delivered" && true}
                value="delivered"
              >
                Delivered
              </option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-1 flex items-center px-1 md:px-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-gray-600 dark:text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
          <Button category="secondary" type="submit">
            Save
          </Button>
        </form>
      </div>

      <div className="flex flex-col md:flex-row gap-4 w-full">
        <div className="bg-white p-4 w-full">
          <h2 className=" font-medium pb-2">Customer Details</h2>
          <table className="text-sm text-left text-gray-500 w-full">
            <tbody>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  Name
                </th>
                <td className="py-3 text-right">{name}</td>
              </tr>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  Email
                </th>
                <td className="py-3 text-right">{email}</td>
              </tr>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  Phone
                </th>
                <td className="py-3 text-right">{mobile}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="bg-white p-4 w-full">
          <h2 className=" font-medium pb-2">Delivery Address</h2>
          <table className="text-sm text-left text-gray-500 w-full">
            <tbody>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  Street
                </th>
                <td className="py-3 text-right">{streetAddress}</td>
              </tr>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  City
                </th>
                <td className="py-3 text-right">{city}</td>
              </tr>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  Zip Code
                </th>
                <td className="py-3 text-right">{zip}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

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
