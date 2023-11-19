import React from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const fieldStyle = "px-6 py-4 whitespace-nowrap text-sm  capitalize ";

const UsersRow = ({ user, refetch, index }) => {
  const { logOut } = useAuthContext();
  const { name, email, role, _id } = user;
  const navigate = useNavigate();

  const handleMakeAdmin = (user) => {
    const url = `https://nexiq-server.vercel.app/user/admin/${user._id}`;
    fetch(url, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        console.log("res for all users", res);
        if (res.status === 403) {
          toast.error("Failed to make an admin");
          localStorage.removeItem("access-token");
          logOut();
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        if (data.modifiedCount > 0) {
          refetch();
          toast.success("Successfully made an admin");
        }
      });
  };

  const handleDelete = () => {
    const url = `https://nexiq-server.vercel.app/user/${_id}`;
    fetch(url, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount) {
          toast.success("Successfully Deleted");
          refetch();
        }
      });
  };

  return (
    <tr className="text-gray-500 hover:bg-gray-100 duration-200  dark:text-gray-400 dark:hover:bg-gray-600/50 even:bg-white-100 odd:bg-gray-100/30">
      <th className={fieldStyle}>{index + 1}</th>
      <td className={fieldStyle}>{name}</td>
      <td className={fieldStyle}>{email}</td>
      <td className={fieldStyle}>
        {role !== "admin" && (
          <button
            onClick={() => handleMakeAdmin(user)}
            className="text-xs bg-primary-600 hover:bg-primary-700 duration-300 text-white px-2 py-1 rounded-full"
          >
            Make Admin
          </button>
        )}
        {role === "admin" && (
          <button
            onClick={() => handleMakeAdmin(user)}
            className="uppercase bg-green-400/10 text-[11px] lg:text-sm  text-green-500 px-3 py-1 rounded-md leading-none font-medium text-end"
          >
            Admin
          </button>
        )}
      </td>
      <td className={fieldStyle}>
        {role !== "admin" && (
          <button
            onClick={() => handleDelete(_id)}
            className="bg-orange-400/10 text-[11px] lg:text-sm  text-yellow-600 px-3 py-1 rounded-md leading-none font-medium text-end"
          >
            Delete
          </button>
        )}
      </td>
    </tr>
  );
};

export default UsersRow;
