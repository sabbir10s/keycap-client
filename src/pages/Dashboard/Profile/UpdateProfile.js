import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../components/PrimaryButton';
import auth from '../../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth);

    const submitUserData = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;

        const userInfo = { name, email, education, city, phone, linkedin };

        const url = `https://nexiq-server.onrender.com/user/${email}`;

        fetch(url, {
            method: 'PUT',
            body: JSON.stringify(userInfo),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                event.target.reset();
                toast.success("Profile Update")
            });
    }


    return (
        <div className='mx-10'>
            <p className='text-2xl font-bold text-primary mt-7'><span className='text-secondary'>"{user.displayName}"</span> Update your profile</p>
            <div className="divider mt-3"></div>
            <div className='max-w-sm'>
                <form onSubmit={submitUserData}>
                    <div>
                        <p className='text-base-300 text-sm block'>Name</p>
                        <input required className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="name" id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>Email</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="email" name="email" value={user.email} id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>Eduction</p>
                        <input required className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="education" placeholder='eduction' id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>City</p>
                        <input required className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="city" placeholder='city' id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>Phone</p>
                        <input required className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="phone" name="phone" placeholder='phone' id="" />
                    </div>
                    <div className='mt-3 mb-5'>
                        <p className='text-base-300 text-sm block'>LinkedIn</p>
                        <input required className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="linkedin" placeholder='LinkedIn profile link' id="" />
                    </div>
                    <PrimaryButton type='submit'>Save Change</PrimaryButton>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;