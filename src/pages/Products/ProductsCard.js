import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const { _id, name, image, price } = product;
    const navigate = useNavigate()
    const handlePurchase = () => {
        navigate(`/product/${_id}`)
    }
    return (
        <div>
            <button onClick={() => handlePurchase(_id)} htmlFor='my-modal-4' className='border border-primary rounded-lg shadow-lg shadow-base-300/60  w-full duration-150 hover:scale-110 cursor-pointer'>
                <div className='grid grid-row-2 p-2 md:p-5'>
                    <div className='flex justify-center items-center h-[140px]'>
                        <img className='h-[100px] md:h-[130px]' src={image} alt="" />
                    </div>
                    <div className='h-[80px] flex items-center'>
                        <div>
                            <p className='font-bold text-left text-sm lg:text-lg mb-1'>{name}</p>
                            <p className='text-primary text-xl text-left font-bold'>${price}</p>
                        </div>
                    </div>
                </div>
                <button className='w-full bg-primary text-base-100 py-1 rounded-b-lg'>View Details</button>
            </button>
        </div>
    );
};

export default ProductCard;