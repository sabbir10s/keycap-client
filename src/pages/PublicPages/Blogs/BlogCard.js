import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCard = ({ blog }) => {
    const navigate = useNavigate()
    const { _id, date, title, article, img } = blog
    const handleBlogDetails = () => {
        navigate(`/blog/${_id}`)
    }
    return (
        <div className='bg-white'>
            <div className='relative'>
                <img src={img} alt="" />
                <p className='absolute bottom-0 bg-gray-700 px-3 py-1 text-white'>{date}</p>
            </div>
            <div className='p-2'>
                <h2 className='text-lg my-5'>{title}</h2>
                <article className='text-base-300'>{article[0].slice(0, 150)}</article>
                <button onClick={handleBlogDetails} className='uppercase bg-primary-700 hover:bg-black text-gray-100 px-5 py-2 mt-5'>Read More</button>
            </div>
        </div>
    );
};

export default BlogCard;