import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

import auth from '../../../../firebase.init';

const UpdateProfile = () => {

    const [user] = useAuthState(auth);

    const [updateUser, setUpdateUser] = useState({
        name: "sakib"
    })


    const handleUpdateUser = event => {
        const { name, ...rest } = updateUser;
        const newName = event.target.value;
        const update = { displayName: newName, ...rest };
        setUpdateUser(update);
        console.log(updateUser);
    };

    const submitUserData = event => {
        event.preventDefault()
        const name = event.target.name.value;
        console.log(name);
    }


    return (
        <div className='ml-5'>
            <p className='text-xl  mt-5 font-bold'>Update Profile</p>
            <div class="divider"></div>
            <div className='grid grid-cols-2'>
                <div className='flex flex-col justify-center items-center'>
                    <div><img className='rounded-full' src={user?.photoURL} alt="" /></div>
                    {/* <button className='bg-primary text-white px-7 py-2 rounded-full mt-5'>Edit Profile</button> */}
                </div>
                <div>
                    <small className='font-bold'>Name</small>
                    <div>
                        <form onSubmit={submitUserData}>
                            <div>
                                <input onChange={handleUpdateUser} type='text' name='name' className='border rounded-lg px-3 py-1' value={updateUser.name} />

                            </div>
                            <input type="submit" value='SUBMIT' />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;