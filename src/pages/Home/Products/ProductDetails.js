import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../../../components/Loading';

const ProductDetails = () => {
    const { productId } = useParams()
    const navigate = useNavigate()
    const { isLoading, data: product } = useQuery(['product', productId], () =>
        fetch(`https://nexiq-server.onrender.com/product/${productId}`).then(res =>
            res.json()
        )
    )
    if (isLoading) {
        return <Loading />
    }
    const { _id, name, image, price, description, minOrder, quantity
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
                                    <td className='border border-primary px-2 py-1 text-sm font-medium'>Minimum Order</td>
                                </tr>
                                <tr>
                                    <td className='border border-primary px-2 py-1 text-secondary text-sm'>{quantity}</td>
                                    <td className='border border-primary px-2 py-1 text-secondary text-sm'>{minOrder}</td>
                                </tr>
                            </table>
                            <button onClick={handlePurchase} className='w-1/3 bg-primary text-base-100 py-1 rounded-lg my-3'>Order Now</button>
                            <p className='text-sm py-2'>{description
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