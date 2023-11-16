import React from "react";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { MdLogout } from "react-icons/md";
import SecondaryCustomLink from "../../hooks/SecondaryCustomLink";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";
const clientLinks = [
  {
    label: "Order",
    path: "user/dashboard",
  },
  {
    label: "Profile",
    path: "user/dashboard/profile",
  },
];
const adminLinks = [
  {
    label: "Mange Products",
    path: "admin/dashboard",
  },
  {
    label: " Mange Orders",
    path: "admin/dashboard/mangeOrders",
  },
  {
    label: " Mange Users",
    path: "admin/dashboard/mangeUsers",
  },
];
const MobileSidebar = ({ visible, handleMobileSidebar }) => {
  const { user, loading, logOut } = useAuthContext();
  const { clearCart } = useCartContext();

  const admin = false;
  const handleCloseModal = (e) => {
    if (e.target.id === "containers") handleMobileSidebar();
  };

  const navigate = useNavigate();

  const handleSignOut = () => {
    logOut();
    handleMobileSidebar();
    navigate("/");
    clearCart();
  };

  if (!visible) {
    return null;
  }
  return (
    <button
      onClick={handleCloseModal}
      id="containers"
      className="lg:hidden z-40 fixed inset-0 bg-black bg-opacity-30 h-screen"
    >
      <div className="h-full bg-gray-100 w-64 flex flex-col justify-between">
        {!admin && user && (
          <ul className="px-6 py-20">
            {clientLinks.map((item, index) => (
              <li key={index} className="pt-3 block text-left">
                <SecondaryCustomLink
                  handleMobileSidebar={handleMobileSidebar}
                  to={item.path}
                >
                  {item.label}
                </SecondaryCustomLink>
              </li>
            ))}
          </ul>
        )}
        {admin && (
          <ul className="px-6 py-20">
            {adminLinks.map((item, index) => (
              <li key={index} className="pt-3 block text-left">
                <SecondaryCustomLink
                  to={item.path}
                  handleMobileSidebar={handleMobileSidebar}
                >
                  {item.label}
                </SecondaryCustomLink>
              </li>
            ))}
          </ul>
        )}
        <div>
          <div className="border-[1px]"></div>
          <button
            className="px-6 py-3 flex items-center gap-2 text-left hover:text-secondary-600 duration-300"
            onClick={handleSignOut}
          >
            <MdLogout /> <span>Sign out</span>
          </button>
        </div>
      </div>
    </button>
  );
};

export default MobileSidebar;
