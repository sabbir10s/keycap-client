import { useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import Loading from '../../../components/Loading';
import BestProductsCard from './BestProductsCard';

const Products = () => {
    const {
        data: products,
        isLoading,
    } = useQuery(["products"], () =>
        fetch("https://nexiq-server.vercel.app/product", {
            method: "GET"
        }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }

    return (
        <div className='pt-8 pb-20'>
            <h2 id='products' className='text-primary text-center text-2xl font-bold py-8 uppercase'>Product Collection</h2>
            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-3 md:gap-10 lg:mx-20 mt-5'>
                {
                    products.slice(0, 6).map(product => <BestProductsCard id='#new'
                        key={product._id}
                        product={product}
                        products={products}
                    ></BestProductsCard>)
                }
            </div>
            <div className='flex justify-center mt-16'>
                <Link to="/products" className='bg-secondary text-base-100 px-8 py-3 rounded shadow-md shadow-base-300/50'>View All Products</Link>
            </div>
        </div >
    );
};

export default Products;