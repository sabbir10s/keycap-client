import React from 'react';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const UsersRow = ({ user, refetch, index }) => {
    const { name, email, role } = user;
    const navigate = useNavigate();
    const handleMakeAdmin = () => {
        const url = `http://localhost:5000/user/admin/${email}`;

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
                    toast.error('Failed to make an admin')
                    signOut(auth);
                    localStorage.removeItem('accessToken');
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
    return (

        <tr>
            <th>{index + 1}</th>
            <td>{name}</td>
            <td>{email}</td>
            <td>{role !== 'admin' && <button onClick={handleMakeAdmin} className='btn btn-xs btn-success'>Make Admin</button>}</td>
            <td>
                {role !== 'admin' && <button className='btn btn-xs btn-error'>Delete</button>}
            </td>
        </tr>

    );
};

export default UsersRow;