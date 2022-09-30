import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import CustomLink from '../../../hooks/CustomLink';
import ProductCard from './ProductCard';
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
        <div>
            <h2 id='products' className='text-primary text-center text-3xl font-bold pt-14 pb-8 lg:pt-24 uppercase'>Product Collection</h2>

            <div className='flex justify-center'>
                <div className='flex justify-center gap-10 border-b border-primary pb-2 w-1/2'>
                    <CustomLink to='#new' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "new" })}> <button>New</button> </CustomLink>
                    <CustomLink to='#mobile' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "mobile" })}>Mobile</CustomLink>
                    <CustomLink to='#computer' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "computer" })}>Computer</CustomLink>
                    <CustomLink to='#smart' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "smart" })}>Smart</CustomLink>
                </div>
            </div>

            <div className='text-secondary p-1 bg-base-200/50 rounded-t mb-4 capitalize'>{type} Gadgets</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>

                {
                    type === "new" && products.map(product => <ProductCard id='#new'
                        key={product._id}
                        product={product}
                        products={products}
                    ></ProductCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "mobile" && mobile.map(product => <ProductCard id='#mobile'
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "computer" && pc.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-10'>
                {
                    type === "smart" && smart.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div >
    );
};

export default Products;