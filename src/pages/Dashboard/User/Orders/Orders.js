import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import OrderRow from './OrderRow';

const Orders = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const url = `https://nexiq-server.vercel.app/order/${user.email}`;

    const { isLoading, data: orders, refetch } = useQuery('order', () =>
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()
        })
    )

    if (isLoading) {
        return <Loading />
    }
    console.log(orders);

    return (
        <div className="bg-white border-[1px] border-gray-200/80 rounded-[10px] mt-6" >
            <div className="overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                            <thead className="bg-secondary-100 dark:bg-gray-900 dark:text-gray-300">
                                <tr>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        No
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        ORDER TIME
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        METHOD
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        STATUS
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        TOTAL
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        ACTION
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" divide-y divide-gray-200 dark:divide-gray-600">
                                {orders.map((order, index) => (
                                    <OrderRow key={order._id} order={order} index={index} refetch={refetch} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Orders;