import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import DeleteConfirmModal from './DeleteConfirmModal';
import OrderTable from './OrderTable';

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
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) =>
                                < OrderTable key={order._id}
                                    setCancelOrder={setCancelOrder}
                                    refetch={refetch}
                                    order={order}
                                    index={index}>
                                </OrderTable>)
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