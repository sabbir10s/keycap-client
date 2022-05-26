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
        <div className="hero">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
                            <h2 className="card-title">Please Pay for <span className='text-success'>{order.productName}</span></h2>
                            <p>If a dog chews shoes whose shoes does he choose?</p>
                            <div className="card-actions justify-end">
                                <button className="btn btn-primary">Buy Now</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body">
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