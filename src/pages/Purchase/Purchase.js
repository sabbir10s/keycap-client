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
        fetch(`https://quiet-fjord-62553.herokuapp.com/product/${id}`).then(res =>
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
        const name = event.target.name.value;
        const email = event.target.email.value;
        const phone = event.target.phone.value;
        const address = event.target.address.value;
        const productName = product.name;
        const quantity = event.target.quantity.value;
        const price = event.target.price.value;
        const totalPrice = parseInt(quantity) * product?.price;
        const orderInfo = { name, email, phone, address, productName, price, quantity, totalPrice };

        const url = `https://quiet-fjord-62553.herokuapp.com/order`;

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
            });
    }

    console.log(product);
    const { name, image, description, minOrder, quantity, price } = product;
    return (
        <div className='bg-base-200 lg:py-5 md:py-5 lg:h-screen'>
            <div className=' lg:mx-12  grid grid-cols-1 lg:grid-cols-3 md:gap-10'>
                <div className='col-span-2 bg-base-100 rounded-xl shadow-xl lg:p-10 p-5'>
                    <div className=' grid md:grid-cols-2 gap-5'>
                        <div className='min:h-[300px] flex justify-center items-center'>
                            <img className='' src={image} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl mb-5'>{name} </p>
                            <p className='text-primary text-xl font-bold'>Price: {price} </p>
                            <p className='text-secondary'>Available Stock: {quantity} </p>
                            <p className='text-secondary'>Minimum Order: {minOrder} </p>

                        </div>

                    </div>
                    <div>
                        <p className='font-bold mt-5'>Product Description</p>
                        <p className='text-base-300'>{description} </p>
                    </div>
                </div>
                <div className='bg-base-100 shadow-xl rounded-xl col-span-1 p-5'>
                    <h3 className='text-2xl'>Booking Details</h3>
                    <div className='mt-3'>
                        <form onSubmit={handlePlaceOrder} className='text-md'>
                            <div>
                                <input className='border border-primary pl-3 py-2 rounded-md w-full mt-1' type="text" name="name" value={user.displayName} disabled id="" />
                            </div>
                            <div className='mt-3'>

                                <input className='border border-primary pl-3 py-2 rounded-md w-full mt-1' type="email" name="email" value={user.email} disabled id="" />
                            </div>
                            <div className='mt-3'>

                                <input className='border border-primary pl-3 py-2 rounded-md w-full mt-1' type="number" name="phone" placeholder='Phone' required id="" />
                            </div>
                            <div className='mt-3'>

                                <textarea className='border border-primary pl-3 py-2 rounded-md w-full mt-1' name="address" placeholder='Address' id="" cols="10" rows="3" required></textarea>
                            </div>

                            <div className='mt-3 text-secondary'>
                                <span>Price: $<input type="number" name="price" value={price} disabled id="" />
                                </span>

                            </div>

                            <span className='text-secondary mr-4'>Quantity</span>
                            <input onChange={orderQuantity} className='text-center border border-primary text-secondary rounded-md mt-3 py-2' type="number" name="quantity" id="" required />

                            <button type='submit' disabled={newQuantity.quantity < minOrder || newQuantity.quantity > quantity} className='btn btn-primary block mt-3'>Place Your Booking</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;