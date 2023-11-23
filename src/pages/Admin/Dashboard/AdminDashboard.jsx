import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";

const adminPaths = [
  {
    label: "Mange Products",
    path: "",
  },
  {
    label: " Mange Orders",
    path: "mangeOrders",
  },
  {
    label: " Mange Users",
    path: "mangeUsers",
  },
  {
    label: "Profile",
    path: "profile",
  },
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 max-w-screen-xl mx-auto lg:px-8 lg:py-4">
        <div className="hidden lg:block w-64 shadow-sm border bg-white min-h-[520px] ">
          <Sidebar paths={adminPaths} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
