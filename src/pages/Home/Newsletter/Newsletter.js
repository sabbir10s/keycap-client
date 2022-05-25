import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-primary py-10'>
            <h1 className='text-3xl text-center text-base-100'>NEWSLETTER</h1>

            <div className='flex justify-center'>
                <div className="card w-full max-w-lg">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-base-100">Email</span>
                            </label>
                            <input type="text" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className='flex gap-3 w-full'>
                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-100">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" className="input input-bordered w-full" />
                            </div>

                            <div className="form-control w-full">
                                <label className="label">
                                    <span className="label-text text-base-100">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" className="input input-bordered w-full" />
                            </div>
                        </div>
                        <p className='text-base-100 max-10 mt-5 text-sm'>
                            By providing your email address and cliking on "submit", you accept to receive by email our updates about Irimo products and SNA EUROPE other innovations and events.
                        </p>
                        <div className="form-control mt-6">
                            <button className="btn btn-outline border-base-100 text-base-100">submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Newsletter;