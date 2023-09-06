import React from "react";
import SecondaryCustomLink from "../hooks/SecondaryCustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../hooks/useAdmin";
import auth from "../firebase.init";

const Sidebar = ({ handleMobileSidebar }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  return (
    <ul>
      {!admin && (
        <>
          <li className="p-3">
            <SecondaryCustomLink to="/dashboard">My Orders</SecondaryCustomLink>
          </li>
          <li className="p-3">
            <SecondaryCustomLink to="/dashboard/review">
              Give Review
            </SecondaryCustomLink>
          </li>
        </>
      )}
      {admin && (
        <>
          <li onClick={handleMobileSidebar} className="p-3">
            <SecondaryCustomLink to="/dashboard">
              Add New Product
            </SecondaryCustomLink>
          </li>
          <li className="p-3">
            <SecondaryCustomLink to="/dashboard/mangeProducts">
              Mange Products
            </SecondaryCustomLink>
          </li>
          <li className="p-3">
            <SecondaryCustomLink to="/dashboard/mangeOrders">
              Mange Orders
            </SecondaryCustomLink>
          </li>
          <li className="p-3">
            <SecondaryCustomLink to="/dashboard/mangeUsers">
              Mange Users
            </SecondaryCustomLink>
          </li>
        </>
      )}
    </ul>
  );
};

export default Sidebar;