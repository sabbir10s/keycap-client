import { signOut } from 'firebase/auth';
import React from 'react';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../../components/Loading';
import auth from '../../../../firebase.init';
import UsersRow from './UsersRow';

const AllUsers = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://quiet-fjord-62553.herokuapp.com/user', {
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
            <p className='text-2xl font-bold text-primary'>Menage All Users</p>
            <div className="divider mt-3"></div>

            <table className="table w-full">

                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Admin</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        users.map((user, index) => <UsersRow user={user} index={index} key={user._id} refetch={refetch}></UsersRow>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default AllUsers;