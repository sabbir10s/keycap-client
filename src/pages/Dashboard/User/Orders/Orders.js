import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import OrderRows from './OrderRows';

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
        <div className='m-5'>
            {orders?.slice(0, 5).map((order) => <OrderRows order={order} key={order._id} />)}
        </div>
    );
};

export default Orders;