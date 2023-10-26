import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import CartAmountToggle from "../../components/CartAmountToggle";
import { SecondaryButton } from "../../shared/Button/Button";

const API = "https://nexiq-server.vercel.app/product";

const ProductQuickDetails = () => {
  const { getSingleProduct, isSingleLoading, singleProduct } =
    useProductContext();
  const [amount, setAmount] = useState(1);

  const navigate = useNavigate();
  const { productId } = useParams();

  useEffect(() => {
    getSingleProduct(`${API}/${productId}`);
  }, []);

  if (isSingleLoading) {
    return <Loading />;
  }
  // const stock = 0;
  const { _id, name, image, price, description, company, stock } =
    singleProduct;

  const handlePurchase = () => {
    navigate(`/purchase/${_id}`);
  };

  const setDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    amount < stock ? setAmount(amount + 1) : setAmount(stock);
  };

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-screen">
      <div className="mt-6">
        <div className="grid lg:grid-cols-2 gap-3">
          <div className="flex justify-center items-center bg-white">
            <img className="w-[400px]" src={image} alt="" />
          </div>
          <div className=" space-y-3 bg-white p-6">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary-700">
              {name}
            </h2>
            <div className=" space-x-2">
              <p className=" bg-slate-400/30 rounded-full px-2 py-1.5 text-sm inline text-gray-400">
                Status:{" "}
                <span className="font-semibold text-black">
                  {stock ? "In Stock" : "	Out Of Stock"}
                </span>
              </p>
              <p className=" bg-slate-400/30 rounded-full px-2 py-1.5 text-sm inline text-gray-400">
                Brand:{" "}
                <span className="font-semibold text-black">{company}</span>
              </p>
            </div>
            <p className="text-secondary-500 text-2xl font-bold py-3">
              ${price}
            </p>
            <p className="text-sm">{description}</p>
            <CartAmountToggle
              amount={amount}
              setIncrease={setIncrease}
              setDecrease={setDecrease}
            />
            <div className=" space-x-6">
              <button
                onClick={handlePurchase}
                disabled={!stock}
                className={
                  stock
                    ? "bg-primary-700 border border-primary-700 shadow-md shadow-secondary/50 text-gray-100 px-10 py-2"
                    : "bg-gray-200 text-gray-500 px-10 py-2"
                }
              >
                {stock ? "Buy Now" : "Out Of Stock"}
              </button>

              {/* {stock ? <SecondaryButton>Add to Cart</SecondaryButton> : ""} */}
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductQuickDetails;
