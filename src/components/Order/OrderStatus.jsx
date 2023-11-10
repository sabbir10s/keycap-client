import React from "react";
import { BsCheck } from "react-icons/bs";

const OrderStatus = ({ status }) => {
  return (
    <div className="flex items-center">
      <div
        className={
          status === "pending" || "confirmed" || "delivered"
            ? "w-20 h-[2px] bg-green-500"
            : ""
        }
      ></div>
      <div className="relative">
        <span className="absolute top-4 left-[-15px] text-xs text-gray-500">
          Pending
        </span>
        {status === "pending" && <BsCheck className=" absolute text-white" />}
        <div className="bg-green-500 w-4 h-4 rounded-full "></div>
      </div>
      <div
        className={
          status === "confirmed" || "delivered"
            ? "w-20 h-[2px] bg-green-500"
            : "w-20 h-[2px] bg-gray-400"
        }
      ></div>

      <div className="relative">
        <span className="absolute top-4 left-[-15px] text-xs text-gray-500">
          Confirmed
        </span>
        {status === "confirmed" && <BsCheck className=" absolute text-white" />}
        <div className="bg-green-500 w-4 h-4 rounded-full "></div>
      </div>

      <div
        className={
          status === "delivered"
            ? "w-20 h-[2px] bg-green-500"
            : "w-20 h-[2px] bg-gray-400"
        }
      ></div>

      <div className="relative">
        <span className="absolute top-4 left-[-15px] text-xs text-gray-500">
          Delivered
        </span>
        {status === "delivered" && <BsCheck className=" absolute text-white" />}
        <div
          className={
            status === "delivered"
              ? "bg-green-500 w-4 h-4 rounded-full"
              : "bg-gray-400 w-4 h-4 rounded-full"
          }
        ></div>
      </div>
    </div>
  );
};

export default OrderStatus;
