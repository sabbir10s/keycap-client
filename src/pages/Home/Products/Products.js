import React, { useEffect, useState } from 'react';
import CustomLink from '../../../hooks/CustomLink';
import ProductCard from './ProductCard';
const Products = () => {
    const [products, setProducts] = useState([]);
    const [category, setCategory] = useState({ type: "new" })
    useEffect(() => {
        fetch('https://nexiq-server.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    const mobile = products.filter(product => product.category === 'mobile')
    const pc = products.filter(product => product.category === 'pc')
    const smart = products.filter(product => product.category === 'smart')
    const { type } = category
    return (
        <div>
            <h2 id='products' className='text-primary text-center text-3xl font-bold pt-14 pb-8 lg:pt-24 uppercase'>Product Collection</h2>

            <div className='flex gap-10 pb-5'>
                <CustomLink to='#new' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "new" })}> <button>New</button> </CustomLink>
                <CustomLink to='#mobile' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "mobile" })}>Mobile</CustomLink>
                <CustomLink to='#computer' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "computer" })}>Computer</CustomLink>
                <CustomLink to='#smart' className='text-primary hover:text-secondary border border-primary px-3 py-1 rounded' onClick={() => setCategory({ type: "smart" })}>Smart</CustomLink>
            </div>

            <div className='text-secondary p-1 bg-base-200/50 rounded-t mb-4 capitalize'>{type} Gadgets</div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14'>

                {
                    type === "new" && products.map(product => <ProductCard id='#new'
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14'>
                {
                    type === "mobile" && mobile.map(product => <ProductCard id='#mobile'
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14'>
                {
                    type === "computer" && pc.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 md:gap-14'>
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