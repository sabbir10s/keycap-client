import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from './Loading';

const ProductDetails = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const { isLoading, data: product } = useQuery(['product', productId], () =>
        fetch(`https://nexiq-server.vercel.app/product/${productId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    const { _id, name, image, price, description, quantity
    } = product;

    const handlePurchase = () => {
        navigate(`/purchase/${_id}`)
    }
    return (
        <div className='h-screen flex items-start mt-5 max-w-[1400px] mx-auto lg:px-20 px-2'>
            <div >
                <div className='grid lg:grid-cols-2'>
                    <div className='flex justify-center items-center'>
                        <img className='w-[400px]' src={image} alt="" />
                    </div>
                    <div className='flex items-center'>
                        <div>
                            <p className='text-4xl font-bold text-primary'>{name} </p>
                            <p className='text-secondary text-2xl font-bold py-3'>${price} </p>

                            <table>
                                <tr>
                                    <td className='border border-primary px-2 py-1 text-sm font-medium'>Available Stock</td>
                                    <td className='border border-primary px-8 py-1 text-secondary text-sm'>{quantity}</td>
                                </tr>
                            </table>

                            <button onClick={handlePurchase} className='bg-primary shadow-md shadow-secondary/50 text-base-100 px-10 py-2 rounded my-5'>Order Now</button>
                            <p className='text-sm'>{description
                            }</p>
                        </div>
                    </div>
                </div>

                <div>

                </div>
            </div>

        </div>
    );
};

export default ProductDetails;