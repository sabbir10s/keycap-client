/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Fade } from "react-reveal";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineEye,
  AiFillHeart,
} from "react-icons/ai";
import FormatePrice from "../../helper/FormatePrice";
import ProductQuickDetails from "../ProductQuickDetails";
import Modal from "../../shared/Modal";

const ProductCartFullWidth = ({ product }) => {
  const [wishlist, setWishlist] = useState(false);
  const { name, image, price, description } = product;

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <div>
      <Fade bottom>
        <div className="w-full p-2 border/50 rounded-[5px] group bg-white shadow-sm border my-4">
          <div className="flex p-2 relative">
            <div className="grid grid-cols-3 items-center gap-4">
              <button
                onClick={openModal}
                className="flex justify-center items-center w-full"
              >
                <img
                  className="w-[180px] group-hover:scale-110 duration-300"
                  src={image}
                  alt=""
                />
              </button>
              <div className=" col-span-2 pr-10">
                <p className="text-left text-base lg:text-lg mb-1">{name}</p>
                <p className="text-sm text-gray-500">
                  {description.slice(0, 120)} ...
                </p>
                <div className="flex items-center space-x-1">
                  <p className="text-primary-700 text-lg md:text-xl lg:text-2xl text-left font-bold">
                    <FormatePrice price={price} />
                  </p>
                  <del className="text-gray-400">$106.06</del>
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

              <button
                onClick={openModal}
                className="text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block hover:bg-primary-700 hover:text-white duration-300"
                href="#"
              >
                <AiOutlineEye />
              </button>
            </div>
          </div>
        </div>
      </Fade>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ProductQuickDetails product={product} />
      </Modal>
    </div>
  );
};

export default ProductCartFullWidth;
