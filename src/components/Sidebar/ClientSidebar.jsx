import React from "react";
import { signOut } from "firebase/auth";
import { MdLogout } from "react-icons/md";
import Loading from "../Loading";
import SecondaryCustomLink from "../../hooks/SecondaryCustomLink";
import auth from "../../firebase.init";
import { useNavigate } from "react-router-dom";

const ClientSidebar = ({ handleMobileSidebar, links }) => {
  const navigate = useNavigate();

  const handleSignOut = () => {
    navigate("/");
    signOut(auth);
  };
  if (!links.length) {
    return <Loading />;
  }
  return (
    <div className="flex flex-col justify-between h-full">
      <ul className="px-6 py-3">
        {links.map((item, index) => (
          <li key={index} className="pt-3" onClick={() => handleMobileSidebar}>
            <SecondaryCustomLink to={item.path}>
              {item.label}
            </SecondaryCustomLink>
          </li>
        ))}
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
  );
};

export default ClientSidebar;
