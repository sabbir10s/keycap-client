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
        <div className='py-24'>
            <h2 className='text-primary text-center text-2xl font-bold uppercase pb-4'>Customers Reviews</h2>

            <div id='#reviews' className='grid grid-cols-1 lg:grid-cols-3 gap-10 content-center mt-20'>
                {
                    reviews.slice(0, 3).map(review => <ReviewCard key={review._id} review={review}></ReviewCard>)
                }
            </div>
        </div>
    );
};

export default Reviews;