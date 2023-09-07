import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import CustomLink from "../hooks/CustomLink";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../firebase.init";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { BiMenuAltLeft } from "react-icons/bi";
import MobileSidebar from "./MobileSidebar";
import SecondaryCustomLink from "../hooks/SecondaryCustomLink";
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
const NavLeft = () => {
  // Mobile sidebar
  const [mobileSidebar, setMobileSidebar] = useState(false);

  // close mobile sidebar
  const handleMobileSidebar = () => {
    setMobileSidebar(false);
  };
  const { pathname } = useLocation();
  const [user] = useAuthState(auth);

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
      <header className="bg-[#f9fafb] dark:bg-[#1a1c23] z-50 sticky top-0">
        <div className="mx-auto flex items-center justify-center h-16 max-w-screen-xl gap-8 px-4 sm:px-6 lg:px-8">
          <div className="lg:hidden absolute left-0 lg:static">
            {pathname.includes("dashboard") && (
              <button onClick={() => setMobileSidebar(true)}>
                <span className="text-3xl">
                  <BiMenuAltLeft />
                </span>
              </button>
            )}
          </div>
          <div>
            <Link className="block text-primary-600" to="/">
              <div className="text-center text-2xl font-bold ">
                <Link to="/">NEXIQ</Link>
              </div>
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
              <div className="hidden lg:flex lg:gap-4 ">
                {user && (
                  <Link
                    to="/dashboard"
                    className="text-primary-700 text-base uppercase font-bold border-2 border-primary-700 w-8 h-8 rounded-full flex justify-center items-center"
                  >
                    {user?.displayName.slice(0, 1)}{" "}
                  </Link>
                )}
                {!user && (
                  <Link
                    className="block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700"
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
                      <div className="py-1 flex flex-col gap-3">
                        {user && (
                          <button onClick={handleOptionClick}>
                            <NavLink
                              to="/dashboard"
                              className="block text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                              activeClassName="text-secondary-500"
                            >
                              Dashboard
                            </NavLink>
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
                          <Link
                            className="block rounded-md bg-primary-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-primary-700"
                            to="/SignIn"
                          >
                            Sign In
                          </Link>
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

export default NavLeft;
