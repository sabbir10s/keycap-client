import React from "react";
import watch from "../../../images/watch.webp";
const WatchOffer = () => {
  return (
    <div className="h-48 w-48 bg-white">
      <h2>45% off</h2>
      <img className="h-48 w-48 object-cover" src={watch} alt="" />
    </div>
  );
};

export default WatchOffer;
