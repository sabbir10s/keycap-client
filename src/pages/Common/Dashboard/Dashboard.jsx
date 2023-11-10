import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../../../components/Sidebar/Sidebar";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import useAdmin from "../../../hooks/useAdmin";
import Loading from "../../../components/Loading";

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
];

const Dashboard = () => {
  const [user] = useAuthState(auth);
  const [admin, adminLoading] = useAdmin(user);
  if (adminLoading) {
    return <Loading />;
  }
  const paths = admin ? adminPaths : userPaths;
  return (
    <div className="min-h-screen">
      <div className="flex gap-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="hidden lg:block w-64 shadow-sm border bg-white min-h-[520px] ">
          <Sidebar paths={paths} />
        </div>
        <div className="w-full">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
