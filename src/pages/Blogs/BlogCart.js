import React from 'react';
import { useNavigate } from 'react-router-dom';

const BlogCart = ({ blog }) => {
    const navigate = useNavigate()
    const { _id, date, title, article, img } = blog
    const handleBlogDetails = () => {
        navigate(`/blog/${_id}`)
    }

    return (
        <div>
            <div className='relative'>
                <img src={img} alt="" />
                <p className='absolute bottom-0 bg-[#333333] px-3 py-1 text-white'>{date}</p>
            </div>
            <h2 className='text-lg my-5'>{title.slice(0, 25)}</h2>
            <article className='text-base-300'>{article.slice(0, 150)}</article>
            <button onClick={handleBlogDetails} className='uppercase bg-primary text-base-100 px-5 py-2 mt-5'>Read More</button>
        </div>
    );
};

export default BlogCart;