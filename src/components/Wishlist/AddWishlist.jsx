import React from "react";
import { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useProductContext } from "../../context/ProductContext";
import { toast } from "react-toastify";
import { useAuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
const AddWishlist = ({ _id }) => {
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const email = user?.email;
  const [wishlist, setWishlist] = useState(false);
  const { products } = useProductContext();
  const singleProduct = products.find((product) => product._id === _id);
  console.log(singleProduct, "wishlist");

  const handleWishlist = (event) => {
    event.preventDefault();

    const url = `https://keycap-server.vercel.app/user/${email}`;
    const wishlist = singleProduct._id;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({ wishlist: wishlist }),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast.success("Wishlist Added");
        } else {
          toast.error("Failed to add wishlist");
        }
      });
  };
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
