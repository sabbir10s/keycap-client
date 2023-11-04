import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';
import { useCartContext } from '../../context/CartContext';
import Button from '../../shared/Button/Button';
import FormatePrice from '../../helper/FormatePrice';
import CheckoutItem from '../../components/Checkout/CheckoutItem';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
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

    // const { name, image, quantity, price } = product;
    return (
        <div>
            <div className=' max-w-[1400px] mx-auto lg:px-20 flex justify-center py-4'>
                <div className="container">
                    <h2 className=" text-2xl lg:text-5xl font-semibold mt-4 ">Checkout</h2>
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 mt-6 ">
                        <div className="lg:col-span-3">
                            <form onSubmit={(e) => e.preventDefault()} action="#" className="space-y-5">
                                <div className='bg-white rounded-xl p-5'>
                                    <h3 className="text-xl mb-5 font-semibold">1. Contact Information</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="text"
                                                placeholder="First Name"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="text"
                                                placeholder="Last Name"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="number"
                                                placeholder="Phone"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="email"
                                                placeholder="Email"
                                            />
                                        </div>
                                    </div>
                                </div>{" "}
                                {/*  */}
                                <div className='bg-white rounded-xl p-5'>
                                    <h3 className="text-xl mb-5 font-semibold">2. Shipping Address</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <textarea
                                                rows={1}
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="text"
                                                placeholder="Address"
                                            />
                                        </div>
                                        <div>
                                            <select
                                                className="px-4 py-3 border-gray-100 text-gray-500 rounded w-full focus:border-primary-600 outline-none border"
                                                name="city"
                                                id="city"
                                            >
                                                <option value="City">City</option>
                                                <option value="Mumbai">Mumbai</option>
                                                <option value="Khulna">Khulna</option>
                                                <option value="Comilla">Comilla</option>
                                            </select>
                                        </div>
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="number"
                                                placeholder="Zip Code"
                                            />
                                        </div>
                                    </div>
                                </div>
                                {/*  */}
                                <div className='bg-white rounded-xl p-5'>
                                    <h3 className="text-xl mb-5 font-semibold">3. Payment Method</h3>
                                    <div className="mb-5 space-y-5">
                                        <div className="w-full flex space-x-2 justify-between">
                                            <button className="focus:border-primary-600 border-2 rounded-lg">
                                                <img className='w-[100px]' src='https://icons.veryicon.com/png/o/miscellaneous/template-3/payment-method-1.png' alt="" />
                                            </button>{" "}
                                        </div>
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="text"
                                                placeholder="Name On Card"
                                            />
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="number"
                                                placeholder="Card Number"
                                            />
                                        </div>
                                        <div>
                                            <input
                                                className="px-4 py-3 border-gray-100 rounded w-full focus:border-primary-600 outline-none border"
                                                type="number"
                                                placeholder="CVV"
                                            />
                                        </div>
                                        <div>
                                            <select
                                                className="px-4 py-3 border-gray-100 text-gray-500 rounded w-full focus:border-primary-600 outline-none border"
                                                name="month"
                                                id="month"
                                            >
                                                <option value="City">Month</option>
                                                <option value="January">January</option>
                                                <option value="February">February</option>
                                                <option value="March">March</option>
                                                <option value="April">April</option>
                                                <option value="May">May</option>
                                                <option value="Jun">Jun</option>
                                                <option value="July">July</option>
                                                <option value="August">August</option>
                                                <option value="September">September</option>
                                                <option value="October">October</option>
                                                <option value="November">November</option>
                                                <option value="December">December</option>
                                            </select>
                                        </div>{" "}
                                        <div>
                                            <select
                                                className="px-4 py-3 border-gray-100 text-gray-500 rounded w-full focus:border-primary-600 outline-none border"
                                                name="year"
                                                id="year"
                                            >
                                                <option value="City">Year</option>
                                                <option value="2023">2023</option>
                                                <option value="2022">2022</option>
                                                <option value="2021">2021</option>
                                                <option value="2020">2020</option>
                                                <option value="2019">2019</option>
                                                <option value="2018">2018</option>
                                                <option value="2017">2017</option>
                                                <option value="2016">2016</option>
                                                <option value="2015">2015</option>
                                                <option value="2014">2014</option>
                                                <option value="2013">2013</option>
                                                <option value="2012">2012</option>s<option value="2011">2011</option>
                                                <option value="2010">2010</option>
                                                <option value="2009">2009</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>{" "}
                            </form>
                        </div>
                        {cart.length > 0 ? (
                            <div className=" relative lg:col-span-2 ">
                                <div className="w-full p-3 bg-white rounded-xl">
                                    {cart.map((item) => <CheckoutItem item={item} key={item._id} />)}
                                    <div className="lg:mt-32 mt-5">
                                        <div className=" space-y-5   lg:py-3 ">
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-600 text-base">Subtotal:</p>
                                                <p className="text-gray-700 font-semibold text-xl"><FormatePrice price={total_price} /></p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-600 text-base">Tax:</p>
                                                <p className="text-gray-700 font-semibold text-xl">$0.00</p>
                                            </div>
                                            <div className="flex justify-between items-center">
                                                <p className="text-gray-600 text-base">Shipping:</p>
                                                <p className="text-gray-700 font-semibold text-xl"><FormatePrice price={shipping_fee} /></p>
                                            </div>
                                            <hr className="" />
                                            <div className="flex justify-between items-center">
                                                <p className="text-black font-medium text-base">Total:</p>
                                                <p className="text-primary-600 font-bold text-xl"><FormatePrice price={total_price + shipping_fee} /></p>
                                            </div>
                                            <Link className="block mt-[20px]" to="/orders/12651564asdf">
                                                <Button category="primary" className='w-full' >Place Order</Button>
                                            </Link>{" "}
                                        </div>
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

            </div>
        </div>
    );
};

export default Purchase;