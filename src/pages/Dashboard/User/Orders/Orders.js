import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';

const Orders = () => {

    const [user] = useAuthState(auth);

    const [cancelOrder, setCancelOrder] = useState(null)

    const url = `http://localhost:5000/order/${user.email}`;

    const { isLoading, data: orders, refetch } = useQuery('order', () =>
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }



    return (
        <div className='mx-5'>
            <p className='text-xl  mt-5 font-bold'>My Orders</p>
            <div className="divider"></div>

            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                            <th>Action</th>
                            <th>payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <tr>
                                <th>{index + 1}</th>
                                <td>{order.productName}</td>
                                <td>{order.price}</td>
                                <td>{order.quantity}</td>
                                <td>{order.totalPrice}</td>
                                <td>
                                    {!order.paid && <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" className='btn font-medium text-base-100 btn-error btn-xs' >Cancel Order</label>}

                                </td>

                                <td>
                                    {(order.totalPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`} className='btn btn-success btn-xs'>Payment</Link>}
                                    {(order.totalPrice && order.paid) && <span className='text-success'>Paid</span>}
                                </td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
            {
                cancelOrder && <DeleteConfirmModal cancelOrder={cancelOrder} setCancelOrder={setCancelOrder} refetch={refetch} />
            }
        </div>
    );
};

export default Orders;