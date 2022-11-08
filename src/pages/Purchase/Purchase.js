import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';
import { signOut } from 'firebase/auth';

const Purchase = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { id } = useParams()
    const { isLoading, data: product } = useQuery('product', () =>
        fetch(`https://nexiq-server.onrender.com/product/${id}`).then(res =>
            res.json()
        )
    )
    const [newQuantity, setNewQuantity] = useState({
        quantity: product?.minOrder,
    })

    if (isLoading) {
        return <Loading />
    }

    const orderQuantity = event => {
        const { quantity, ...rest } = product.minOrder;
        const data = event.target.value;
        const update = { quantity: data, ...rest };
        setNewQuantity(update);

    };

    const handlePlaceOrder = event => {
        event.preventDefault();
        const image = product.image
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const productName = product.name;
        const quantity = event.target.quantity.value;
        const price = product.price;
        const totalPrice = parseInt(quantity) * product?.price;
        const orderInfo = { name, image, email, phone, address, productName, price, quantity, totalPrice };

        const url = `https://nexiq-server.onrender.com/order`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(orderInfo),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => {
                if (res.status === 401 || res.status === 403) {
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then((data) => {
                event.target.reset();
                toast.success("Your Booking Successful")
                navigate('/dashboard')
            });
    }

    console.log(product);
    const { name, image, quantity, price } = product;
    return (
        <div className='bg-base-200 md:py-5 h-screen'>
            <div className=' max-w-[1400px] mx-auto lg:px-20 flex justify-center'>
                <div className='bg-base-100 shadow-xl md:rounded-xl col-span-1 p-5 lg:w-1/2'>
                    <h3 className='text-2xl'>Order Details</h3>
                    <div className='flex flex-row gap-2 justify-between mt-5'>
                        <div className=' hidden md:block'>
                            <img className='w-[100px]' src={image} alt="" />
                        </div>

                        <div className='flex flex-col justify-center font-semibold'>
                            <table>
                                <tr>
                                    <td>
                                        <span className='text-primary'>{name} </span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <p className='text-base-300'>Price:  <span className='text-secondary'>${price} </span></p>
                                    </td>
                                </tr>
                            </table>
                        </div>

                        <table className='text-sm'>
                            <tr>
                                <td className='border border-primary px-2 py-1'>Available Stock</td>
                            </tr>
                            <tr>
                                <td className='border border-primary px-2 py-1 text-secondary'>{quantity}</td>
                            </tr>
                        </table>

                    </div>
                    <div className='mt-3 w-full'>
                        <form onSubmit={handlePlaceOrder}>
                            <div className='flex flex-col lg:flex-row gap-4'>
                                <div className='w-full'>
                                    <label htmlFor="name" className='text-sm'>Name</label>
                                    <input className='border pl-3 py-2 rounded-md w-full mt-1' type="text" name="name" value={user.displayName} disabled id="name" />
                                </div>
                                <div className='w-full'>
                                    <label htmlFor="email" className='text-sm'>Email</label>
                                    <input className='border pl-3 py-2 rounded-md w-full mt-1' type="email" name="email" value={user.email} disabled id="email" />
                                </div>
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="phone" className='text-sm'>Phone</label>
                                <input className='border pl-3 py-2 rounded-md w-full mt-1' type="number" name="phone" placeholder='Phone' required id="phone" />
                            </div>
                            <div className='mt-3'>
                                <label htmlFor="address" className='text-sm'>Address</label>
                                <textarea className='border pl-3 py-2 rounded-md w-full mt-1' name="address" placeholder='Address' id="address" cols="10" rows="1" required></textarea>
                            </div>

                            <div className='mt-3'>
                                <label className='text-sm'>Quantity</label>
                                <div className='flex justify-between flex-col lg:flex-row gap-5 mt-1'>
                                    <input onChange={orderQuantity} className='border border-primary pl-3 py-2 rounded-md w-full' type="number" name="quantity" id="" required />
                                    <button type='submit' disabled={newQuantity.quantity < 1 || newQuantity.quantity > quantity} className='bg-primary/90 text-base-100 px-5 py-3 shadow-md shadow-secondary hover:bg-primary duration-300 rounded-lg block disabled:bg-gray-300 disabled:shadow-none w-full'>Place Order</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;