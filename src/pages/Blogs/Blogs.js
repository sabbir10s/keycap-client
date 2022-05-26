import React from 'react';
import BlogPostFive from './BlogPostFive';
import BlogPostFour from './BlogPostFour';
import BlogPostOne from './BlogPostOne';
import BlogPostSix from './BlogPostSix';
import BlogPostThree from './BlogPostThree';
import BlogPostTwo from './BlogPostTwo';
import Footer from '../../components/Footer';

const Blogs = () => {
    return (
        <>
            <div className='mx-10 mt-5 flex flex-col justify-center items-center'>
                <BlogPostOne />
                <BlogPostTwo />
                <BlogPostThree />
                <BlogPostFour />
                <BlogPostFive />
                <BlogPostSix />

            </div>
            <Footer />
        </>
    );
};

export default Blogs;