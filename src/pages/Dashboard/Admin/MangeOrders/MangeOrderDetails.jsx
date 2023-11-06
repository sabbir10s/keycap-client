import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Select from "../../../../components/Select";
import Dropdown from "../../../../shared/Dropdown";
import { signOut } from "firebase/auth";
import auth from "../../../../firebase.init";

const MangeOrderDetails = ({ setIsReload, reload, _id, status }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const options = [
    { value: "pending", label: "Pending" },
    { value: "confirmed", label: "Confirmed" },
    { value: "delivered", label: "Delivered" },
  ];
  const handleDelete = () => {
    const url = `https://nexiq-server.vercel.app/order/${_id}`;
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
    const url = `https://nexiq-server.vercel.app/order/${_id}`;

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

  return (
    <div>
      <div className="relative">
        <span className=" text-sm absolute z-30 bg-white text-gray-600 px-2 top-2 left-2 capitalize">
          {status}
        </span>
        <Select
          className="w-28"
          _id={_id}
          options={options}
          onChange={handleSelectChange}
        />
      </div>
    </div>
  );
};

export default MangeOrderDetails;
