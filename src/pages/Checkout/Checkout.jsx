import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useQuery } from "react-query";
import { Link, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import auth from "../../firebase.init";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useCartContext } from "../../context/CartContext";
import Button from "../../shared/Button/Button";
import FormatePrice from "../../helper/FormatePrice";
import CheckoutItem from "../../components/Checkout/CheckoutItem";
import InputField from "../../shared/InputField/InputField";
import PaymentMethod from "../../components/Checkout/PaymentMethod";
import Footer from "../../components/Footer";

const Checkout = () => {
  const { cart, total_price, shipping_fee } = useCartContext();

  // const handlePlaceOrder = event => {
  //     event.preventDefault();
  //     const image = product.image
  //     const name = event.target.name.value;
  //     const email = event.target.email.value;
  //     const phone = event.target.phone.value;
  //     const address = event.target.address.value;
  //     const productName = product.name;
  //     const quantity = event.target.quantity.value;
  //     const price = product.price;
  //     const totalPrice = parseInt(quantity) * product?.price;
  //     const status = 'pending'
  //     const orderInfo = { name, image, email, phone, address, productName, price, quantity, totalPrice, status };

  //     const url = `https://nexiq-server.vercel.app/order`;

  //     fetch(url, {
  //         method: 'POST',
  //         body: JSON.stringify(orderInfo),
  //         headers: {
  //             'content-type': 'application/json',
  //             authorization: `Bearer ${localStorage.getItem('accessToken')}`
  //         },
  //     })
  //         .then((res) => {
  //             if (res.status === 401 || res.status === 403) {
  //                 signOut(auth);
  //                 localStorage.removeItem('accessToken');
  //                 navigate('/')
  //             }
  //             return res.json()
  //         })
  //         .then((data) => {
  //             event.target.reset();
  //             toast.success("Your Booking Successful")
  //             navigate('/dashboard')
  //         });
  // }

  return (
    <div>
      <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className=" text-base md:text-xl lg:text-3xl font-semibold mt-6">
          Checkout
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-8 pb-16 ">
          <div className="lg:col-span-3">
            <form
              onSubmit={(e) => e.preventDefault()}
              action="#"
              className="space-y-5"
            >
              <div className="bg-white rounded-xl p-5">
                <h3 className="text-xl mb-5 font-semibold">
                  1. Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <InputField
                    label="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                  />
                  <InputField
                    label="Mobile"
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                  />
                  <InputField
                    label="Email"
                    type="email"
                    placeholder="Email"
                    name="email"
                  />
                </div>
              </div>{" "}
              {/*  */}
              <div className="bg-white rounded-xl p-5">
                <h3 className="text-xl mb-5 font-semibold">
                  2. Shipping Address
                </h3>
                <div>
                  <InputField
                    label="Street Address"
                    type="text"
                    placeholder="Street Address"
                    name="streetAddress"
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <InputField
                      label="City"
                      type="text"
                      placeholder="City"
                      name="city"
                    />
                    <InputField
                      label="Zip Code"
                      type="number"
                      placeholder="Zip Code"
                      name="zip"
                    />
                  </div>
                </div>
              </div>
              <PaymentMethod />
              {/*  */}
            </form>
          </div>

          {cart.length > 0 ? (
            <div className=" relative lg:col-span-2 ">
              <div className="w-full h-full flex flex-col justify-between p-3 bg-white rounded-xl">
                <div className="overflow-y-scroll h-80">
                  {cart.map((item) => (
                    <CheckoutItem item={item} key={item._id} />
                  ))}
                </div>
                <div className=" space-y-5   lg:py-3 ">
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-base">Subtotal:</p>
                    <p className="text-gray-700 font-semibold text-xl">
                      <FormatePrice price={total_price} />
                    </p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-base">Tax:</p>
                    <p className="text-gray-700 font-semibold text-xl">$0.00</p>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="text-gray-600 text-base">Shipping:</p>
                    <p className="text-gray-700 font-semibold text-xl">
                      <FormatePrice price={shipping_fee} />
                    </p>
                  </div>
                  <hr className="" />
                  <div className="flex justify-between items-center">
                    <p className="text-black font-medium text-base">Total:</p>
                    <p className="text-primary-600 font-bold text-xl">
                      <FormatePrice price={total_price + shipping_fee} />
                    </p>
                  </div>
                  <Link className="block mt-[20px]" to="/orders/12651564asdf">
                    <Button category="primary" className="w-full">
                      Place Order
                    </Button>
                  </Link>{" "}
                </div>
              </div>
            </div>
          ) : (
            <div className=" relative lg:col-span-2">
              <div className="p-32 text-secondary-600">
                <p className="mb-10"> Please Add to Cart Your Product</p>
                <Link to="/categories">
                  <Button category="primary">Continue Shipping</Button>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
