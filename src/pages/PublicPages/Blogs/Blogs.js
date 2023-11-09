import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../../components/Loading';
import RecentBlog from './RecentBlog';
import BlogCard from './BlogCard';
import Footer from '../../../components/Footer';

const Blogs = () => {


    const {
        data: blogs,
        isLoading,
    } = useQuery(["blogs"], () =>
        fetch("blogs.json", {
            method: "GET"
        }).then(res => res.json())
    );

    if (isLoading) {
        return <Loading />
    }
    if (blogs?.length === 0) {
        return <Loading />
    }
    return (
        <>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 container mx-auto px-2 my-10'>
                <div className='md:col-span-1'>
                    <div>
                        <p className='font-bold text-xl border-l-4 border-primary-700 pl-5 my-5'>Recent Post</p>
                    </div>
                    <div className='flex flex-col md:flex-row lg:flex-col'>
                        {
                            blogs.slice(0, 3).reverse().map(blog => <RecentBlog key={blog._id} blog={blog} />)
                        }
                    </div>
                </div>
                <div className='col-span-3 grid lg:grid-cols-2 gap-10'>
                    {
                        blogs.map(blog => <BlogCard key={blog._id} blog={blog}></BlogCard>)
                    }
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Blogs;