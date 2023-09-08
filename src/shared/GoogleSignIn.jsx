import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleSignIn = ({ signInWithGoogle }) => {
  return (
    <button
      onClick={() => signInWithGoogle()}
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
