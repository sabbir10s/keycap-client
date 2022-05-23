import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className='hero min-h-[89vh] bg-base-200'>
            <div className='text-center max-w-md'>
                <p className='text-7xl font-bold'>404</p>
                <p className='font-bold text-xl'>This Page Isn't Available</p>
                <p>The link may be broken, or the page may have been removed. Check to see if the link you're trying to open is correct.</p>
                <Link to='/home' className='btn btn-outline mt-3'>Return Home</Link>
            </div>

        </div>
    );
};

export default NotFound;