import React from 'react';
import { toast } from 'react-toastify';


const ProductRow = ({ product, refetch, index }) => {
    const { name, price, quantity, _id } = product;

    const handleDelete = () => {
        const url = `https://quiet-fjord-62553.herokuapp.com/product/${_id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount) {
                    toast.success('Successfully Deleted');
                    refetch();
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td><button onClick={() => handleDelete(_id)} className='btn-xs text-error'>
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg></button></td>
        </tr>
    );
};

export default ProductRow;