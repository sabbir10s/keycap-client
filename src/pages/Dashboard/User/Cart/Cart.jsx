import React from "react";
import { useCartContext } from "../../../../context/CartContext";
import CartItem from "./CartItem";
import Button from "../../../../shared/Button/Button";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart } = useCartContext();
  return (
    <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className=" text-base md:text-xl lg:text-3xl font-semibold  mb-[15px] lg:mb-[32px] mt-2">
        Your Cart
      </h2>
      {cart.length ? (
        <div className="h-screen">
          <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8 mt-4">
            <div className=" col-span-3 bg-[#F9FAFB] rounded-[10px] shadow-custom">
              <div className="hidden lg:block">
                <div className="grid grid-cols-7 mx-[7px] font-semibold py-5 uppercase text-[12px] ">
                  <h1 className="col-span-3">Product</h1>
                  <h1 className="text-center">Unite Price</h1>
                  <h1 className=" text-center">Quantity</h1>
                  <h1 className="text-center">Total</h1>
                  <h1 className="text-center">Remove</h1>
                </div>
              </div>
              <div>
                {cart.map((item) => (
                  <CartItem key={item._id} item={item} />
                ))}
              </div>
            </div>
            <div className="relative grid-cols-1 w-full mt-[20px] lg:mt-0">
              <div className="lg:absolute space-y-5 top-0 left-0 w-full h-auto  lg:py-3 lg:px-4 lg:shadow-custom lg:border lg:rounded-lg">
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-[14px]">Subtotal:</p>
                  <p className="text-gray-700 font-semibold text-[16px]">
                    ${}.00
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-[14px]">Tax:</p>
                  <p className="text-gray-700 font-semibold text-[16px]">
                    $0.00
                  </p>
                </div>
                <div className="flex justify-between items-center">
                  <p className="text-gray-600 text-[14px]">Shipping:</p>
                  <p className="text-gray-700 font-semibold text-[16px]">
                    ${}.00
                  </p>
                </div>
                <hr className="" />
                <div className="flex justify-between items-center">
                  <p className="text-black font-medium text-[14px]">Total:</p>
                  <p className="text-primary-600 font-bold text-[16px]">
                    ${}.00
                  </p>
                </div>
                <Link className="mt-[20px] block" to="/checkout">
                  <Button className="w-full">Check out</Button>
                </Link>{" "}
              </div>
            </div>
          </div>
          {/* shipping button */}
          <div className="mt-14 text-center lg:text-left">
            <Link to="/products" className="hidden lg:block">
              <Button>Continue Shopping</Button>
            </Link>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-8 h-screen">
          <img
            className="w-[200px]"
            src="https://cdni.iconscout.com/illustration/free/thumb/free-empty-cart-4085814-3385483.png"
            alt=""
          />
          <div className="text-center">
            <h2 className="text-xl text-gray-500 font-semibold mb-6">
              Your cart is empty!
            </h2>
            <Link
              className="border border-primary-600 text-primary-600 hover:text-white hover:bg-primary-600 text-xl px-4 py-1 rounded "
              to="/products"
            >
              SHOP NOW
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
