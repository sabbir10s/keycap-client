import React from "react";
import icon from "../../../assets/Icons/icon.png";
import icon1 from "../../../assets/Icons/icon2.png";
import icon2 from "../../../assets/Icons/icon3.png";
const OurService = () => {
  return (
    <div className="bg-primary-700 py-20">
      <div className="max-w-[1400px] mx-auto lg:px-20 px-2 ">
        <h2 className="text-gray-100 text-center text-2xl font-bold uppercase pb-10">
          what we provide
        </h2>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          <div className="border w-[300px] h-[200px] p-5 bg-gray-100 rounded-lg flex justify-center items-center">
            <div className="text-center">
              <img className="w-14 mx-auto pb-3" src={icon} alt="" />
              <h3 className="text-xl text-primary-700 font-bold">
                Best Quality
              </h3>
              <p className="text-sm pt-2">
                We ensures the best quality of every product.
              </p>
            </div>
          </div>
          <div className="border w-[300px] h-[200px] p-5 bg-gray-100 rounded-lg flex justify-center items-center">
            <div className="text-center">
              <img className="w-14 mx-auto pb-3" src={icon1} alt="" />
              <h3 className="text-xl text-primary-700 font-bold">
                Large quantity
              </h3>
              <p className="text-sm pt-2">
                Every day we provide a large number of products
              </p>
            </div>
          </div>
          <div className="border w-[300px] h-[200px] p-5 bg-gray-100 rounded-lg flex justify-center items-center">
            <div className="text-center">
              <img className="w-14 mx-auto pb-3" src={icon2} alt="" />
              <h3 className="text-xl text-primary-700 font-bold">
                After Sell Service
              </h3>
              <p className="text-sm pt-2">
                After sell we provide the best customer service.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurService;
