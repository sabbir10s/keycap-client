/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Fade } from "react-reveal";
import { AiOutlinePlus } from "react-icons/ai";
import { FiArrowRight } from "react-icons/fi";

import FormatePrice from "../../../helper/FormatePrice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCartContext } from "../../../context/CartContext";
import AddWishlist from "../../Wishlist/AddWishlist";
const ProductCard = ({ product }) => {
  const { _id, name, image, price } = product;
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/product/${_id}`);
  };

  const { addToCart, cart } = useCartContext();
  const alreadyAdded = cart.find((item) => {
    if (item._id === _id) {
      return true;
    }
    return false;
  });

  const [amount] = useState(1);

  // Add To Cart Button
  const handleAddToCart = () => {
    if (!alreadyAdded) {
      addToCart(_id, amount, product);
      toast.success("Successfully Added to Cart", {
        position: toast.POSITION.TOP_CENTER,
      });
    } else {
      navigate("/cart");
    }
  };
  return (
    <div>
      <Fade bottom>
        <div className="w-full p-4 border/50 rounded-[5px] group bg-white shadow-sm border">
          <div className="flex flex-col relative">
            <div>
              <button
                onClick={handleProductDetails}
                className="flex justify-center items-center w-full"
              >
                <img
                  className="w-[180px] group-hover:scale-110 duration-300"
                  src={image}
                  alt=""
                />
              </button>
              <div className="h-[80px] flex items-center">
                <div>
                  <p className="text-left text-sm lg:text-base mb-1">{name}</p>
                  <div className="flex items-center space-x-1">
                    <p className="text-primary-700 text-lg md:text-xl lg:text-2xl text-left font-bold">
                      <FormatePrice price={price} />
                    </p>
                    <del className="text-gray-400">$106.06</del>
                  </div>
                </div>
              </div>
            </div>
            <AddWishlist />
            <button
              onClick={handleAddToCart}
              className={`p-2 rounded-[5px] border flex items-center justify-between text-sm ${
                alreadyAdded
                  ? " border-primary-600  hover:bg-primary-700 text-primary-600 hover:text-white duration-300"
                  : "text-gray-700 hover:text-white bg-gray-100 hover:bg-primary-600 duration-300"
              }`}
            >
              {alreadyAdded ? "View in Cart" : "Add to Cart"}
              {alreadyAdded ? <FiArrowRight /> : <AiOutlinePlus />}
            </button>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProductCard;
