import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import BestProductsCard from './BestProductsCard';

const Products = () => {
    const {
        data: products,
        isLoading,
    } = useQuery(["products"], () =>
        fetch("https://nexiq-server.onrender.com/product", {
            method: "GET"
        }).then(res => res.json())
    );
    const [category, setCategory] = useState({ type: "new" })

    if (isLoading) {
        return <Loading />
    }


    const mobile = products.filter(product => product.category === 'mobile')
    const pc = products.filter(product => product.category === 'pc')
    const smart = products.filter(product => product.category === 'smart')
    const { type } = category



    return (

        <div className='pt-8 pb-20'>

            <h2 id='products' className='text-primary text-center text-2xl font-bold py-8 uppercase'>Product Collection</h2>

            <div className='flex justify-center mb-10'>
                <div className='flex justify-center gap-5 md:gap-10  w-full md:w-1/2'>
                    <button className={type === 'new' ? 'text-secondary border-b border-secondary' : 'text-primary border-b border-white'} onClick={() => setCategory({ type: "new" })}>New Product</button>
                    <button className={type === 'mobile' ? 'text-secondary border-b border-secondary' : 'text-primary border-b border-white'} onClick={() => setCategory({ type: "mobile" })}>Mobile</button>
                    <button className={type === 'computer' ? 'text-secondary border-b border-secondary' : 'text-primary border-b border-white'} onClick={() => setCategory({ type: "computer" })}>Computer</button>
                    <button className={type === 'smart' ? 'text-secondary border-b border-secondary' : 'text-primary border-b border-white'} onClick={() => setCategory({ type: "smart" })}>Smart</button>
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "new" && products.map(product => <BestProductsCard id='#new'
                        key={product._id}
                        product={product}
                        products={products}
                    ></BestProductsCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "mobile" && mobile.map(product => <BestProductsCard id='#mobile'
                        key={product._id}
                        product={product}
                    ></BestProductsCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "computer" && pc.map(product => <BestProductsCard id='#computer'
                        key={product._id}
                        product={product}
                    ></BestProductsCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "smart" && smart.map(product => <BestProductsCard id='#smart'
                        key={product._id}
                        product={product}
                    ></BestProductsCard>)
                }
            </div>
        </div >
    );
};

export default Products;