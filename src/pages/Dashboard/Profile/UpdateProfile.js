import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../components/PrimaryButton';
import auth from '../../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth);

    // const [updateUser, setUpdateUser] = useState({
    //     name: "sakib"
    // })


    // const handleUpdateUser = event => {
    //     const { name, ...rest } = updateUser;
    //     const newName = event.target.value;
    //     const update = { displayName: newName, ...rest };
    //     setUpdateUser(update);
    //     console.log(updateUser);
    // };


    const submitUserData = event => {
        event.preventDefault()
        const name = event.target.name.value;
        const email = event.target.email.value;
        const education = event.target.education.value;
        const city = event.target.city.value;
        const phone = event.target.phone.value;
        const linkedin = event.target.linkedin.value;

        const userInfo = { name, email, education, city, phone, linkedin };

        const url = `http://localhost:5000/user/${email}`;

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
            <p className='text-xl  mt-3 font-bold'>Update Profile</p>
            <div className="divider my-2"></div>
            <div className='max-w-sm'>
                <form onSubmit={submitUserData}>
                    <div>
                        <p className='text-base-300 text-sm block'>Name</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="name" value={user.displayName} disabled id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>Email</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="email" name="email" value={user.email} disabled id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>Eduction</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="education" placeholder='eduction' id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>City</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="city" placeholder='city' id="" />
                    </div>
                    <div className='mt-3'>
                        <p className='text-base-300 text-sm block'>Phone</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="phone" name="phone" placeholder='phone' id="" />
                    </div>
                    <div className='mt-3 mb-5'>
                        <p className='text-base-300 text-sm block'>LinkedIn</p>
                        <input className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' type="text" name="linkedin" placeholder='LinkedIn profile link' id="" />
                    </div>
                    {/* <input className='btn btn-primary' type="submit" value='SUBMIT' /> */}
                    <PrimaryButton type='submit'>Save Change</PrimaryButton>
                </form>
            </div>

        </div>
    );
};

export default UpdateProfile;