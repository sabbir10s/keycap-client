import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, image, description, price } = product;
    const navigate = useNavigate()
    const handlePurchase = () => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className='border border-primary hover:shadow-xl hover:bg-neutral flex flex-col justify-between'>
            <div className='flex justify-center items-center w-[300px] h-300px'>
                <img className=' px-5 pt-5 cover' src={image} alt="" />
            </div>
            <div className='p-5'>

                <p className='text-2xl font-bold'>{name}</p>
                <p><small>{description.slice(0, 100)}</small></p>
                <p>Price: <span className='text-primary font-bold'>${price}</span></p>
            </div>
            <button onClick={() => handlePurchase(_id)} className='w-full btn btn-primary border border-primary rounded-none'>Book Now</button>
        </div>
    );
};

export default ProductCard;