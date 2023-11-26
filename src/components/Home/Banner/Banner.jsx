import React from "react";
import "./Banner.css";
import Slider from "../Slider/Slider";
// import { BsArrowRight } from "react-icons/bs";
import WatchOffer from "./WatchOffer";
import HeadphoneOffer from "./HeadphoneOffer";

const Banner = () => {
  return (
    <div className=" max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 gap-5 grid grid-cols-1 lg:grid-cols-4 mt-2 md:mt-3 lg:mt-5">
      <div className=" col-span-1 lg:col-span-3">
        <Slider />
      </div>
      <div>
        <WatchOffer />
        <HeadphoneOffer />
      </div>
    </div>
  );
};

export default Banner;
