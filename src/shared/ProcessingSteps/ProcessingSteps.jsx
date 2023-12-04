import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { BiSupport } from "react-icons/bi";
import { RiTeamFill } from "react-icons/ri";
import { FaCreditCard } from "react-icons/fa";

const ProcessingSteps = () => {
  return (
    <div className="border-t border-t-gray-300 py-8 bg-slate-50 mt-8 lg:mt-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-4 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="text-center flex flex-col items-center">
            <FaCreditCard className="text-primary-600 text-4xl" />
            <h5 className="mt-2 mb-1 font-semibold text-sm md:text-base">
              Easy to payment
            </h5>
            <p className="text-xs md:text-sm text-gray-500">
              Effortless and Convenient Payment Solutions
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <TbTruckDelivery className="text-primary-600 text-4xl" />
            <h5 className="mt-2 mb-1 font-semibold">FAST PROCESSING TIME</h5>
            <p className=" text-sm text-gray-500">
              Every Order is processed and shipped on the next business day.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <BiSupport className="text-primary-600 text-4xl" />
            <h5 className="mt-2 mb-1 font-semibold text-sm md:text-base">
              TOP-NOTCH SUPPORT
            </h5>
            <p className="text-xs md:text-sm text-gray-500">
              Our Teams does its best to answer every question within 24h via
              Mail or Discord.
            </p>
          </div>
          <div className="text-center flex flex-col items-center">
            <RiTeamFill className="text-primary-600 text-4xl" />
            <h5 className="mt-2 mb-1 font-semibold text-sm md:text-base">
              DISCORD COMMUNITY
            </h5>
            <p className="text-xs md:text-sm text-gray-500">
              The KEYCAP Discord Community is growing every day and offers a
              friendly environment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProcessingSteps;
