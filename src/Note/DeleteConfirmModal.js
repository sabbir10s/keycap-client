import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ refetch, cancelOrder, setCancelOrder }) => {

    const { _id } = cancelOrder;
    const handleCancelOrder = () => {
        const url = `https://nexiq-server.vercel.app/order/email/${_id}`;
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

            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="font-bold text-lg">Are you sure cancel this order?</h3>

                    <div className="modal-action">
                        <button onClick={() => handleCancelOrder()} className='btn btn-sm btn-success'>Yeas</button>
                        <label htmlFor="my-modal-4" className="btn btn-sm btn-error">Cancel</label>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default DeleteConfirmModal;