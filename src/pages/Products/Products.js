import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Footer from '../../components/Footer';
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
        <>
            <div className='container mx-auto px-2 lg:px-0'>
                <div className='grid md:grid-cols-4 gap-5 py-10'>
                    <div className='mb-5 md:mb-0 md:col-span-1'>
                        <div className='mb-8'>
                            <span className='lg:text-xl text-primary font-bold border-l-4 border-primary pl-5 '>Product Category</span>
                        </div>
                        <div className='flex flex-row md:flex-col gap-3 md:gap-10 text-sm lg:text-lg md:w-1/2 lg:w-1/3'>
                            <button className={type === 'all' ? 'px-2 md:px-0 text-secondary border-b border-secondary text-left' :
                                'px-2 md:px-0 border-b border-white text-left hover:text-secondary relative group'}
                                onClick={() => setCategory({ type: "all" })}>
                                <span>All</span>
                                <span className='absolute left-0 bottom-0 w-0 border-b border-secondary -z-10 group-hover:w-full group-hover:transition-all  duration-500'></span>
                            </button>
                            <button button className={type === 'mobile' ? 'px-2 md:px-0 text-secondary border-b border-secondary text-left' :
                                'px-2 md:px-0 border-b border-white text-left hover:text-secondary relative group'}
                                onClick={() => setCategory({ type: "mobile" })}>
                                <span>Mobile</span>
                                <span className='absolute left-0 bottom-0 w-0 border-b border-secondary -z-10 group-hover:w-full group-hover:transition-all duration-500'></span>
                            </button>
                            <button className={type === 'computer' ? 'px-2 md:px-0 text-secondary border-b border-secondary text-left' :
                                'px-2 md:px-0 border-b border-white text-left hover:text-secondary relative group'}
                                onClick={() => setCategory({ type: "computer" })}>
                                <span>Computer</span>
                                <span className='absolute left-0 bottom-0 w-0 border-b border-secondary -z-10 group-hover:w-full group-hover:transition-all duration-500'></span>
                            </button>
                            <button className={type === 'smart' ? 'px-2 md:px-0 text-secondary border-b border-secondary text-left' :
                                'px-2 md:px-0 border-b border-white text-left hover:text-secondary relative group'}
                                onClick={() => setCategory({ type: "smart" })}>
                                <span>Smart</span>
                                <span className='absolute left-0 bottom-0 w-0 border-b border-secondary -z-10 group-hover:w-full group-hover:transition-all duration-500'></span>
                            </button>
                        </div>
                    </div>

                    <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-10 col-span-3'>
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
            <Footer />
        </>
    );
};

export default Products;