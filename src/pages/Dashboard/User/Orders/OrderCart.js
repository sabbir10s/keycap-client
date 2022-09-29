import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DeleteConfirmModal from './DeleteConfirmModal';

const OrderCart = ({ order, refetch }) => {
    const [cancelOrder, setCancelOrder] = useState(null)
    const { productName, quantity, price, totalPrice, paid, image, transactionId } = order
    return (
        <div className='border shadow-lg shadow-base-300/30 p-5 rounded-lg'>
            <img className='w-20' src={image} alt="" />
            <h2 className='text-xl mb-2 text-primary'>{productName}</h2>
            <table className='w-full border'>
                <tr>
                    <td className='border text-sm font-bold p-1.5'>Price</td>
                    <td className='border text-sm font-bold p-1.5'>Quantity</td>
                    <td className='border text-sm font-bold p-1.5'>Total Price</td>
                </tr>
                <tr>
                    <td className='border text-sm p-1.5'>${price}</td>
                    <td className='border text-sm p-1.5'>{quantity}</td>
                    <td className='border text-sm p-1.5'>${totalPrice}</td>
                </tr>
            </table>
            <div>
                <div className='flex flex-col md:flex-row items-center gap-3 mt-3 text-sm'>
                    <div>
                        {!paid ?
                            <span className='text-error'>Not Payed! </span>
                            :
                            <span className='text-success'>Already Payed</span>
                        }
                    </div>
                    <div>
                        {!paid ? <div className='flex items-center gap-3'>
                            <Link to={`/dashboard/payment/${order._id}`} className='bg-primary text-white px-3 py-1.5 rounded-full shadow-md'>Please Pay</Link>
                            <div>Or</div>
                            <div>
                                <label onClick={() => setCancelOrder(order)} htmlFor="my-modal-4" className='bg-error text-white px-3 py-1.5 rounded-full shadow-md cursor-pointer'>Cancel Order</label>
                            </div>
                        </div>
                            :
                            <></>
                        }

                        {
                            cancelOrder && <DeleteConfirmModal cancelOrder={cancelOrder} setCancelOrder={setCancelOrder} refetch={refetch} />
                        }
                    </div>

                </div>

            </div>

            <div>
                {
                    paid ? <p>Transaction Id: <span className='text-secondary text-sm'>{transactionId}</span></p>
                        :
                        <></>
                }
            </div>
        </div>
    );
};

export default OrderCart;


// <td>{order.productName}</td>
// <td>{order.quantity}</td>
// <td>{order.totalPrice}</td>


// <td>
//     {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-success btn-xs'>Payment</Link>}
//     {(order.totalPrice && order.paid) && <span className='text-success'>Paid</span>}
// </td>

// <td>{
//     order.paid ? <p className='text-success'>{order.transactionId}</p>
//         :
//         <p className='text-error'>Not Paid Yet !</p>
// }</td>
// <td>
//     {!order.paid && <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" className='btn font-medium text-base-100 btn-error btn-xs' >Cancel Order</label>}

// </td>