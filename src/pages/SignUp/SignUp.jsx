import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useNavigate } from 'react-router-dom';
import Loading from '../../components/Loading';
import useToken from '../../hooks/useToken';
import GoogleSignIn from '../../shared/GoogleSignIn';


const SignUp = () => {
    const { register, formState: { errors }, reset, handleSubmit } = useForm();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser)

    const navigate = useNavigate()
    let signInError;

    if (loading || gLoading || updating) {
        return <Loading />
    }
    if (error || gError || updateError) {
        signInError = <p className='text-red-500 pb-4'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }
    if (token) {
        navigate('/')
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        reset()
    };

    return (
        <section className='flex justify-center items-center pt-6'>
            <div className="md:w-96 border rounded-lg p-6">
                <div className='space-y-4'>
                    <h2 className='text-2xl lg:text-3xl font-semibold text-black'>Sign up</h2>
                    <form className='space-y-4' onSubmit={handleSubmit(onSubmit)}>

                        <div className="w-full">

                            <label>
                                <span className="text-black font-semibold text-sm">Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="Your Name"
                                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
                                {...register("name", {
                                    required: {
                                        value: true,
                                        message: "Name is Required"
                                    }
                                })}

                            />
                            <label >
                                {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}

                            </label>
                        </div>
                        <div className="w-full">

                            <label >
                                <span className="text-black font-semibold text-sm">Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="Your Email"
                                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
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
                            <label >
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}

                            </label>
                        </div>

                        <div className="w-full">
                            <label >
                                <span className="text-black font-semibold text-sm">Password</span>
                            </label>
                            <input
                                type="Password"
                                placeholder="Password"
                                className="w-full border border-gray-500 py-2 pl-2 rounded-lg"
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
                            <label >
                                {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}

                            </label>
                        </div>
                        {signInError}
                        <input type="submit" value="Sign up" className='bg-primary-700 hover:bg-primary-600 duration-300 text-white py-2 w-full rounded-lg cursor-pointer shadow-lg' />
                    </form>
                    <div className='flex items-center space-x-2'>
                        <div className='w-full border'></div>
                        <span>OR</span>
                        <div className='w-full border'></div>
                    </div>
                    <GoogleSignIn signInWithGoogle={signInWithGoogle} />

                    <div className='text-sm flex flex-col space-y-1 justify-center items-center' >
                        <span className='text-gray-500'>Already have a account ?</span>
                        <Link to="/signIn" className='text-primary-700 font-semibold'>Sign in</Link>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default SignUp;