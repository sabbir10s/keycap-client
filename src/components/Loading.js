import React from 'react';

const Loading = () => {
    return (
        <div className='flex justify-center items-center h-[80vh]'>
            <div style={{ border: "top", color: "transparent" }}
                className="w-16 h-16 border-4 border-primary border-dashed rounded-full animate-spin"></div>

        </div>
    );
};

export default Loading;