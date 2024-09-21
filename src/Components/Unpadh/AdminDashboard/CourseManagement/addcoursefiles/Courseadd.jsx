import React from "react";
import "../addcoursefiles/courseadd.css";

export default function Courseadd() {
  return (
    <div className="container_main">
      <div className="Add-course">
        <div className="course">
          <h2> Add a Course</h2>
          <h5>Orders placed across your store</h5>
        </div>

        <div className="course-button">
          <div>
            <button type="button" className="discard">
              discard
            </button>
          </div>

          <div>
            {" "}
            <button type="button" className="save">
              {" "}
              Save draft
            </button>
          </div>

          <div>
            <button type="button" className="Publish">
              {" "}
              Publish Course
            </button>{" "}
          </div>
        </div>
      </div>
    </div>
  );
}
