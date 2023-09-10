import React from "react";
import SecondaryCustomLink from "../hooks/SecondaryCustomLink";
import auth from "../firebase.init";
import { signOut } from "firebase/auth";
import { MdLogout } from "react-icons/md";
const Sidebar = ({ handleMobileSidebar, links }) => {
  // console.log(items.navigation.map);
  return (
    <ul>
      {links.map((item) => (
        <li onClick={handleMobileSidebar} className="p-3">
          <SecondaryCustomLink to={item.path}>{item.label}</SecondaryCustomLink>
        </li>
      ))}
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
