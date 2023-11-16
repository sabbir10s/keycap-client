import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

const userPaths = [
  {
    label: "Order",
    path: "",
  },
  {
    label: "Profile",
    path: "profile",
  },
];

const UserDashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="hidden lg:block w-64 shadow-sm border bg-white min-h-[520px] ">
          <Sidebar paths={userPaths} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
