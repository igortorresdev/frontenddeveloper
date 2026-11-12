import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
import { faStar as faEmptyStar } from "@fortawesome/free-regular-svg-icons";

function StarRating({ rating }) {

  const fullStars = Math.floor(rating); // .floor rounds it down, e.g., 4.7 becomes 4
  const halfStar = rating % 1 >= 0.5; // checks if the fractional part is at least 0.5
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0); // calculates the number of empty stars

  return (
    <div className="book__ratings" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: fullStars }, (_, index) => (
        <FontAwesomeIcon key={`full-${index}`} icon={faStar} />
      ))}

      {halfStar && (
        <FontAwesomeIcon icon={faStarHalfStroke} />
      )}

      {Array.from({ length: emptyStars }, (_, index) => (
        <FontAwesomeIcon key={`empty-${index}`} icon={faEmptyStar} />
      ))}
    </div>
  );
}

export default StarRating;

