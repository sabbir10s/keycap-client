import React, { useEffect, useState } from 'react';
import MangeOrderRow from './MangeOrderRow';

const MangeOrders = () => {

    const [orders, setOrders] = useState([]);
    const [reload, setIsReload] = useState(true)
    useEffect(() => {
        const url = 'https://nexiq-server.vercel.app/order';
        fetch(url, {
            method: 'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                setOrders(data);
            })

    }, [reload])

    return (
        <div className="bg-white dark:bg-gray-700 border-[1px] border-gray-200/80 dark:border-gray-600 rounded-[10px] shadow-custom">
            <div className="overflow-x-auto">
                <div className="align-middle inline-block min-w-full">
                    <div className="shadow overflow-hidden border-b border-gray-200 dark:border-gray-600 sm:rounded-lg">
                        <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-500">
                            <thead className="bg-gray-100 dark:bg-gray-900 dark:text-gray-300">
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
                                        User Name
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        Product
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        Price
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        Quantity
                                    </th>
                                    <th
                                        scope="col"
                                        className="py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider"
                                    >
                                        Status
                                    </th>
                                    <th
                                        scope="col"
                                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody className=" divide-y divide-gray-200 dark:divide-gray-600">
                                {orders?.slice(0, 5).map((order, index) => (
                                    <MangeOrderRow order={order} index={index} setIsReload={setIsReload} reload={reload} />
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MangeOrders;