import React from "react";
// import { HiMiniSquares2X2 } from "react-icons/hi";

import Sort from "./Sort";

const ProductTop = () => {
  return (
    <div className="flex items-center justify-between w-full">
      <Sort />
      <input type="text" className="border pl-1.5 py-1" placeholder="Search" />
      <h1>Sort By:</h1>
    </div>
  );
};

export default ProductTop;
