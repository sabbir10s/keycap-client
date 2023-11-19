import React from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
const AddWishlist = () => {
  const [wishlist, setWishlist] = useState(false);
  return (
    <div>
      <button
        onClick={() => setWishlist(!wishlist)}
        className="text-gray-400 hover:text-red-600 duration-300 absolute right-0 top-0 text-xl"
        href="#"
      >
        {!wishlist && <AiOutlineHeart />}
        {wishlist && <AiFillHeart className="text-[#FF5555]" />}
      </button>
    </div>
  );
};

export default AddWishlist;
