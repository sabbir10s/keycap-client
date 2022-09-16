import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import auth from '../../../firebase.init';


const Profile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()

    const { isLoading, data: userData } = useQuery('product', () =>
        fetch(`https://nexiq-server.onrender.com/user/${user.email}`, {
            method: "GET",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        }).then(res => {
            if (res.status === 401 || res.status === 403) {
                signOut(auth);
                localStorage.removeItem('accessToken');
                navigate('/')
            }
            return res.json()
        }
        )
    )
    if (isLoading) {
        return <Loading />
    }

    const { name, email, education, phone, city, linkedin } = userData;

    return (
        <div className='mx-10'>
            <p className='text-2xl font-bold text-primary mt-7'>Your Profile</p>
            <div className="divider mt-3"></div>
            <div className=''>
                <div className='mb-3'>
                    <p className='text-sm text-base-300'>Name</p>
                    <p>{name}</p>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-base-300'>Email</p>
                    <p>{email}</p>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-base-300'>Education</p>
                    <p>{education}</p>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-base-300'>phone</p>
                    <p>{phone}</p>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-base-300'>City</p>
                    <p>{city}</p>
                </div>
                <div className='mb-3'>
                    <p className='text-sm text-base-300'>LinkedIn Profile</p>
                    {
                        userData.linkedin ?
                            <a className='link text-error' href={linkedin} target="_blank" >Your LinkedIn Profile Link </a>
                            :
                            ''
                    }
                </div>
                <button onClick={() => navigate('/updateProfile')} className='bg-primary text-base-100 px-7 py-2 rounded'>Update Profile</button>
            </div>
        </div>
    );
};

export default Profile;