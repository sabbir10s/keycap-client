import React from "react";
import { Link } from "react-router-dom";
import router from "../../../images/router.png";
const SideBannerOne = () => {
  return (
    <Link
      to="/products"
      className="bg-white w-full flex flex-col h-full relative overflow-hidden group"
    >
      <div className="z-50 p-6">
        <h2 className="text-sm font-bold text-secondary-600">
          An ultimate fitness companion.
        </h2>
        <h2 className="text-base lg:text-lg text-gray-700 mt-1">
          Introducing Ninja Fit
        </h2>
        <h2 className="text-base lg:text-lg text-gray-700">
          Track your fitness goals
        </h2>
        <h2 className="text-base lg:text-lg text-primary-600 mt-3">
          Sale 30% off
        </h2>
      </div>
      <img
        className=" absolute w-full h-[250px] lg:w-full lg:h-full object-cover object-center group-hover:scale-110 duration-300"
        src={router}
        alt=""
      />
    </Link>
  );
};

export default SideBannerOne;
