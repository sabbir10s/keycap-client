import React from "react";
import { Outlet } from "react-router-dom";
import ClientSidebar from "../../../components/Sidebar/ClientSidebar";

const links = [
  {
    label: "Order",
    path: "",
  },
  {
    label: "Profile",
    path: "profile",
  },
];

const ClientDashboard = () => {
  return (
    <div className="h-screen">
      <div className="flex gap-4 max-w-screen-xl mx-auto">
        <div className="hidden lg:block w-64 shadow-sm border bg-white h-[520px] mt-4">
          <ClientSidebar links={links} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientDashboard;
