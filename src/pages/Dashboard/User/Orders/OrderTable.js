import React from 'react';
// import { toast } from 'react-toastify';

const OrderTable = ({ order, index, setCancelOrder }) => {
    const { productName, price, quantity, totalPrice } = order;

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>
            <td>{totalPrice}</td>
            <td>
                <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" className='text-error' >open modal</label>

            </td>
        </tr>
    );
};

export default OrderTable;