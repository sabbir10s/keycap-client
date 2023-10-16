import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { useEffect } from "react";
import { useProductContext } from "../../context/ProductContext";
import PageNavigation from "../../components/PageNavigation";
import CartAmountToggle from "../../components/CartAmountToggle";

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
  const { _id, name, image, price, description, stock } = singleProduct;

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
    <div className="container mx-auto pt-6">
      <PageNavigation title={name} />
      <div>
        <div className="grid lg:grid-cols-2">
          <div className="flex justify-center items-center">
            <img className="w-[400px]" src={image} alt="" />
          </div>
          <div className="flex items-center">
            <div>
              <p className="text-4xl font-bold text-primary-700">{name}</p>
              <p className="text-secondary-500 text-2xl font-bold py-3">
                ${price}
              </p>

              <table>
                <tbody>
                  <tr>
                    <td className="border border-primary-700 px-2 py-1 text-sm font-medium">
                      Available Stock
                    </td>
                    <td className="border border-primary-700 px-8 py-1 text-secondary-500 text-sm">
                      {stock}
                    </td>
                  </tr>
                </tbody>
              </table>
              <CartAmountToggle
                amount={amount}
                setIncrease={setIncrease}
                setDecrease={setDecrease}
              />
              <button
                onClick={handlePurchase}
                className="bg-primary-700 shadow-md shadow-secondary/50 text-gray-100 px-10 py-2 rounded my-5"
              >
                Order Now
              </button>
              <p className="text-sm">{description}</p>
            </div>
          </div>
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default ProductQuickDetails;
