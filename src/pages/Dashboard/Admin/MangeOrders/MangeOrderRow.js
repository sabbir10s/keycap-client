import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../../../firebase.init';



const MangeOrderRow = ({ order, setIsReload, reload, index }) => {

    const navigate = useNavigate()

    const { name, productName, price, quantity, paid, status, _id } = order;


    const handleDelete = () => {
        const url = `https://nexiq-server.vercel.app/order/${_id}`;
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
                    toast.success('Successfully Deleted')
                    setIsReload(!reload)

                }
            })

    }

    const handleStatus = id => {
        const url = `https://nexiq-server.vercel.app/order/${id}`;

        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then(res => {
                console.log('res for all users', res);
                if (res.status === 403) {
                    toast.error('Failed to delivered')
                    signOut(auth);
                    localStorage.removeItem('accessToken');
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    setIsReload(!reload)
                    toast.success('Successfully Delivered');
                }
            })
    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{productName}</td>
            <td>{price}</td>
            <td>{quantity}</td>

            {
                paid ? <td className='text-success'>Paid</td>
                    :
                    <td className='text-error'>Unpaid</td>
            }

            <td>
                {
                    status === 'pending' || !paid
                        ?
                        <button onClick={() => handleStatus(_id)} className='capitalize text-error hover:shadow-sm'>{status}</button>
                        :
                        <p className='text-success'>Delivered</p>
                }
            </td>

            <td>
                {
                    !paid && <button onClick={() => handleDelete(_id)} className='btn-xs text-error'>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg></button>
                }

            </td>
        </tr>
    );
};

export default MangeOrderRow;