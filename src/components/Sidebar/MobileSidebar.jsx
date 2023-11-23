import React from "react";
import { MdLogout } from "react-icons/md";
import SecondaryCustomLink from "../../hooks/SecondaryCustomLink";
import { useNavigate } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";
import { useAuthContext } from "../../context/AuthContext";
import Loading from "../Loading";
import useAdmin from "../../hooks/useAdmin";
const userPaths = [
  {
    label: "Order",
    path: "",
  },
  // {
  //   label: "wishlist",
  //   path: "Wishlist",
  // },
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
  {
    label: "Profile",
    path: "profile",
  },
];
const MobileSidebar = ({ visible, handleMobileSidebar }) => {
  const { loading, logOut } = useAuthContext();
  const [isAdmin] = useAdmin();
  const { clearCart } = useCartContext();
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

  if (loading) {
    return <Loading />;
  }
  return (
    <button
      onClick={handleCloseModal}
      id="containers"
      className="lg:hidden z-40 fixed inset-0 bg-black bg-opacity-30 h-screen"
    >
      <div className="h-full bg-gray-100 w-64 flex flex-col justify-between">
        <ul className="px-6 py-20">
          {isAdmin ? (
            <>
              {adminPaths.map((item, index) => (
                <li key={index} className="pt-3 block text-left">
                  <SecondaryCustomLink
                    to={`adminDashboard/${item.path}`}
                    handleMobileSidebar={handleMobileSidebar}
                  >
                    {item.label}
                  </SecondaryCustomLink>
                </li>
              ))}
            </>
          ) : (
            <>
              {userPaths.map((item, index) => (
                <li key={index} className="pt-3 block text-left">
                  <SecondaryCustomLink
                    handleMobileSidebar={handleMobileSidebar}
                    to={`userDashboard/${item.path}`}
                  >
                    {item.label}
                  </SecondaryCustomLink>
                </li>
              ))}
            </>
          )}
        </ul>
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
