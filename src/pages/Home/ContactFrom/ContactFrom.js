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
            <div className='bg-primary-700/90 py-10 md:py-20'>
                <h1 className='text-4xl text-center text-gray-100 md:pb-6'>Contact with us</h1>

                <div className='flex justify-center'>
                    <div className="w-full max-w-lg mx-2">
                        <div>
                            <form className=' space-y-4' onSubmit={handleMessageSubmit}>
                                <div className='flex flex-col lg:flex-row gap-3 w-full'>
                                    <div className="w-full flex flex-col">
                                        <label >
                                            <span className="text-gray-100 text-SM ">Name</span>
                                        </label>
                                        <input type="text" name='name' placeholder="Name" required autoComplete='off' className="border border-primary-700 p-[10px] rounded-md focus:outline-secondary" />
                                    </div>

                                    <div className="w-full flex flex-col">
                                        <label >
                                            <span className="text-gray-100 text-SM ">Subject</span>
                                        </label>
                                        <input type="text" name='subject' placeholder="Subject" required autoComplete='off' className="border border-primary-700 p-[10px] rounded-md focus:outline-secondary" />
                                    </div>
                                </div>
                                <div className="w-full flex flex-col">
                                    <label >
                                        <span className="text-gray-100 text-SM ">Email</span>
                                    </label>
                                    <input type="email" name='email' placeholder="email" required autoComplete='off' className="border border-primary-700 p-[10px] rounded-md focus:outline-secondary" />
                                </div>

                                <div className="w-full flex flex-col">
                                    <label >
                                        <span className="text-gray-100 text-SM ">Message</span>
                                    </label>
                                    <textarea name="message" required id="" cols="30" rows="4" placeholder='Message' autoComplete='off' className="border border-primary-700 p-[10px] rounded-md focus:outline-secondary" ></textarea>
                                </div>
                                <div className=" mt-5">
                                    <button className="text-white bg-secondary-500 hover:bg-orange-600 duration-300 shadow-lg uppercase text-lg py-[10px] rounded-md w-full">submit</button>
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