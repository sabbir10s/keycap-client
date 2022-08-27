import React from 'react';
import ReactStars from "react-stars";
import userIcon from '../../../images/1946429.png'
const ReviewCard = ({ review }) => {
    const { rating, comment, userName, userImage } = review;
    return (
        <div className='min-w-[300px] border p-3 shadow-lg rounded-xl'>
            <div className='flex items-center justify-center mt-[-45px]'>
                {
                    review.userImage ?
                        <img className='rounded-full w-[80px]' src={userImage} alt="Customer_Image" />
                        :
                        <img className='rounded-full w-[80px]' src={userIcon} alt="Customer_Image" />
                }
            </div>
            <div className='flex gap-3 mt-5'>
                <p className='font-bold '>{userName} </p>
                <ReactStars
                    size={20}
                    value={rating}
                    edit={false}
                ></ReactStars>
            </div>
            <p><small>{comment}</small></p>
        </div>
    );
};

export default ReviewCard;