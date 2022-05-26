import React from 'react';
import reactState from '../.././images/blog/react state.png';

const BlogPostTwo = () => {
    return (
        <div className='mt-10 max-w-lg'>
            <h1 className='text-3xl text-primary font-bold'> What are the different ways to manage a state in a React application?</h1>
            <img className='w-[500px] mt-5' src={reactState} alt="" />
            <div className='mt-5'>
                <div>
                    <span className='font-bold text-xl'>There are four main types of state you need to properly manage in your React apps:</span>
                    <span>
                        <ol className='text-xl ml-10'>
                            <li type='1'>Local state</li>
                            <li type='1'>Global state</li>
                            <li type='1'>Server state</li>
                            <li type='1'>URL state</li>
                        </ol>
                    </span>
                </div>
            </div>

        </div>
    );
};

export default BlogPostTwo;