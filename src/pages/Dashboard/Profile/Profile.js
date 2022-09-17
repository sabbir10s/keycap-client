import { signOut } from 'firebase/auth';
import React from 'react';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../../components/Loading';
import auth from '../../../firebase.init';
import { AiOutlineEdit } from 'react-icons/ai';
import { useRef } from 'react';
import { toast } from 'react-toastify';



const Profile = () => {
    const [user, loading] = useAuthState(auth);
    const [reload, setReload] = useState(true)
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    const email = user?.email
    console.log(email);
    const { isLoading, data: userData } = useQuery(['user', email, reload], () =>
        fetch(`https://nexiq-server.onrender.com/user/${email}`, {
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
    const getName = useRef(null)
    const getEducation = useRef(null)
    const getMobile = useRef(null)
    const getAddress = useRef(null)
    const getLinkedIn = useRef(null)
    if (isLoading || loading) {
        return <Loading />
    }


    // console.log(userData);
    const { name, education, phone, city, linkedin } = userData;


    const handleProfile = (event) => {
        event.preventDefault();
        const name = getName.current.value;
        const education = getEducation.current.value;
        const mobile = getMobile.current.value;
        const address = getAddress.current.value;
        const linkedin = getLinkedIn.current.value;
        const userInfo = {
            name,
            education,
            mobile,
            address,
            linkedin
        };

        const url = `https://nexiq-server.onrender.com/user/${user.email}`;

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
                if (data.result.acknowledged) {
                    toast.success("Profile Update")
                    setReload(!reload)
                    setClick(false)
                }
                else {
                    toast.error("Failed to update");
                }

            });
    }




    return (
        <div className='w-1/3 mx-auto mt-6'>
            <div>

                <div className='flex justify-between items-center'>
                    <p className='text-2xl font-bold text-primary'>Menage Your Profile</p>
                    {
                        !click
                            ?
                            <button onClick={() => setClick(true)} className='text-xl text-error flex items-center gap-2'> <AiOutlineEdit /> <span className='text-sm'>Edit</span> </button>
                            :
                            <button onClick={() => setClick(false)} className='text-error border border-error px-4 py-1 rounded-lg'>Cancel</button>
                    }
                </div>
                <form onSubmit={handleProfile}>
                    <div className='flex flex-col gap-5 mt-3'>
                        {
                            <div>
                                <p className='text-sm text-base-300'>Name</p>
                                {
                                    !click
                                        ?
                                        <div className='text-lg w-full py-1'> {name || user?.displayName}</div>
                                        :
                                        <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="text" name="name" ref={getName} defaultValue={name || user?.displayName || ""} />
                                }
                            </div>
                        }

                        <div>
                            <p className='text-sm text-base-300'>Education</p>
                            {
                                !click
                                    ?
                                    <div className='text-lg w-full py-1'> {education}</div>
                                    :
                                    <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="text" ref={getEducation} defaultValue={education} />
                            }

                        </div>
                        <div>
                            <p className='text-sm text-base-300'>Mobile</p>
                            {
                                !click
                                    ?
                                    <div className='text-lg w-full py-1'> {phone}</div>
                                    :
                                    <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="number" ref={getMobile} defaultValue={phone} />
                            }

                        </div>
                        <div>
                            <p className='text-sm text-base-300'>Address</p>
                            {
                                !click
                                    ?
                                    <div className='text-lg w-full py-1'> {city}</div>
                                    :
                                    <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="text" ref={getAddress} defaultValue={city} />
                            }

                        </div>

                        <div>
                            <p className='text-sm text-base-300'>LinkedIn Link</p>
                            {
                                !click
                                    ?
                                    <a className='link text-error py-1' href={linkedin} target="_blank" >
                                        https://www.linkedin.com/in/{linkedin}
                                    </a>
                                    :
                                    <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="text" ref={getLinkedIn} defaultValue={linkedin} />
                            }

                        </div>
                        {
                            click && <input className='bg-primary text-base-100 px-7 py-2 rounded cursor-pointer'
                                type="submit"
                                value="Save Change"
                            />
                        }
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Profile;