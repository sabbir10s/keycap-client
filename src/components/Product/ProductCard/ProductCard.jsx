/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Fade } from "react-reveal";
import { AiOutlineHeart, AiOutlineShopping, AiFillHeart } from "react-icons/ai";
import FormatePrice from "../../../helper/FormatePrice";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const { _id, name, image, price } = product;
  const navigate = useNavigate();
  const handleProductDetails = () => {
    navigate(`/product/${_id}`);
  };
  return (
    <div>
      <Fade bottom>
        <div className="w-full p-2 border/50 rounded-[5px] group bg-white shadow-sm">
          <div className="flex flex-col p-2 relative">
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
            <div className="absolute right-0 flex flex-col gap-3 m-4 ">
              <button
                onClick={() => setWishlist(!wishlist)}
                className="text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block hover:bg-primary-700 hover:text-white duration-300"
                href="#"
              >
                {!wishlist && <AiOutlineHeart />}
                {wishlist && <AiFillHeart className="text-[#FF5555]" />}
              </button>
              <a
                className="text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block hover:bg-primary-700 hover:text-white duration-300"
                href="#"
              >
                <AiOutlineShopping />
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default ProductCard;
