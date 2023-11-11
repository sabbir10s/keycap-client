import { CardElement, useElements, useStripe, } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import FormatePrice from '../../../helper/FormatePrice';

const CheckoutForm = ({ order }) => {
    const navigate = useNavigate()
    const stripe = useStripe();
    const elements = useElements();
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState('');
    const { _id, totalAmount, customer, email } = order;
    useEffect(() => {
        fetch('https://nexiq-server.vercel.app/create-payment-intent', {
            method: "POST",
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ totalAmount })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data.clientSecret);
                }
            })
    }, [totalAmount])
    const handleSubmit = async (event) => {
        event.preventDefault()
        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        setCardError(error?.message || "")
        setSuccess('');
        setProcessing(true);
        // confirm card payment
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: customer.name,
                        email: email
                    },
                },
            },
        );
        if (intentError) {
            setCardError(intentError?.message);
            setProcessing(false)

        } else {
            setCardError('');
            setTransactionId(paymentIntent.id)
            setSuccess('Congrats! your payment is completed')

            // Store Info on database
            const payment = {
                orderId: _id,
                transactionId: paymentIntent.id,
            }
            fetch(`https://nexiq-server.vercel.app/order/email/${_id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)

            }).then(res => res.json())
                .then(data => {
                    setProcessing(false);
                })

        }

    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button className='bg-primary-600 hover:bg-primary-700 duration-300 text-white disabled:bg-slate-300 px-5 py-1.5 mt-8 rounded' type="submit" disabled={!stripe || !clientSecret}>
                    Pay <FormatePrice price={totalAmount} />
                </button>
            </form>
            {
                cardError && <p className='text-red-500'>{cardError}</p>
            }
            {
                success && <div className='text-green-500'>
                    <p>{success}</p>
                    <p>Your transaction id: <span className='text-orange-600 font-bold'>{transactionId}</span></p>
                    <button className='bg-primary-700 w-full py-1 mt-2 text-gray-100 rounded' onClick={() => navigate('/dashboard')}>Go Forward</button>
                </div>
            }
        </>
    );
};

export default CheckoutForm;