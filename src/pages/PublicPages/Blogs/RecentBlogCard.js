import React from 'react';
import { useNavigate } from 'react-router-dom';

const RecentBlogCard = ({ blog }) => {
    const { _id, date, title, img } = blog

    const navigate = useNavigate()
    const handleBlogDetails = () => {
        navigate(`/blog/${_id}`)
    }
    return (
        <div className='flex gap-5 items-center my-5'>
            <div>
                <img className='w-32' src={img} alt="" />
            </div>
            <div className='col-span-2'>
                <h2 onClick={handleBlogDetails} className='my-1 hover:text-secondary-500 cursor-pointer'>{title.slice(0, 25)}</h2>
                <p className='text-sm text-base-300'>{date}</p>
            </div>
        </div>
    );
};

export default RecentBlogCard;