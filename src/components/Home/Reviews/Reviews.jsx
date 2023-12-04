import React from "react";
import { useQuery } from "react-query";
import Loading from "../../Loading";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const { data: reviews, isLoading } = useQuery(["reviews"], () =>
    fetch("https://keycap-server.vercel.app/review", {
      method: "GET",
    }).then((res) => res.json())
  );

  if (isLoading) {
    return <Loading />;
  }
  return (
    <div className="py-24">
      <h2 className="text-primary-700 text-center text-2xl font-bold uppercase pb-4">
        Customers Reviews
      </h2>

      <div
        id="#reviews"
        className="grid grid-cols-1 lg:grid-cols-3 gap-10 content-center mt-20"
      >
        {reviews.slice(0, 3).map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
