import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import CustomLink from "../hooks/CustomLink";
import { BiMenuAltLeft } from "react-icons/bi";
import SecondaryCustomLink from "../hooks/SecondaryCustomLink";
import MobileSidebar from "./Sidebar/MobileSidebar";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useCartContext } from "../context/CartContext";
import { useAuthContext } from "../context/AuthContext";
import useAdmin from "../hooks/useAdmin";
import { HiUser } from "react-icons/hi";

const navItems = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Products",
    link: "/products",
  },
  {
    name: "Blogs",
    link: "/blogs",
  },
];
const Navbar = () => {
  const { user } = useAuthContext();
  const [isAdmin] = useAdmin();
  const { total_item } = useCartContext();

  // Mobile sidebar
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // close mobile sidebar
  const handleMobileSidebar = () => {
    setMobileSidebar(false);
  };
  const { pathname } = useLocation();

  //Dropdown options
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOptionClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      <header className="bg-primary-600 z-50 fixed top-0 w-full py-4">
        <div className="flex items-center justify-center gap-8 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:hidden absolute left-0 lg:static">
            {pathname === "/userDashboard" && (
              <button onClick={() => setMobileSidebar(true)}>
                <span className="text-3xl">
                  <BiMenuAltLeft />
                </span>
              </button>
            )}
            {pathname === "/adminDashboard" && (
              <button onClick={() => setMobileSidebar(true)}>
                <span className="text-3xl">
                  <BiMenuAltLeft />
                </span>
              </button>
            )}
          </div>
          <div>
            <Link className="block text-white" to="/">
              <div className="text-center text-2xl font-bold ">NEXIQ</div>
            </Link>
          </div>

          <div className="flex flex-1 items-center justify-end lg:justify-between absolute right-0  lg:static">
            <nav aria-label="Global" className="hidden lg:block">
              <ul className="flex items-center gap-2 text-sm">
                {navItems.map((items) => (
                  <li key={items.name}>
                    <CustomLink to={items.link}>{items.name}</CustomLink>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="flex items-center gap-4">
              <Link
                to="/cart"
                className="relative flex items-center md:pr-5"
                type="button"
              >
                <AiOutlineShoppingCart className="text-[24px] text-white" />
                <span className="absolute top-[-10px] left-[18px] text-[11px] text-white bg-secondary-600 rounded-full h-[20px] w-[18px] flex items-center justify-center">
                  {total_item}
                </span>
              </Link>
              <div className="hidden lg:flex lg:gap-4 ">
                {user ? (
                  <Link
                    to={isAdmin ? "/adminDashboard" : "/userDashboard"}
                    className="text-white text-base uppercase font-bold border-2 border-white w-8 h-8 rounded-full flex justify-center items-center"
                  >
                    {/* {loading ? ".." : user?.displayName.slice(0, 1)} */}
                    <HiUser className="text-white" />
                  </Link>
                ) : (
                  <Link
                    className="border border-white rounded px-5 py-1.5 text-sm font-medium text-white"
                    to="/SignIn"
                  >
                    Sign In
                  </Link>
                )}
              </div>

              <div className="block lg:hidden p-2.5 text-gray-600 transition hover:text-gray-600/75 ">
                <div className="relative" ref={dropdownRef}>
                  <button
                    type="button"
                    className=" p-2 text-gray-600 dark:text-gray-200 transition hover:text-gray-600/75"
                    onClick={toggleDropdown}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                      />
                    </svg>
                  </button>

                  {isOpen && (
                    <div className="absolute right-0 z-10 mt-1 w-48 py-2 text-left text-sm text-gray-700 dark:text-gray-200 bg-white rounded-lg shadow dark:bg-gray-700">
                      <div className="py-1 flex flex-col gap-6 pl-4">
                        {user && (
                          <button onClick={handleOptionClick}>
                            <SecondaryCustomLink
                              to={
                                isAdmin ? "/adminDashboard" : "/userDashboard"
                              }
                            >
                              Dashboard
                            </SecondaryCustomLink>
                          </button>
                        )}
                        {navItems.map((item) => (
                          <button key={item.name} onClick={handleOptionClick}>
                            <SecondaryCustomLink to={item.link}>
                              {item.name}
                            </SecondaryCustomLink>
                          </button>
                        ))}

                        {!user && (
                          <SecondaryCustomLink to="/SignIn">
                            Sign In
                          </SecondaryCustomLink>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <MobileSidebar
        visible={mobileSidebar}
        handleMobileSidebar={handleMobileSidebar}
      />
    </>
  );
};

export default Navbar;
