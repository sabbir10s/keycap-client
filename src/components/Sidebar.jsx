import React from "react";
import SecondaryCustomLink from "../hooks/SecondaryCustomLink";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../hooks/useAdmin";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import { MdLogout } from "react-icons/md";
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
          <li className="p-3">
            <SecondaryCustomLink to="/dashboard/profile">
              Profile
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

      <button
        className="p-3 flex items-center gap-2 text-left hover:text-secondary-600 duration-300"
        onClick={() => signOut(auth)}
      >
        <MdLogout /> <span>Sign out</span>
      </button>
    </ul>
  );
};

export default Sidebar;
