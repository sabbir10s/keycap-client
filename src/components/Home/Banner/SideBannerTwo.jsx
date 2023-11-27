import React from "react";
import { Link } from "react-router-dom";
const SideBannerTwo = () => {
  return (
    <Link
      to="/products"
      className="bg-white w-full flex flex-col h-full relative overflow-hidden group"
    >
      <div className="z-40 p-6">
        <h2 className="text-sm font-bold text-secondary-400 tracking-wide">
          Full HD Display
        </h2>
        <h2 className="text-base lg:text-lg text-gray-700 mt-1">
          Great deal for smartphone
        </h2>
        <h2 className="text-base lg:text-lg text-gray-700">
          iPhone 13 pro Max
        </h2>
        <h2 className="text-base lg:text-lg text-primary-600 mt-3">
          Sale 45% off
        </h2>
      </div>
      <img
        className=" absolute w-full h-[250px] lg:w-full lg:h-full object-cover object-center group-hover:scale-125 duration-300"
        src="https://limupa-theme.myshopify.com/cdn/shop/files/banner1-1.jpg?v=1613717327"
        alt=""
      />
    </Link>
  );
};

export default SideBannerTwo;
