import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar";
const links = [
  {
    label: "Order",
    path: "",
  },
  {
    label: "Profile",
    path: "dashboard/profile",
  },
];

const UserDashboard = () => {
  return (
    <div className="flex container mx-auto">
      <div className="hidden lg:block fixed inset-y-0 left-0 h-screen pt-20 bg-gray-100 w-64 p-4 overflow-y-auto">
        <Sidebar links={links} />
      </div>
      <div className="lg:ml-64 w-full">
        <Outlet />
      </div>
    </div>
  );
};

export default UserDashboard;
