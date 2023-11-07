import React from "react";
import { Outlet } from "react-router-dom";
import AdminSidebar from "../../../components/Sidebar/AdminSidebar";
const links = [
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
];

const AdminDashboard = () => {
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="hidden lg:block w-64 shadow-sm border bg-white min-h-[520px] ">
          <AdminSidebar links={links} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
