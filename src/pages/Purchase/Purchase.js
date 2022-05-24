import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const Purchase = () => {
    const [user] = useAuthState(auth);

    const { id } = useParams()
    const { isLoading, data: product } = useQuery('product', () =>
        fetch(`http://localhost:5000/product/${id}`).then(res =>
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
        const quantity = event.target.quantity.value;
        const costAmount = parseInt(quantity) * product?.price;
        const bookingInfo = { name, email, phone, address, quantity, costAmount };

        const url = `http://localhost:5000/booking`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(bookingInfo),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                event.target.reset();
                toast.success("Your Booking Successful")
            });
    }

    const { name, image, description, minOrder, quantity, price } = product;
    return (
        <div className='bg-base-200 py-10'>
            <div className=' mx-12  grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='col-span-2 bg-base-100 rounded-xl p-10'>
                    <div className=' grid grid-cols-2 gap-5'>
                        <div className='h-[200px] flex justify-center items-center'>
                            <img className='w-[300px]' src={image} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl mb-5'>{name} </p>
                            <p className='text-primary text-xl font-bold'>Price: {price} </p>
                            <p className='text-base-300'>Available Stock: {quantity} </p>
                            <p className='text-base-300'>Minimum Order: {minOrder} </p>

                        </div>

                    </div>
                    <div>
                        <p className='font-bold'>Product Description</p>
                        <p className='text-base-300'>{description} </p>
                    </div>
                </div>
                <div className='bg-base-100 rounded-xl col-span-1 p-5'>
                    <h3 className='text-2xl'>Your Details</h3>
                    <div className='mt-3'>
                        <form onSubmit={handlePlaceOrder}>
                            <div>
                                <small className='text-base-300 block'>Name</small>
                                <input className='border border-primary pl-2 py-1 rounded-md w-full mt-1' type="text" name="name" value={user.displayName} disabled id="" />
                            </div>
                            <div className='mt-3'>
                                <small className='text-base-300 block'>email</small>
                                <input className='border border-primary pl-2 py-1 rounded-md w-full mt-1' type="email" name="email" value={user.email} disabled id="" />
                            </div>
                            <div className='mt-3'>
                                <small className='text-base-300 block'>Phone Number</small>
                                <input className='border border-primary pl-2 py-1 rounded-md w-full mt-1' type="phone" name="phone" placeholder='Phone' required id="" />
                            </div>
                            <div className='mt-3'>
                                <small className='text-base-300 block'>Address</small>
                                <textarea className='border border-primary pl-2 py-1 rounded-md w-full mt-1' name="address" placeholder='Address' id="" cols="10" rows="2" required></textarea>
                            </div>

                            <span className='text-secondary block font-bold mt-3'>Add Your Quantity</span>
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