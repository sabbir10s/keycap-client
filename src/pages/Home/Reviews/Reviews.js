import React, { useEffect, useState } from 'react';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://nexiq-server.onrender.com/review')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='lg:mx-10 my-20'>
            <h2 className='text-primary text-center text-3xl font-bold pb-14 uppercase'>Customers Reviews</h2>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-16 content-center m-7'>
                {
                    reviews.map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;