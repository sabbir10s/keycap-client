import React from 'react';
import reactLogo from '../.././images/blog/react logo.avif';

const BlogPostOne = () => {
    return (
        <div className='mt-10 max-w-lg'>
            <h1 className='text-3xl text-primary font-bold'> How will you improve the performance of a React Application?</h1>
            <img className='mt-5' src={reactLogo} alt="" />
            <div className='mt-5'>
                <div>
                    <span className='font-bold'>Avoid bundling all of the front end code in a single file: </span>
                    <span className='text-base-300'>By splitting the files into resource and on-demand code files we can reduce the time consumed in presenting bundled files to the browser transformers.</span>
                </div>
                <div>
                    <span className='font-bold'>Avoid inline function in the render method: </span>
                    <span className='text-base-300'>If we use the inline function, the function will generate a new instance of the object in every render and there will be multiple instances of these functions which will lead to consuming more time in garbage collection. To optimize that we can define functions outside the render method and call them wherever required.</span>
                </div>
                <div>
                    <span className='font-bold'>Avoid Adding Extra Nodes to the DOM by using React. Fragment </span>
                    <span className='text-base-300'>When we need to render the multiple elements in a component or return a group of related items, using a <code className='font-bold'>Div</code> or another element to enclose the elements could add a node in the DOM. So to avoid this, we can use React Fragmentin React, which will not add any other nodes to the DOM.

                        It is one of the great ways to avoid adding any unnecessary nodes to the DOM and web components as children for React. Fragment could also be used and also mark it with a key.</span>
                </div>

                <div>
                    <span className='font-bold'>Avoid extra tags by using React fragments: </span>
                    <span className='text-base-300'>Using react fragments decreases the no. of additional tags and satisfies the necessity of having a single parent element in the component.</span>
                </div>
            </div>
        </div>
    );
};

export default BlogPostOne;