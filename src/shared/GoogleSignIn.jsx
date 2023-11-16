import React from "react";
import { FcGoogle } from "react-icons/fc";
import { useAuthContext } from "../context/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleSignIn = () => {
  const { googleSignIn } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  let from = location?.state?.from?.pathname || "/";

  const handleGoogleSignIn = () => {
    googleSignIn().then((result) => {
      const logInUser = result.user;
      console.log(logInUser);
      const userInfo = { name: logInUser.displayName, email: logInUser.email };
      fetch("http://localhost:5000/user", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      })
        .then((res) => res.json())
        .then(() => {
          navigate(from, { replace: true });
        });
    });
  };
  return (
    <button
      onClick={handleGoogleSignIn}
      className="bg-gray-100 py-2 w-full flex items-center justify-center hover:shadow-md duration-300 text-base"
    >
      <span className="flex items-center">
        <FcGoogle className="text-3xl mr-2" />
        <span>Sign in with Google</span>
      </span>
    </button>
  );
};

export default GoogleSignIn;
