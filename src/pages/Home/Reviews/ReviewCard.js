import React from 'react';
import ReactStars from "react-stars";
import { FaUserAlt } from 'react-icons/fa';
const ReviewCard = ({ review }) => {
    const { rating, comment, userName, userImage } = review;
    return (
        <div className='min-w-[300px] border p-4 shadow-lg rounded-xl mb-4 lg:my-0'>
            <div className='flex items-center justify-center mt-[-45px]'>
                {
                    review.userImage ?
                        <img className='rounded-full w-[80px] border-[2px] border-primary-700 p-[2px]' src={userImage} alt="Customer_Image" />
                        :
                        <div className='bg-gray-100 rounded-full w-[80px] h-[80px] border-[2px] border-primary-700 p-[2px] flex justify-center items-center text-4xl'> <FaUserAlt /> </div>
                }
            </div>
            <div className='flex items-center gap-3 mt-5'>
                <p className='font-bold text-primary-700'>{userName} </p>
                <ReactStars
                    size={20}
                    value={rating}
                    edit={false}
                ></ReactStars>
            </div>
            <p><small className='text-base-300'>{comment.slice(0, 150)}...</small></p>
        </div>
    );
};

export default ReviewCard;