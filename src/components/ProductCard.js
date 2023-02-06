import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Fade } from 'react-reveal';
import { AiOutlineHeart, AiFillHeart, AiOutlineShopping, AiOutlineEye } from 'react-icons/ai';
import './ProductCard.css'

const BestProductsCard = ({ product }) => {
    const { _id, name, image, price } = product;
    const navigate = useNavigate()
    const handlePurchase = () => {
        navigate(`/product/${_id}`)
    }
    return (
        <div>
            <Fade bottom>
                <div className='cursor-pointer w-full border-[1px] border-base-200 p-2 rounded-[5px] group'>
                    <div className='flex flex-col p-2 relative'>
                        <button onClick={() => handlePurchase(_id)}>
                            <div className='flex justify-center items-center h-[200px]'>
                                <img className='w-[180px]' src={image} alt="" />
                            </div>
                            <div className='h-[80px] flex items-center'>
                                <div>
                                    <p className='font-bold text-left text-sm lg:text-lg mb-1'>{name}</p>
                                    <p className='text-primary text-xl text-left font-bold'>${price}</p>
                                </div>
                            </div>
                        </button>
                        <div className='absolute right-0 flex flex-col gap-3 m-4 '>
                            <a className='text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block' href="#"><AiOutlineHeart /></a>
                            <a className='text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block' href="#"><AiOutlineShopping /></a>
                            <a className='text-base-300/50 border-[1px] border-base-300/50 p-2 rounded-[5px] hidden group-hover:block' href="#"><AiOutlineEye /></a>
                        </div>
                    </div>
                </div>
            </Fade>
        </div>
    );
};

export default BestProductsCard;