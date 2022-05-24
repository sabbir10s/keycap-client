import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ refetch, cancelOrder, setCancelOrder }) => {

    const { _id } = cancelOrder;
    const handleCancelOrder = () => {
        const url = `http://localhost:5000/order/email/${_id}`;
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
                    toast.success('Order Cancel Done.');
                    setCancelOrder(null)
                    refetch();
                }
            })
    }


    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Are you sure cancel this order?</h3>

                    <div class="modal-action">
                        <button onClick={() => handleCancelOrder()} className='btn btn-sm btn-success'>Yeas</button>
                        <label for="delete-confirm-modal" class="btn btn-sm btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;