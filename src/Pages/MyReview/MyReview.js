import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const MyReview = () => {
  const { user } = useContext(AuthContext);
  const {
    data: reviews = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["review", user?.email],
    queryFn: async () => {
      const res = await fetch(
        `https://foodies-review-server.vercel.app/currentUserReview?email=${user?.email}`
      );
      const data = await res.json();
      return data;
    },
  });

  const handleDeleteReview = (review) => {
    fetch(`https://foodies-review-server.vercel.app/review/${review._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Review deleted successfully`);
          refetch();
        }
      });
  };
  return (
    <div>
      <h1 className="text-3xl font-bold text-center my-8"> My Reviews</h1>
      <div className="w-4/5 mx-auto grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2 mb-8">
        {reviews.map((review) => (
          <div key={review._id} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title">{review.title}</h2>
              <p>{review.text}</p>
              <div className="card-actions justify-center">
                <Link to={`/update/${review._id}`}>
                  <button className="btn btn-primary">Update</button>
                </Link>
                <button
                  onClick={() => handleDeleteReview(review)}
                  className="btn btn-error"
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyReview;
