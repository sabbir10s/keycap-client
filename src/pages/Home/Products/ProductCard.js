import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, image, description, price } = product;
    const navigate = useNavigate()
    const handlePurchase = () => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className='border border-primary hover:shadow-xl hover:bg-neutral flex flex-col justify-between h-[400px]'>
            <div><img className='w-[300px] px-5 pt-5' src={image} alt="" /></div>
            <div className='p-5'>

                <p className='text-2xl font-bold'>{name}</p>
                <p><small>{description.slice(0, 100)}</small></p>
                {/* <p>Minimum Order: {minOrder}</p>
                <p>Available Quantity: {quantity}</p> */}
                <p>Price: <span className='text-primary font-bold'>{price}</span></p>
            </div>
            <button onClick={() => handlePurchase(_id)} className='w-full btn btn-primary rounded-none'>Book Now</button>
        </div>
    );
};

export default ProductCard;