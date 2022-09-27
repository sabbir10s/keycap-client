import React, { useEffect, useId } from 'react';
import auth from '../../firebase.init';
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import useToken from '../../hooks/useToken';
import { useState } from 'react';
// import useToken from '../../Hooks/useToken';

const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [userId, setUserId] = useState('')

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
        <section className='lg:h-[90vh] md:h-[90vh] h-[80vh] lg:bg-base-200 md:bg-base-200 flex justify-center items-center'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <div className='flex items-center justify-between mb-2'>
                        <button onClick={() => setUserId('user@gmail.com')} className={userId === 'user@gmail.com' ? 'bg-secondary text-sm text-white py-1 px-3 rounded-lg shadow-md' : 'bg-base-300 text-sm text-white py-1 px-3 rounded-lg shadow-md'}>Login as a user</button>
                        <button onClick={() => setUserId('admin@gmail.com')} className={userId === 'admin@gmail.com' ? 'bg-secondary text-sm text-white py-1 px-3 rounded-lg shadow-md' : 'bg-base-300 text-sm text-white py-1 px-3 rounded-lg shadow-md'}>Login as a admin</button>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">


                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="input input-bordered w-full max-w-xs"
                                defaultValue={userId}
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

                        <div className="form-control w-full max-w-xs">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                type="Password"
                                placeholder="Password"
                                className="input input-bordered w-full max-w-xs"
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


                        <input type="submit" value="Sign in" className='btn btn-primary w-full' />

                    </form>
                    <p className='text-sm' >New to Doctors Portal? <Link to="/signUp" className='text-error hover:link'>Sign Up</Link></p>
                    <div className="divider">OR</div>
                    <button onClick={() => signInWithGoogle()} className="btn btn-accent border-primary ">CONTINUE WITH GOOGLE</button>

                </div>
            </div>
        </section>
    );
};

export default SignIn;