import React from "react";
import "./Banner.css";
import Slider from "../Slider/Slider";
import { BsArrowRight } from "react-icons/bs";

const Banner = () => {
  return (
    <div className="md:py-5 lg:py-20 bgImg">
      <div
        id="#hero"
        className="max-w-screen-xl mx-auto px-2 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-5  items-center"
      >
        <div className="pb-14 order-2 lg:order-1">
          <h2 className="text-lg md:text-xl font-medium text-primary-700 ">
            Largest gadgets supplier
          </h2>
          <h1 className="text-3xl md:text-5xl font-bold py-4 text-gray-800">
            Best Tech, Best Future!
          </h1>
          <p className="text-sm md:text-base text-gray-600">
            NEXIQ build different types of gadget, which is world wide popular.
            Here you can order large amount of product for your shop or
            organization.{" "}
          </p>
          <a
            className="mt-6 border-[1px] border-primary-700 hover:border-[1px] hover:border-transparent bg-white hover:bg-primary-700 text-primary-700 hover:text-white duration-300 w-[150px] py-2 flex items-center justify-center gap-1"
            href="#products"
          >
            <span>Shop Now </span> <BsArrowRight className="text-lg" />
          </a>
        </div>
        <div className="relative flex justify-center lg:justify-end items-center order-1 lg:order-2">
          <Slider />
        </div>
      </div>
    </div>
  );
};

export default Banner;
