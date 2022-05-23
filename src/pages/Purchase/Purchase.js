import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';
import auth from '../../firebase.init';

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
        console.log(newQuantity);
    };

    const handlePlaceOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const name = event.target.name.value;
        const email = event.target.email.value;
        console.log(quantity, name, email);
    }

    const { name, image, description, minOrder, quantity, price } = product;
    return (
        <div className='bg-base-200 h-screen'>
            <div className=' mx-12 mt-6  grid grid-cols-1 lg:grid-cols-3 gap-10'>
                <div className='col-span-2 bg-base-100 rounded-xl p-10'>
                    <div className=' grid grid-cols-2 gap-5'>
                        <div className='h-[200px] flex justify-center items-center'>
                            <img className='w-[300px]' src={image} alt="" />
                        </div>
                        <div>
                            <p className='text-3xl mb-5'>{name} </p>
                            <p className='text-primary text-xl font-bold mb-5'>Price: {price} </p>
                            <p>Available Stock: {quantity} </p>
                            {/* <p>Minimum Order: {minOrder} </p> */}

                        </div>

                    </div>
                    <div>
                        <p>Product Description</p>
                        <p>{description} </p>
                    </div>
                </div>
                <div className='bg-base-100 rounded-xl col-span-1 pl-5 py-10'>
                    <h3 className='text-2xl mb-3'>Your Details</h3>
                    <div className='mt-5'>
                        <form onSubmit={handlePlaceOrder}>
                            <div>
                                <small className='text-base-300 block'>Name</small>
                                <input type="text" name="name" value={user.displayName} disabled id="" />
                            </div>
                            <div className='mt-3'>
                                <small className='text-base-300 block'>email</small>
                                <input type="email" name="email" value={user.email} disabled id="" />
                            </div>
                            <div className='mt-3'>
                                <small className='text-base-300 block'>Phone Number</small>
                                <input type="email" name="email" value={user.email} disabled id="" />
                            </div>
                            <div className='mt-3'>
                                <small className='text-base-300 block'>Address</small>
                                <input type="email" name="email" value={user.email} disabled id="" />
                            </div>

                            <span className='text-secondary block font-bold mt-3'>Add Your Quantity</span>
                            <input onChange={orderQuantity} className='text-center border border-primary text-secondary rounded-md mt-3 py-2' type="number" name="quantity" id="" />

                            <button type='submit' disabled={newQuantity.quantity < minOrder || newQuantity.quantity > quantity} className='btn btn-primary block mt-3'>Place Your Order</button>
                        </form>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Purchase;