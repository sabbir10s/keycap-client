import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import auth from "../../../firebase.init";
import PaymentMethod from "../../../components/Checkout/PaymentMethod";
import CheckoutItem from "../../../components/Checkout/CheckoutItem";
import FormatePrice from "../../../helper/FormatePrice";
import Button from "../../../shared/Button/Button";
import Footer from "../../../components/Footer";
import { useCartContext } from "../../../context/CartContext";
import InputField from "../../../shared/InputField/InputField";
import { useAuthContext } from "../../../context/AuthContext";
import { useQuery } from "react-query";
import Loading from "../../../components/Loading";

const Checkout = () => {
  const { user } = useAuthContext();
  const email = user?.email;
  const navigate = useNavigate();
  const { cart, total_price, shipping_fee, clearCart } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const paymentStatus = paymentMethod === "cash" ? true : false;

  // Get current date
  const options = { day: "numeric", month: "long", year: "numeric" };
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const { isLoading, data: userData } = useQuery(["user", email], () =>
    fetch(`https://nexiq-server.vercel.app/user/${email}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    }).then((res) => {
      if (res.status === 401 || res.status === 403) {
        signOut(auth);
        localStorage.removeItem("access-token");
        navigate("/");
      }
      return res.json();
    })
  );

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const e = event.target;
    const orderData = {
      email: e.email.value,
      customer: {
        name: e.name.value,
        mobile: parseInt(e.mobile.value),
        streetAddress: e.streetAddress.value,
        city: e.city.value,
        zip: parseInt(e.zip.value),
      },
      items: cart,
      totalAmount: total_price,
      status: "pending",
      payment: {
        method: paymentMethod,
        status: paymentStatus,
      },
      date: formattedDate,
    };

    const url = `https://nexiq-server.vercel.app/user/order`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(orderData),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("access-token");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        event.target.reset();
        toast.success("Your Order Successful");
        navigate("/userDashboard");
        clearCart();
      });
  };
  if (isLoading) {
    return <Loading />;
  }
  const { name, mobile, streetAddress, city, zip } = userData;
  return (
    <div>
      <div className=" max-w-screen-xl mx-auto px-2 sm:px-4 lg:px-8">
        <h2 className=" text-base md:text-xl lg:text-3xl font-semibold mt-6">
          Checkout
        </h2>
        <form
          onSubmit={handlePlaceOrder}
          className="grid grid-cols-1 lg:grid-cols-5 gap-4 pt-8 pb-16 "
        >
          <div className="lg:col-span-3">
            <div className="space-y-5">
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
                    required={true}
                    defaultValue={name}
                  />
                  <InputField
                    label="Mobile"
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                    required={true}
                    defaultValue={mobile}
                  />
                  <InputField
                    defaultValue={email}
                    label="Email"
                    type="email"
                    placeholder="Email"
                    name="email"
                    required={true}
                  />
                </div>
              </div>
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
                    required={true}
                    defaultValue={streetAddress}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <InputField
                      label="City"
                      type="text"
                      placeholder="City"
                      name="city"
                      required={true}
                      defaultValue={city}
                    />
                    <InputField
                      label="Zip Code"
                      type="number"
                      placeholder="Zip Code"
                      name="zip"
                      required={true}
                      defaultValue={zip}
                    />
                  </div>
                </div>
              </div>
            </div>
            <PaymentMethod
              paymentMethod={paymentMethod}
              setPaymentMethod={setPaymentMethod}
            />
          </div>

          <div className=" relative lg:col-span-2 ">
            <div className="w-full h-full flex flex-col justify-between p-3 bg-white rounded-xl">
              <div className="lg:overflow-y-scroll lg:max-h-64">
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
                <div className="block mt-[20px]">
                  {cart.length ? (
                    <Button category="primary" className="w-full" type="submit">
                      Place Order
                    </Button>
                  ) : (
                    <Button
                      onclick={navigate("/products")}
                      className="w-full"
                      category="secondary"
                    >
                      Empty Cart! Add Product
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
