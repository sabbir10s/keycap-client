import React from "react";
import headphone from "../../../images/headphone.webp";
const HeadphoneOffer = () => {
  return (
    <div className="h-48 w-48 bg-white">
      <h2>45% off</h2>
      <img className="h-48 w-48 object-cover" src={headphone} alt="" />
    </div>
  );
};

export default HeadphoneOffer;
