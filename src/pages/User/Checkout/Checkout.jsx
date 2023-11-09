import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { useCartContext } from "../../../context/CartContext";
import auth from "../../../firebase.init";
import InputFields from "../../Admin/AddProduct/InputFields";
import InputField from "../../../shared/InputField/InputField";
import PaymentMethod from "../../../components/Checkout/PaymentMethod";
import CheckoutItem from "../../../components/Checkout/CheckoutItem";
import FormatePrice from "../../../helper/FormatePrice";
import Button from "../../../shared/Button/Button";
import Footer from "../../../components/Footer";

const Checkout = () => {
  const navigate = useNavigate();
  const { cart, total_price, shipping_fee, clearCart } = useCartContext();
  const [paymentMethod, setPaymentMethod] = useState("cash");
  const paymentStatus = paymentMethod === "cash" ? true : false;
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    streetAddress: "",
    city: "",
    zip: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Get current date
  const options = { day: "numeric", month: "long", year: "numeric" };
  const currentDate = new Date();

  const formattedDate = currentDate.toLocaleDateString(undefined, options);

  const handlePlaceOrder = (e) => {
    e.preventDefault();
    const orderData = {
      email: formData.email,
      customer: {
        name: formData.name,
        mobile: formData.mobile,
        streetAddress: formData.streetAddress,
        city: formData.city,
        zip: formData.zip,
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
        authorization: `Bearer ${localStorage.getItem("accessToken")}`,
      },
    })
      .then((res) => {
        if (res.status === 401 || res.status === 403) {
          signOut(auth);
          localStorage.removeItem("accessToken");
          navigate("/");
        }
        return res.json();
      })
      .then((data) => {
        e.target.reset();
        toast.success("Your Order Successful");
        navigate("/dashboard");
        clearCart();
      });
  };

  return (
    <div>
      <div className=" max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
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
                  <InputFields
                    onChange={handleInputChange}
                    label="Name"
                    type="text"
                    placeholder="Name"
                    name="name"
                    required={true}
                  />
                  <InputField
                    onChange={handleInputChange}
                    label="Mobile"
                    type="number"
                    placeholder="Mobile"
                    name="mobile"
                    required={true}
                  />
                  <InputField
                    onChange={handleInputChange}
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
                    onChange={handleInputChange}
                    label="Street Address"
                    type="text"
                    placeholder="Street Address"
                    name="streetAddress"
                    required={true}
                  />

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    <InputField
                      onChange={handleInputChange}
                      label="City"
                      type="text"
                      placeholder="City"
                      name="city"
                      required={true}
                    />
                    <InputField
                      onChange={handleInputChange}
                      label="Zip Code"
                      type="number"
                      placeholder="Zip Code"
                      name="zip"
                      required={true}
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
                  <Button category="primary" className="w-full" type="submit">
                    Place Order
                  </Button>
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
