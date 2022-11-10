import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import ProductCard from './ProductsCard';

const Products = () => {
    const {
        data: products,
        isLoading,
    } = useQuery(["products"], () =>
        fetch("https://nexiq-server.onrender.com/product", {
            method: "GET"
        }).then(res => res.json())
    );
    const [category, setCategory] = useState({ type: "all" })

    if (isLoading) {
        return <Loading />
    }


    const mobile = products.filter(product => product.category === 'mobile')
    const pc = products.filter(product => product.category === 'pc')
    const smart = products.filter(product => product.category === 'smart')
    const { type } = category
    console.log(products);


    return (
        <div className='container mx-auto'>
            <div>
                <div className='grid grid-cols-4 pt-10'>
                    <div className='mb-10 col-span-1 w-full'>
                        <div className='mb-8'>
                            <span className='text-xl text-primary font-bold border-l-4 border-primary pl-5 '>Product Category</span>
                        </div>
                        <div className='flex flex-col gap-3 md:gap-10  w-full'>
                            <button className={type === 'all' ? 'text-secondary border-b border-secondary w-32 text-left' : ' border-b border-white w-32 text-left'} onClick={() => setCategory({ type: "all" })}> All Products</button>
                            <button className={type === 'mobile' ? 'text-secondary border-b border-secondary w-32 text-left' : ' border-b border-white w-32 text-left'} onClick={() => setCategory({ type: "mobile" })}>Mobile </button>
                            <button className={type === 'computer' ? 'text-secondary border-b border-secondary w-32 text-left' : 'border-b border-white w-32 text-left'} onClick={() => setCategory({ type: "computer" })}>Computer</button>
                            <button className={type === 'smart' ? 'text-secondary border-b border-secondary w-32 text-left' : ' border-b border-white w-32 text-left'} onClick={() => setCategory({ type: "smart" })}>Smart</button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-10 col-span-3'>
                        {
                            type === "all" && products.map(product => <ProductCard
                                key={product._id}
                                product={product}
                                products={products}
                            ></ProductCard>)
                        }
                        {
                            type === "mobile" && mobile.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                        {
                            type === "computer" && pc.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                        {
                            type === "smart" && smart.map(product => <ProductCard
                                key={product._id}
                                product={product}
                            ></ProductCard>)
                        }
                    </div>
                </div >
            </div>
        </div>
    );
};

export default Products;