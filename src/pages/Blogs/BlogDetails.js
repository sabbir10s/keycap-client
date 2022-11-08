import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading';

const BlogDetails = () => {
    const {
        data: blogs,
        isLoading,
    } = useQuery(["blogs"], () =>
        fetch("blogs.json", {
            method: "GET"
        }).then(res => res.json())
    );
    const { blogID } = useParams()
    if (isLoading) {
        return <Loading />
    }
    const blog = blogs.find(b => b._id === parseInt(blogID))
    const { date, title, article, img } = blog
    return (
        <div className='max-w-[1400px] mx-auto lg:px-20 px-2 my-5'>
            <div className='relative'>
                <img src={img} alt="" />
                <p className='absolute bottom-0 bg-[#333333] px-3 py-1 text-white'>{date}</p>
            </div>
            <h2 className='text-lg my-5'>{title}</h2>
            <article className='text-base-300'>{article}</article>
        </div>
    );
};

export default BlogDetails;