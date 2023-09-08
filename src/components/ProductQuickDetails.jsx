import React from "react";

import { useNavigate } from "react-router-dom";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const ProductQuickDetails = ({ product }) => {
  const navigate = useNavigate();
  const { _id, name, image, price, description, quantity } = product;

  const handlePurchase = () => {
    navigate(`/purchase/${_id}`);
  };

  const handleProductDetails = () => {
    navigate(`/product/${_id}`);
  };

  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex justify-center items-center">
        <img className="w-300 md:w-400" src={image} alt="" />
      </div>
      <div className="flex items-center text-left">
        <div>
          <p className="text-xl lg:text-4xl font-bold text-primary-700">
            {name}
          </p>
          <small className="bg-success/20 font-bold  inline-block px-2 rounded-full mb-4 mt-2">
            <span className="text-success">Stock:</span>{" "}
            <span className="text-error">{quantity}</span>
          </small>
          <p className="text-sm lg:text-base">{description}</p>
          <p className="text-secondary-500 text-2xl font-bold py-3">${price}</p>

          <div className="flex items-center justify-between">
            <div className="text-xl rounded-lg border inline-block px-4 py-2">
              <div className="flex items-center space-x-8">
                <button>
                  <AiOutlineMinus />
                </button>
                <span>{1}</span>
                <button>
                  <AiOutlinePlus />
                </button>
              </div>
            </div>
            <button
              onClick={handlePurchase}
              className="bg-primary-700 shadow-md shadow-secondary/50 text-gray-100 px-10 py-2 rounded my-2"
            >
              Order Now
            </button>
          </div>

          <button onClick={handleProductDetails} className="text-secondary-500">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickDetails;
