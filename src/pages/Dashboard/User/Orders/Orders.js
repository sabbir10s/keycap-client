import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import OrderCart from './OrderCart';

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



    return (
        <div className='mx-5'>
            <p className='text-xl  mt-5 font-bold'>My Orders</p>
            <div className="divider"></div>

            <div>
                <div className='grid md:grid-cols-2 gap-5 mb-5 '>
                    {
                        orders.map((order) => <OrderCart key={order._ke} refetch={refetch} order={order} />)
                    }
                </div>
            </div>

        </div>
    );
};

export default Orders;