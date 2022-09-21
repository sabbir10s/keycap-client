import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, image, price } = product;
    const navigate = useNavigate()
    const handlePurchase = () => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className='border border-primary rounded-lg shadow-lg shadow-base-300/60 flex flex-col justify-between duration-150 hover:scale-110 cursor-pointer'>
            <div className='flex justify-center items-center'>
                <img className=' px-5 pt-5 h-[100px] md:h-[130px]' src={image} alt="" />
            </div>
            <div className='p-3 my-3'>

                <p className=' text-sm md:text-lg font-bold'>{name}</p>
                <div className='text-lg md:text-xl mt-1'><span className='text-primary font-bold'>${price}</span></div>
            </div>
            <button onClick={() => handlePurchase(_id)} className='w-full bg-primary text-base-100 py-1 rounded-b-lg'>Book Now</button>
        </div>
    );
};

export default ProductCard;