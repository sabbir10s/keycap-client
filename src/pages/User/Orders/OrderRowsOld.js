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

            <div className='w-20 hidden lg:block'>
                <a href='#k'>Details</a>
            </div>
        </div >
    );
};

export default OrderRowsOld;

