import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { FaStar } from "react-icons/fa";
import "./AddReview.css";
import auth from "../../../firebase.init";
import Button from "../../../shared/Button/Button";

const AddReview = () => {
  const [user] = useAuthState(auth);
  const [starRating, setStarRating] = useState(null);
  const [hover, setHover] = useState(null);

  const submitUserReview = (event) => {
    event.preventDefault();
    const rating = starRating;
    const comment = event.target.comment.value;
    const userName = user?.displayName;
    const userImage = user?.photoURL;
    const reviewInfo = {
      rating,
      comment,
      userName,
      userImage,
    };

    const url = `http://localhost:5000/review`;

    fetch(url, {
      method: "POST",
      body: JSON.stringify(reviewInfo),
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("access-token")}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        event.target.reset();
        toast.success("Your Review Successfully Updated");
      });
  };
  return (
    <div className="mx-5">
      <p className="text-xl mt-5 font-bold">Give Your Review</p>
      <div className="divider"></div>

      <div className="max-w-sm">
        <form onSubmit={submitUserReview}>
          <div>
            <div className="mt-4 flex gap-1">
              {[...Array(5)]?.map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setStarRating(ratingValue)}
                    />
                    <FaStar
                      className="cursor-pointer duration-300"
                      color={
                        ratingValue <= (hover || starRating)
                          ? "#ffc107"
                          : "#e4e5e9"
                      }
                      size={30}
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <div className="my-3">
              <p className="text-base-300 block">Review</p>
              <textarea
                className="border border-primary-700 text-sm pl-2 py-1 rounded-md w-full mt-1"
                name="comment"
                cols="30"
                rows="5"
              ></textarea>
            </div>
          </div>
          <Button type="submit">Submit Review</Button>
        </form>
      </div>
    </div>
  );
};

export default AddReview;
