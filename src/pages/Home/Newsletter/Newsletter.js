import React from 'react';

const Newsletter = () => {
    return (
        <div className='bg-primary py-10'>
            <h1 className='text-3xl text-center text-base-100'>NEWSLETTER</h1>

            <div className='flex justify-center'>
                <div class="card w-full max-w-lg">
                    <div class="card-body">
                        <div class="form-control">
                            <label class="label">
                                <span class="label-text text-base-100">Email</span>
                            </label>
                            <input type="text" placeholder="email" class="input input-bordered" />
                        </div>
                        <div className='flex gap-3 w-full'>
                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text text-base-100">First Name</span>
                                </label>
                                <input type="text" placeholder="First Name" class="input input-bordered w-full" />
                            </div>

                            <div class="form-control w-full">
                                <label class="label">
                                    <span class="label-text text-base-100">Last Name</span>
                                </label>
                                <input type="text" placeholder="Last Name" class="input input-bordered w-full" />
                            </div>
                        </div>
                        <p className='text-base-100 max-10 mt-5 text-sm'>
                            By providing your email address and cliking on "submit", you accept to receive by email our updates about Irimo products and SNA EUROPE other innovations and events.
                        </p>
                        <div class="form-control mt-6">
                            <button class="btn btn-outline border-base-100 text-base-100">submit</button>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Newsletter;