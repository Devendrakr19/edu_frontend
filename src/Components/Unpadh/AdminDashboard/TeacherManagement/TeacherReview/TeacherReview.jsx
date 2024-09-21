import "./TeacherReview.scss";
import React, { useState } from "react";
import { FaStar } from "react-icons/fa6";

export default function TeacherReview({ teacherreviewrating }) {
  const [selectstar, setSelectstar] = useState("all");

  const renderSters = (rating) => {
    const stars = [];
    for (let i = 0; i < rating; i++) {
      stars.push(<FaStar key={i} />);
    }
    return <div className="star_container">{stars}</div>;
  };

  const filterSelectedStar = teacherreviewrating.filter((review) => {
    if (selectstar === "all") {
      return true;
    }
    return review.rating.toString() === selectstar;
  });

  return (
    <div className="teacher_review_container">
      <div className="teacher_review_title">
        <h1>Rating & Review </h1>
      </div>
      <div className="teacher_review_content_title">
        <table>
          <thead>
            <tr id="thead_tr">
              <th>Student name</th>
              <th>
                <select
                  name="star"
                  id="selct_star"
                  value={selectstar}
                  onChange={(e) => setSelectstar(e.target.value)}
                >
                  <option value="all">All</option>
                  <option value="5">5 star</option>
                  <option value="4">4 star</option>
                  <option value="3">3 star</option>
                  <option value="2">2 star</option>
                  <option value="1">1 star</option>
                </select>
              </th>
              <th>Review</th>
              <th>Course name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {filterSelectedStar.map((teacherReviewdata) => {
              const { id, studentname, rating, review, coursename, date } =
                teacherReviewdata;
              return (
                <tr key={id} id="tbody_tr">
                  <td id="std_name">{studentname}</td>
                  <td id="rating">{renderSters(rating)}</td>
                  <td id="review">{review}</td>
                  <td id="course_name">{coursename}</td>
                  <td id="date">{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
