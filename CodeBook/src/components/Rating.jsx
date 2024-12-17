/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
import React from "react";
import { FaStar } from "react-icons/fa";

const Rating = ({ rating }) => {
  console.log("rat", rating);

  const newRatingArr = Array(5).fill(false);
  for (var i = 0; i < rating; i++) {
    newRatingArr[i] = true;
  }

  return (
    <div className="flex">
      {newRatingArr.map((ratingArr) => ( 
        <article>{ratingArr ? <FaStar className="text-[20px]" /> : ""}</article>
      ))}
    </div>
  );
};

export default Rating;
