import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://nexiq-server.onrender.com/product')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h2 className='text-primary text-center text-3xl font-bold pt-14 uppercase'>Product Collection</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mx-5 lg:mx-12 mt-12'>

                {
                    products.map(product => <ProductCard
                        key={product._id}
                        product={product}
                    ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default Products;