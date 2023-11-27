import React from "react";
import "./Banner.css";
import Slider from "../Slider/Slider";
import SideBannerTwo from "./SideBannerTwo";
import SideBannerOne from "./SideBannerOne";

const Banner = () => {
  return (
    <div className=" max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 gap-5 grid grid-cols-1 lg:grid-cols-3 pt-2 md:pt-3 lg:pt-5">
      <div className=" col-span-1 lg:col-span-2">
        <Slider />
      </div>
      <div className="h-full flex gap-4 flex-col md:flex-row lg:flex-col">
        <SideBannerOne />
        <SideBannerTwo />
      </div>
    </div>
  );
};

export default Banner;
