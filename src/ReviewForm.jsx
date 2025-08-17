import React, { useState } from "react";
import { Link } from "react-router-dom";

const ReviewForm = ({ renderStars, rating, setRating }) => {
  const [comment, setComment] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!rating || !comment.trim()) {
      setSuccessMessage("⚠️ Please provide rating and comment.");
      return;
    }
    const newReview = {
      id: Date.now(),
      rating,
      comment,
      date: new Date().toLocaleString(),
    };
    const existingReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    existingReviews.push(newReview);
    localStorage.setItem("reviews", JSON.stringify(existingReviews));

    setComment("");
    setRating(0);
    setSuccessMessage("✅ Review submitted! Thank you!");
  };

  return (
    <div className="mt-6 w-full flex flex-col md:flex-row justify-center gap-6">
      {/* Permanent User Review (Left) */}
      <div className="w-full md:w-[45%] bg-white/10 p-4 rounded-lg shadow-lg flex flex-col items-center
        border border-blue-400/50 backdrop-blur-lg relative hover:shadow-blue-500/40 transition">
        <p className="text-white font-semibold text-sm sm:text-base">User Reviews</p>
        <div className="flex justify-center mt-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 15l-5.878 3.09 1.122-6.545L.488 6.91l6.564-.955L10 0l2.948 5.955 6.564.955-4.756 4.635 1.122 6.545z" />
            </svg>
          ))}
        </div>
        <span className="text-yellow-400 font-bold text-sm sm:text-base mt-1">
          4.9 / 5.0
        </span>
        <p className="text-gray-300 text-xs sm:text-sm mt-2 text-center">
          “This app is amazing! Super fast, clean design, and really useful. Highly recommended.” – User
        </p>
      </div>

      {/* Rating & Comment Form (Right) */}
      <form
        onSubmit={handleSubmit}
        className="w-full md:w-[45%] bg-white/10 p-3 sm:p-4 rounded-lg shadow-lg 
          border border-blue-400/50 backdrop-blur-lg relative hover:shadow-blue-500/40 transition flex flex-col items-center gap-2"
      >
        <div className="flex">{renderStars(rating, true)}</div>
        
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write your review..."
          className="w-full p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none text-sm sm:text-base"
          rows={2}
        />

        {/* Buttons side by side */}
        <div className="flex flex-col sm:flex-row gap-3 mt-2 w-full justify-center">
          <button
            type="submit"
            className="flex-1 px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-xl shadow-md transition text-sm sm:text-base"
          >
            Submit Review
          </button>

          <Link to="/reviews" className="flex-1">
            <button
              type="button"
              className="w-full px-4 py-2 bg-[#008080] hover:bg-[#006666] text-white font-semibold rounded-xl shadow-md transition text-sm sm:text-base"
            >
              View Reviews
            </button>
          </Link>



        </div>

        {successMessage && (
          <p className={`mt-2 font-medium text-sm ${
            successMessage.startsWith("⚠️") ? "text-yellow-400" : "text-green-400"
          }`}>
            {successMessage}
          </p>
        )}
      </form>
    </div>
  );
};

export default ReviewForm;
