import React from "react";
import Button from "../../shared/Button/Button";
import { useState } from "react";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const HandleOrderStatus = ({ status, orderId }) => {
  const [statusValue, setStatusValue] = useState("pending");
  const [reload, setIsReload] = useState(true);
  const navigate = useNavigate();
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
    const url = `https://nexiq-server.vercel.app/admin/order/${orderId}`;

    fetch(url, {
      method: "PUT",
      body: json,
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 403) {
          toast.error("Failed to change");
          signOut(auth);
          localStorage.removeItem("access-token");
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
    <form
      onSubmit={updateStatus}
      className="flex items-center gap-2 mt-3 md:mt-0"
    >
      <small className="hidden md:block text-gray-500">Change Status :</small>
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
          <option selected={status === "confirmed" && true} value="confirmed">
            Confirmed
          </option>
          <option selected={status === "delivered" && true} value="delivered">
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
            className="w-4 h-4 text-gray-600 "
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
  );
};

export default HandleOrderStatus;
