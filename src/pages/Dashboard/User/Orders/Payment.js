import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L17CjFVPM1NcC4wk5HSCO097ADOKg2eQAOM7vvJiloMXfu1ghTtdemx4zqJIsaokSLRN1ymzqin5gtKFyMn0e6z00PtAPsGer');

const Payment = () => {

    const { id } = useParams();
    const url = `https://quiet-fjord-62553.herokuapp.com/order/email/${id}`;

    const { isLoading, data: order } = useQuery(['order', id], () =>
        fetch(url, {
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => res.json()
        )
    )
    console.log(order);
    if (isLoading) {
        return <Loading />
    }

    return (
        <div className="mt-10 flex justify-center">
            <div className="card bg-base-100 border border-success shadow-xl">
                <div className="card-body">
                    <h2 className="card-title mb-7">Please Pay for <span className='text-success'>{order.productName}</span></h2>
                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;