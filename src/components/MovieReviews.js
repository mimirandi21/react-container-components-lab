import React from "react";

const MovieReviews = (props) => (
  <ul className="review-list">
    {props.reviews.map((review) => (
      <li key={review.title + "-review"} className="review">
        <h3>{review.title}</h3> - {review.summary}
      </li>
    ))}
  </ul>
);

export default MovieReviews;
