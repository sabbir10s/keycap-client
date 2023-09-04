/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Fade } from "react-reveal";
import {
  AiOutlineHeart,
  AiOutlineShopping,
  AiOutlineEye,
  AiFillHeart,
  AiTwotoneEdit,
} from "react-icons/ai";
import "./ProductCard.css";
import Modal from "../shared/Modal";
import ProductQuickDetails from "./ProductQuickDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import useAdmin from "../hooks/useAdmin";
import auth from "../firebase.init";
import EditProduct from "./Product/EditProduct";

const ProductCard = ({ product }) => {
  const [user] = useAuthState(auth);
  const [admin] = useAdmin(user);
  const [wishlist, setWishlist] = useState(false);
  const { name, image, price } = product;

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
        <div className="w-full p-2 border/50 rounded-[5px] group bg-white shadow-sm">
          <div className="flex flex-col p-2 relative">
            <div>
              <button
                onClick={openModal}
                className="flex justify-center items-center h-[200px] w-full"
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
                    <p className="text-primary text-lg md:text-xl lg:text-2xl text-left font-bold">
                      ${price}
                    </p>
                    <del className="text-gray-400">$106.06</del>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute right-0 flex flex-col gap-3 m-4 ">
              {!admin && (
                <>
                  <button
                    onClick={() => setWishlist(!wishlist)}
                    className="text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block hover:bg-primary hover:text-white duration-300"
                    href="#"
                  >
                    {!wishlist && <AiOutlineHeart />}
                    {wishlist && <AiFillHeart className="text-[#FF5555]" />}
                  </button>
                  <a
                    className="text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block hover:bg-primary hover:text-white duration-300"
                    href="#"
                  >
                    <AiOutlineShopping />
                  </a>

                  <button
                    onClick={openModal}
                    className="text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block hover:bg-primary hover:text-white duration-300"
                    href="#"
                  >
                    <AiOutlineEye />
                  </button>
                </>
              )}

              {admin && (
                <label
                  for="my-modal-4"
                  className="modal-button modal-open cursor-pointer text-error border-[1px] border-error p-2 rounded-[5px] hidden group-hover:block hover:bg-primary hover:text-white duration-300"
                >
                  <AiTwotoneEdit />
                </label>
              )}
            </div>
          </div>
        </div>
      </Fade>
      <Modal isOpen={isOpen} onClose={closeModal}>
        <ProductQuickDetails product={product} />
      </Modal>
      <EditProduct product={product} />
    </div>
  );
};

export default ProductCard;
