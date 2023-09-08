import React from 'react';

const PrimaryButton = ({ children }) => {
    return (
        <button className='bg-primary-700 text-gray-100 px-7 py-2 rounded'>{children}</button>
    );
};

export default PrimaryButton;