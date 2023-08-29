import React from "react";

import { useNavigate } from "react-router-dom";

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
        <img className="w-[400px]" src={image} alt="" />
      </div>
      <div className="flex items-center text-left">
        <div>
          <p className="text-4xl font-bold text-primary">{name}</p>
          <small className="bg-success/20 font-bold tracking-wider inline-block px-2 rounded-full mb-4 mt-2">
            <span className="text-success">Stock:</span>{" "}
            <span className="text-error">{quantity}</span>
          </small>
          <p className="text-sm">{description}</p>
          <p className="text-secondary text-2xl font-bold py-3">${price}</p>

          <button
            onClick={handlePurchase}
            className="bg-primary shadow-md shadow-secondary/50 text-base-100 px-10 py-2 rounded my-5"
          >
            Order Now
          </button>

          <button onClick={handleProductDetails} className="text-secondary">
            More Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductQuickDetails;
