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
    const [click, setClick] = useState(false)
    const navigate = useNavigate()
    const email = user?.email

    const { isLoading, data: userData, refetch } = useQuery(['user', email], () =>
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


    console.log(userData);
    const { name, education, mobile, address, linkedin } = userData;
    const linkedInLink = `https://www.linkedin.com/in/${linkedin}`

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
                    refetch()
                    setClick(false)
                }
                else {
                    toast.secondary("Failed to update");
                }

            });
    }




    return (
        <div className='w-full lg:w-1/3 mx-auto mt-6 px-2'>
            <div>

                <div className='flex justify-between items-center'>
                    <p className='text-lg md:text-2xl font-bold text-primary'>Menage Your Profile</p>
                    <div>
                        {
                            !click
                                ?
                                <button onClick={() => setClick(true)} className='text-xl text-secondary flex items-center gap-2'> <AiOutlineEdit /> <span className='text-sm'>Edit</span> </button>
                                :
                                <button onClick={() => setClick(false)} className='text-secondary border border-secondary px-2 md:px-4 py-1 rounded-lg'>Cancel</button>
                        }
                    </div>
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
                                    <div className='text-lg w-full py-1'> {mobile}</div>
                                    :
                                    <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="number" ref={getMobile} defaultValue={mobile} />
                            }

                        </div>
                        <div>
                            <p className='text-sm text-base-300'>Address</p>
                            {
                                !click
                                    ?
                                    <div className='text-lg w-full py-1'> {address}</div>
                                    :
                                    <input className='border-b border-gray-400 text-lg w-full py-1 focus:outline-0' type="address" ref={getAddress} defaultValue={address} />
                            }

                        </div>

                        <div>
                            <p className='text-sm text-base-300'>LinkedIn User Name</p>
                            {
                                !click
                                    ?
                                    <a className='link text-secondary py-1' href={linkedInLink} target="_blank" >
                                        https://www.linkedin.com/in/{linkedin}
                                    </a>
                                    :
                                    <div className='flex items-center border-b border-gray-400'>
                                        <p className='text-secondary'>https://www.linkedin.com/in/</p>
                                        <input className=' text-lg w-full py-1 focus:outline-0' type="text" ref={getLinkedIn} defaultValue={linkedin} />
                                    </div>
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