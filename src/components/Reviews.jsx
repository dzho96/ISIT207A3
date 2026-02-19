import React from "react";

function Reviews() {
  // Example hardcoded reviews
  const reviews = [
    { name: "Alice", text: "Great experience adopting my cat!" },
    { name: "Bob", text: "Staff were very helpful and caring." },
  ];
  return (
    <div className="reviews">
      <h2>Member Reviews</h2>
      <ul>
        {reviews.map((review, idx) => (
          <li key={idx}>
            <strong>{review.name}:</strong> {review.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
