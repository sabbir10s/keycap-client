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
  const navigate = useNavigate();

  // Get Order Information

  const [orderInfo, setOrderInfo] = useState([]);
  const [reload, setIsReload] = useState(true);
  useEffect(() => {
    const url = `https://nexiq-server.vercel.app/order/${orderId}`;
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

  const { customer, email, status, items, payment, totalAmount, date } =
    orderInfo;

  const options = [
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "delivered", label: "Delivered" },
  ];
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

  const handleSelectChange = (event) => {
    const value = event.target.value;
    const json = JSON.stringify({ status: value });
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
        console.log("res for all users", res);
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

  const [selectedOption, setSelectedOption] = useState(null);
  const handleOptionClick = (option) => {
    setSelectedOption(option); // Update the selected option state
  };
  console.log(orderInfo);
  if (!orderInfo) {
    return <Loading />;
  }
  return (
    <div className="space-y-4">
      <div className="bg-white flex items-center justify-between p-4">
        <div>
          <h2 className=" font-semibold uppercase">
            Order Details: #Order-{orderId.slice(0, 4)}
          </h2>
          <p>Order Created : </p>
        </div>
        <form className="flex items-center gap-2">
          <small>Change Status :</small>
          <div className="relative">
            <span className=" text-sm absolute z-30 bg-white text-gray-600 px-2 top-2 left-2 capitalize">
              {orderInfo.status}
            </span>
            <Select
              className="w-28 border-gray-300"
              _id={orderId}
              options={options}
              onChange={handleSelectChange}
            />
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
                <td className="py-3 text-right">{customer.name}</td>
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
                <td className="py-3 text-right">{customer.mobile}</td>
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
                <td className="py-3 text-right">{customer.streetAddress}</td>
              </tr>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  City
                </th>
                <td className="py-3 text-right">{customer.city}</td>
              </tr>
              <tr className="bg-white border-b border-gray-200 last:border-0 text-start mx-9">
                <th className="py-3 font-normal text-[#55585B] w-[50%]">
                  Zip Code
                </th>
                <td className="py-3 text-right">{customer.zip}</td>
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
        <div class="relative overflow-x-auto py-4">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3 rounded-l-lg">
                  Product
                </th>
                <th scope="col" class="px-6 py-3">
                  Qty
                </th>
                <th scope="col" class="px-6 py-3 rounded-r-lg">
                  Unit Price
                </th>
                <th scope="col" class="px-6 py-3 rounded-r-lg">
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
              <tr class="font-semibold text-gray-900 dark:text-white">
                <td class="px-6 py-3">{}</td>
                <td class="px-6 py-3">{}</td>
                <th scope="row" class="px-6 py-3 text-base">
                  Total
                </th>
                <td class="px-6 py-3">
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
