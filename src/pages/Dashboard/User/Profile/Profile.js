import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../../firebase.init';

const Profile = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    return (
        <div className='ml-5'>
            <p className='text-xl  mt-5 font-bold'>My Profile</p>
            <div class="divider"></div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                    <div><img className='rounded-full' src={user?.photoURL} alt="" /></div>
                    <button onClick={() => navigate('/dashboard/updateProfile')} className='bg-primary text-white px-7 py-2 rounded-full mt-5'>Edit Profile</button>
                </div>
                <div>
                    <small className='font-bold'>Name</small>
                    <p>{user.displayName}</p>
                    <small className='font-bold'>Email</small>
                    <p>{user.email}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;