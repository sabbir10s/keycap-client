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
                <label onClick={() => setCancelOrder(order)} for="delete-confirm-modal" className='btn btn-error btn-sm' >Cancel Order</label>

            </td>
        </tr>
    );
};

export default OrderTable;