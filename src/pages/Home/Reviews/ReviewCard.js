import React from 'react';

const ReviewCard = ({ review }) => {
    // console.log(review);
    const { name, picture, rating, _review } = review;
    return (
        <div className='min-w-[300px] border p-3 shadow-lg rounded-xl'>
            <div className='flex items-center justify-center mt-[-45px]'>
                <img className='rounded-full w-[80px]' src={picture} alt="Customer_Image" />
            </div>
            <div className='flex gap-3 mt-5'>
                <p className='font-bold '>{name} </p>
                <p className='text-amber-600'> Rating {rating} out of 5 </p>
            </div>
            <p><small>{_review}</small></p>
        </div>
    );
};

export default ReviewCard;