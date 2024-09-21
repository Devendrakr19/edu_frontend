import React from "react";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
// import { AiOutlineStar } from "react-icons/ai";
import { FaRegStar } from "react-icons/fa";

function StarRating({ star }) {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {star >= index + 1 ? (
          <FaStar />
        ) : star >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <>
      <div className="flex text-yellow-400">{ratingStar}</div>
    </>
  );
}

export default StarRating;
