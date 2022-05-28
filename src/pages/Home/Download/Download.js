import React from 'react';
import PrimaryButton from '../../../components/PrimaryButton';
import catalog from '../../../images/catalog.jpg'
const Download = () => {
    return (
        <div className='md:my-12 mx-2 my-5 flex'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-20 items-center'>
                <div className='grid grid-cols-1 lg:grid-cols-2 col-span-2 gap-5 items-center justify-items-center'>
                    <img className='w-[300px] rounded-md' src={catalog} alt="" />
                    <div className='mx-5 md:mx-0'>
                        <h2 className='text-2xl font-bold uppercase'>Download Catalogue</h2>
                        <small className='block my-5'>A selection of printed materials. You can consult directly on-line.</small>
                        <PrimaryButton>Got to Download</PrimaryButton>
                    </div>
                </div>
                <div className='mx-5 md:mx-0'>
                    <h2 className='text-2xl font-bold'>CONTACT US</h2>
                    <small className='block my-5'>You can get int touch using our contact form, your message will be sent directly to your country contact.</small>
                    <button className='bg-secondary text-base-100 px-7 py-2 rounded'>get in touch</button>
                </div>
            </div>
        </div>
    );
};

export default Download;