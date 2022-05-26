import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import PrimaryButton from '../../../../components/PrimaryButton';
import auth from '../../../../firebase.init';

const AddReview = () => {
    const [user] = useAuthState(auth);

    const submitUserReview = event => {
        event.preventDefault()
        const rating = event.target.rating.value;
        const comment = event.target.comment.value;
        const userName = user?.displayName;
        const userImage = user?.photoURL;
        const reviewInfo = { rating, comment, userName, userImage };

        const url = `https://quiet-fjord-62553.herokuapp.com/review`;

        fetch(url, {
            method: 'POST',
            body: JSON.stringify(reviewInfo),
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            },
        })
            .then((res) => res.json())
            .then((data) => {
                event.target.reset();
                toast.success("Your Review Successfully Updated")
            });
    }
    return (
        <div className='mx-5'>
            <p className='text-xl mt-5 font-bold'>Give Your Review</p>
            <div className="divider"></div>

            <div className='max-w-sm'>
                <form onSubmit={submitUserReview}>
                    <div>
                        <div className='flex items-center'>
                            <p className='text-base-300'>Give Your Rating: </p>
                            <select className='text-secondary text-xl' name="rating">
                                <option value="5">5</option>
                                <option value="4">4</option>
                                <option value="3">3</option>
                                <option value="2">2</option>
                                <option value="1">1</option>
                            </select>
                        </div>
                        <div className='my-3'>
                            <p className='text-base-300 block'>Review</p>
                            <textarea className='border border-primary text-sm pl-2 py-1 rounded-md w-full mt-1' name="comment" cols="30" rows="5"></textarea>
                        </div>
                    </div>
                    <PrimaryButton type='submit'>Submit Review</PrimaryButton>
                </form>
            </div>
        </div>
    );
};

export default AddReview;