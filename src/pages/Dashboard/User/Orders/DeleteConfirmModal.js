import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ refetch, cancelOrder, setCancelOrder }) => {

    const { _id } = cancelOrder;
    const handleCancelOrder = () => {
        const url = `https://nexiq-server.onrender.com/order/email/${_id}`;
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
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg">Are you sure cancel this order?</h3>

                    <div className="modal-action">
                        <button onClick={() => handleCancelOrder()} className='btn btn-sm btn-success'>Yeas</button>
                        <label for="delete-confirm-modal" className="btn btn-sm btn-error">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;