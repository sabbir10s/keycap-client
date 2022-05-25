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
    const url = `http://localhost:5000/order/email/${id}`;

    const { isLoading, data: order, refetch } = useQuery(['order', id], () =>
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
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <div class="text-center lg:text-left">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <h2 class="card-title">Please Pay for <span className='text-success'>{order.productName}</span></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div class="card-actions justify-end">
                                <button class="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div class="card w-96 bg-base-100 shadow-xl">
                        <div class="card-body">
                            <Elements stripe={stripePromise}>
                                <CheckoutForm order={order} />
                            </Elements>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Payment;