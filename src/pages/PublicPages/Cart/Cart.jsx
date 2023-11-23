import React from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { useCartContext } from "../../../context/CartContext";
import FormatePrice from "../../../helper/FormatePrice";
import Button from "../../../shared/Button/Button";
import Footer from "../../../components/Footer";
import CartItem from "../../../components/Cart/CartItem";
const Cart = () => {
  const { cart, total_price, shipping_fee } = useCartContext();
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <h2 className=" text-base md:text-xl lg:text-3xl font-semibold mt-6">
          Your Cart
        </h2>
        {cart.length ? (
          <div className="pb-14 pt-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 lg:gap-8">
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
                <div className="lg:absolute space-y-5 top-0 left-0 w-full h-auto p-4 lg:shadow-custom lg:border lg:rounded-lg bg-white">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-[14px]">Subtotal:</p>
                    <p className="text-gray-700 font-semibold text-[16px]">
                      <FormatePrice price={total_price} />
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-[14px]">Shipping:</p>
                    <p className="text-gray-700 font-semibold text-[16px]">
                      <FormatePrice price={shipping_fee} />
                    </p>
                  </div>
                  <hr className="" />
                  <div className="flex justify-between items-center">
                    <p className="text-black font-medium text-[14px]">Total:</p>
                    <p className="text-primary-600 font-bold text-[16px]">
                      <FormatePrice price={total_price + shipping_fee} />
                    </p>
                  </div>
                  <Link className="mt-[20px] block" to="/checkout">
                    <Button category="primary" type="button" className="w-full">
                      Check out
                    </Button>
                  </Link>{" "}
                </div>
              </div>
            </div>
            {/* shipping button */}
            <Link
              to="/products"
              className="border border-primary-600 text-primary-600 hover:text-secondary-500 hover:border-secondary-600 duration-300 px-3 py-2 flex items-center justify-center gap-1 w-[200px] ml-4 md:ml-0 mt-4"
            >
              <span> Continue Shopping</span> <BsArrowRight />
            </Link>
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
      <Footer />
    </div>
  );
};

export default Cart;
