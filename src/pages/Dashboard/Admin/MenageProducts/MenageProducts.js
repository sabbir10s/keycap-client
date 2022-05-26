import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import ProductRow from './ProductRow';



const MenageProducts = () => {
    const navigate = useNavigate();
    const { data: products, isLoading, refetch } = useQuery('product', () => fetch('http://localhost:5000/product', {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        },
    }).then(res => {
        if (res.status === 403) {
            signOut(auth);
            localStorage.removeItem('accessToken');
            navigate('/')
        }
        return res.json()
    }))
    if (isLoading) {
        return <Loading />
    }



    return (
        <div className="overflow-x-auto mx-5 mt-5">
            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map((product, index) => <ProductRow product={product} index={index} key={product._id} refetch={refetch}></ProductRow>)
                    }


                </tbody>
            </table>
        </div>
    );
};

export default MenageProducts;