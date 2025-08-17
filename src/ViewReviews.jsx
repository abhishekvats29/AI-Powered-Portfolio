import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import jsPDF from "jspdf";

const ViewReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [editId, setEditId] = useState(null);
  const [editComment, setEditComment] = useState("");

  // Load reviews from localStorage on mount
  useEffect(() => {
    const savedReviews = JSON.parse(localStorage.getItem("reviews")) || [];
    // Show last review on top
    setReviews(savedReviews.reverse());
  }, []);

  // Delete review
  const handleDelete = (id) => {
    const updatedReviews = reviews.filter((review) => review.id !== id);
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews.reverse()));
  };

  // Start editing a review
  const handleEdit = (review) => {
    setEditId(review.id);
    setEditComment(review.comment);
  };

  // Save edited review
  const handleSave = (id) => {
    const updatedReviews = reviews.map((review) =>
      review.id === id ? { ...review, comment: editComment } : review
    );
    setReviews(updatedReviews);
    localStorage.setItem("reviews", JSON.stringify(updatedReviews.reverse()));
    setEditId(null);
    setEditComment("");
  };

  // Export all reviews as PDF with color/stars
  const exportPDF = () => {
    const doc = new jsPDF();
    const pageWidth = doc.internal.pageSize.getWidth();
    doc.setFillColor(18, 25, 47); // dark background
    doc.rect(0, 0, pageWidth, 3000, "F"); // big rectangle as background

    doc.setTextColor(255, 255, 255); // white text
    doc.setFont("helvetica");
    doc.setFontSize(16);
    doc.text("User Reviews", 14, 20);
    let y = 30;

    reviews.forEach((review, index) => {
      doc.setFontSize(12);
      // Stars using Unicode
      const filledStar = String.fromCharCode(9733); // ★
      const emptyStar = String.fromCharCode(9734);  // ☆
      const stars = filledStar.repeat(review.rating) + emptyStar.repeat(5 - review.rating);

      doc.setTextColor(255, 223, 0); // yellow stars
      doc.text(`${index + 1}. Rating: ${stars}`, 14, y);
      y += 6;

      doc.setTextColor(255, 255, 255);
      doc.text(`Comment: ${review.comment}`, 14, y);
      y += 6;
      doc.text(`Date: ${review.date}`, 14, y);
      y += 10;

      if (y > 270) { // new page if overflowing
        doc.addPage();
        y = 20;
      }
    });

    doc.save("reviews.pdf");
  };

  // Helper to render star rating visually
  const renderStars = (count) => {
    return [...Array(5)].map((_, i) => (
      <span key={i} className={i < count ? "text-yellow-400" : "text-gray-400"}>
        ★
      </span>
    ));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-navyStart to-navyEnd text-white p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6">User Reviews</h1>

      <div className="mb-4 flex justify-center gap-4 flex-wrap">
        <Link to="/">
          <button className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-lg">
            Back to Home
          </button>
        </Link>

        {/* Export PDF button with yellow */}
        <button
          onClick={exportPDF}
          className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 rounded-lg"
        >
          Export as PDF
        </button>
      </div>

      {reviews.length === 0 ? (
        <p className="text-center text-gray-300">No reviews yet.</p>
      ) : (
        <div className="max-w-3xl mx-auto space-y-4">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white/10 p-4 rounded-xl shadow-md border border-blue-400/30 backdrop-blur-md"
            >
              <div className="flex items-center gap-2">
                <p className="text-yellow-400 font-semibold">{renderStars(review.rating)}</p>
                <span className="text-sm text-gray-300">({review.rating}/5)</span>
              </div>

              {editId === review.id ? (
                <div className="mt-2 flex flex-col gap-2">
                  <textarea
                    value={editComment}
                    onChange={(e) => setEditComment(e.target.value)}
                    className="w-full p-2 rounded-md bg-white/20 text-white placeholder-gray-300 focus:outline-none text-sm"
                    rows={2}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleSave(review.id)}
                      className="px-3 py-1 bg-blue-500 hover:bg-blue-600 rounded-lg text-sm"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditId(null)}
                      className="px-3 py-1 bg-gray-500 hover:bg-gray-600 rounded-lg text-sm"
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              ) : (
                <>
                  <p className="mt-2">{review.comment}</p>
                  <p className="text-sm text-gray-400 mt-1">{review.date}</p>
                  <div className="mt-3 flex gap-2">
                    <button
                      onClick={() => handleDelete(review.id)}
                      className="px-3 py-1 bg-red-500 hover:bg-red-600 rounded-lg text-sm"
                    >
                      Delete
                    </button>
                    {/* Edit button with green */}
                    <button
                      onClick={() => handleEdit(review)}
                      className="px-3 py-1 bg-green-500 hover:bg-green-600 rounded-lg text-sm"
                    >
                      Edit
                    </button>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ViewReviews;
