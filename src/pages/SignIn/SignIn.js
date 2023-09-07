import React, { useEffect, useState } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import useToken from '../../hooks/useToken';
import { FcGoogle } from 'react-icons/fc';

const SignIn = () => {
    const [email, setEmail] = useState('')
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);


    const [token] = useToken(user || gUser)


    let signInError;
    const navigate = useNavigate();
    const location = useLocation();

    let from = location?.state?.from?.pathname || "/";

    useEffect(() => {
        if (token) {
            navigate(from, { replace: true });
        }
    }, [token, from, navigate])

    if (loading || gLoading) {
        return <Loading />
    }
    if (error || gError) {
        signInError = <p className='text-red-500 pb-4'><small>{error?.message || gError?.message}</small></p>
    }

    const onSubmit = data => {
        signInWithEmailAndPassword(data.email, data.password);
    };


    return (
        <section className='h-full flex justify-center items-center pt-6'>
            <div className="w-96 border rounded-lg p-6">
                <div className='space-y-4'>
                    <div className='text-sm'>
                        <p className='font-semibold text-gray-500'>login as a:</p>
                        <div className='space-x-2'>
                            <button className='text-primary-500 hover:text-secondary-500 duration-200' onClick={() => setEmail('user@gmail.com')}>user@gmail.com</button>
                            <button className='text-primary-500 hover:text-secondary-500 duration-200' onClick={() => setEmail('admin@gmail.com')}>admin@gmail.com</button>
                        </div>
                    </div>

                    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>

                        <div className="w-full">


                            <label className="label">
                                <span className="text-black font-semibold text-sm tracking-wider">Your email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
                                defaultValue={email}
                                autoFocus={true}
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "Email is Required"
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="w-full">
                            <label className="label">
                                <span className="text-black font-semibold text-sm tracking-wider">Password</span>
                            </label>
                            <input
                                type="Password"
                                placeholder="Password"
                                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
                                defaultValue='123456'
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "Password is Required"
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })}

                            />
                            <label className="label">
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}


                        <input type="submit" value="Sign in" className='bg-primary-700 hover:bg-primary-600 duration-300 text-white py-2 w-full rounded-lg cursor-pointer shadow-lg' />

                    </form>

                    <div className='flex items-center space-x-2'>
                        <div className='w-full border'></div>
                        <span>OR</span>
                        <div className='w-full border'></div>
                    </div>
                    <button onClick={() => signInWithGoogle()} className="bg-gray-100 py-2 w-full flex items-center justify-center hover:shadow-md duration-300">
                        <span className='flex items-center'><FcGoogle className='text-3xl mr-2' /><span>Sign In with Google</span></span>
                    </button>

                    <div className='text-sm flex flex-col space-y-1 justify-center items-center' >
                        <span>Don't have an account?</span>
                        <Link to="/signUp" className='text-primary-700 font-semibold'>Sign Up</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignIn;