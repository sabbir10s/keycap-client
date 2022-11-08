import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../../components/Loading';
import BlogCart from './BlogCart';
import RecentBlog from './RecentBlog';

const Blogs = () => {
    const {
        data: blogs,
        isLoading,
    } = useQuery(["blogs"], () =>
        fetch("https://raw.githubusercontent.com/sabbir10s/server/main/bikeProBlogs.json", {
            method: "GET"
        }).then(res => res.json())
    );
    if (isLoading) {
        return <Loading />
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-4 gap-10 max-w-[1400px] mx-auto lg:px-20 px-2 my-5'>
            <div className='md:col-span-1'>
                <div>
                    <p className='font-bold text-xl border-l-2 border-primary pl-5 my-5'>Recent Post</p>
                </div>
                <div className='flex flex-col md:flex-row lg:flex-col'>
                    {
                        blogs.slice(0, 3).map(blog => <RecentBlog key={blog._id} blog={blog} />)
                    }
                </div>
            </div>
            <div className='col-span-3 grid lg:grid-cols-2 gap-10'>
                {
                    blogs.map(blog => <BlogCart key={blog._id} blog={blog}></BlogCart>)
                }
            </div>
        </div>
    );
};

export default Blogs;