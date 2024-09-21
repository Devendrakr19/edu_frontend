import React from "react";
import "../addcoursefiles/coursetitle.css";

function Coursetitle() {
  return (
    <div className="title-main">
      <div className="title-h2">
        <h2> Course Title</h2>
      </div>
      <div className="write">
        <input type="textarea" placeholder="Write title here....." />
      </div>
      <div className="desc">
        <h2>Course Description</h2>
      </div>

      <div className="write2">
        <textarea type="text" placeholder="Write title here....." />
      </div>
    </div>
  );
}

export default Coursetitle;
