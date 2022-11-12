import React from 'react';
import { toast } from 'react-toastify';
import './ContactFrom.css'
const ContactFrom = () => {
    const handleMessageSubmit = event => {
        event.preventDefault();
        const name = event.target.name.value
        if (name) {
            toast.success('Success Full');
            event.target.reset()
        }

    }
    return (
        <div className='bgImage'>
            <div className='bg-primary/90 py-10 md:py-20'>
                <h1 className='text-2xl text-center text-base-100 uppercase md:py-4'>Contact With Us</h1>

                <div className='flex justify-center'>
                    <div className="card w-full max-w-lg">
                        <div className="card-body">
                            <form onSubmit={handleMessageSubmit}>
                                <div className='flex flex-col lg:flex-row gap-3 w-full'>
                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base-100">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" required autoComplete='off' className="border border-primary p-[10px] rounded-md focus:outline-secondary" />
                                    </div>

                                    <div className="form-control w-full">
                                        <label className="label">
                                            <span className="label-text text-base-100">Subject</span>
                                        </label>
                                        <input type="text" name='subject' placeholder="Subject" required autoComplete='off' className="border border-primary p-[10px] rounded-md focus:outline-secondary" />
                                    </div>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base-100">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required autoComplete='off' className="border border-primary p-[10px] rounded-md focus:outline-secondary" />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-base-100">Message</span>
                                    </label>
                                    <textarea name="message" required id="" cols="30" rows="4" placeholder='Message' autoComplete='off' className="border border-primary p-[10px] rounded-md focus:outline-secondary" ></textarea>
                                </div>
                                <div className="form-control mt-5">
                                    <button className="bg-secondary hover:bg-orange-500 duration-300 shadow-lg uppercase text-lg py-[10px] text-black rounded-md">submit</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactFrom;