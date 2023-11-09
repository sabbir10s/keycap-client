import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmModal from './DeleteConfirmModal';
import FormatePrice from '../../../../helper/FormatePrice';
import { BsCheck } from 'react-icons/bs';

const OrderRowsOld = ({ order, refetch }) => {
    const [cancelOrder, setCancelOrder] = useState(null)
    const { productName, quantity, price, totalPrice, paid, image, transactionId, status } = order
    console.log(status);
    return (
        <div
            className="mb-12 md:mb-0 py-2 border-b flex flex-col md:flex-row items-center justify-between gap-4"
        >
            <div className="w-full md:w-1/2">
                <div className='max-w-[120px]'>
                    <img
                        className="w-full object-fill"
                        src={image}
                        alt=""
                    />
                </div>
            </div>
            <div className='w-full'>
                <h2 className='text-xl'>{productName}</h2>
                <p>
                    <FormatePrice price={totalPrice} />
                </p>
                <span className='text-green-400'>{status} </span>

            </div>
            <div className='flex items-center w-full'>
                <div className={status === 'pending' || 'confirmed' || 'delivered' ? "w-20 h-[2px] bg-green-500" : ""}></div>
                <div className='relative'>
                    <span className='absolute top-4 left-[-15px] text-xs text-gray-500'>Pending</span>
                    {
                        status === 'pending' && <BsCheck className=' absolute text-white' />
                    }
                    <div className='bg-green-500 w-4 h-4 rounded-full '></div>
                </div>
                <div className={status === 'confirmed' || 'delivered' ? "w-20 h-[2px] bg-green-500" : "w-20 h-[2px] bg-gray-400"}></div>

                <div className='relative'>
                    <span className='absolute top-4 left-[-15px] text-xs text-gray-500'>Confirmed</span>
                    {
                        status === 'confirmed' && <BsCheck className=' absolute text-white' />
                    }
                    <div className='bg-green-500 w-4 h-4 rounded-full '></div>
                </div>

                <div className={status === 'delivered' ? "w-20 h-[2px] bg-green-500" : "w-20 h-[2px] bg-gray-400"}></div>

                <div className='relative'>
                    <span className='absolute top-4 left-[-15px] text-xs text-gray-500'>Delivered</span>
                    {
                        status === 'delivered' && <BsCheck className=' absolute text-white' />
                    }
                    <div className={status === 'delivered' ? 'bg-green-500 w-4 h-4 rounded-full' : "bg-gray-400 w-4 h-4 rounded-full"}></div>
                </div>

            </div>
            <div className='w-20 hidden lg:block'>
                <a href='#k'>Details</a>
            </div>
        </div >
    );
};

export default OrderRowsOld;

