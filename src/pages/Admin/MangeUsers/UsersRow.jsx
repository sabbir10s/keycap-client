import React from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../context/AuthContext';

const UsersRow = ({ user, refetch, index }) => {
    const { logOut } = useAuthContext()
    const { name, email, role, _id } = user;
    const navigate = useNavigate();

    const handleMakeAdmin = (user) => {
        const url = `http://localhost:5000/user/admin/${user._id}`;
        fetch(url, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
            },
        })
            .then(res => {
                console.log('res for all users', res);
                if (res.status === 403) {
                    toast.error('Failed to make an admin')
                    localStorage.removeItem('access-token');
                    logOut()
                    navigate('/')
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 0) {
                    refetch();
                    toast.success('Successfully made an admin');
                }
            })
    }


    const handleDelete = () => {
        const url = `http://localhost:5000/user/${_id}`;
        fetch(url, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('access-token')}`
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
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={() => handleMakeAdmin(user)} className='btn btn-xs btn-success'>Make Admin</button>}</td>
            <td>
                {role !== 'admin' && <button onClick={() => handleDelete(_id)} className='btn btn-xs btn-error'>Delete</button>}
            </td>
        </tr>

    );
};

export default UsersRow;