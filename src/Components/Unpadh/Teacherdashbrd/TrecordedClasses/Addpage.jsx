import React from "react";
import "./Addpage.scss";
import { NavLink, useNavigate } from "react-router-dom";

export default function Addpage() {
  const navigate = useNavigate();

  const handleSubmit = () => {
    // navigate("/teacher_recorded_class/filled");
  };

  return (
    <>
      <div className="addpage_container">
        <form action="" onSubmit={handleSubmit}>
          <div className="addpage_course_img">
            <label htmlFor="title">Upload course img:</label>
            <input type="file" />
          </div>
          <div className="addpage_course_title_name">
            <label htmlFor="title">Course title:</label>
            <input type="text" placeholder="Enter course title name" />
          </div>
          <div className="addpage_course_teacher_name">
            <label htmlFor="title">Teacher name:</label>
            <input type="text" placeholder="Enter teacher name" />
          </div>
          <div className="addpage_course_price">
            <label htmlFor="title">Price:</label>
            <input type="text" placeholder="Enter price" />
          </div>
          <div className="addpage_course_level">
            <label htmlFor="title">Level:</label>
            <input type="text" placeholder="e.g(beginner, intermediate)" />
          </div>
          <div className="addpage_course_duration">
            <label htmlFor="title">Duration:</label>
            <input type="text" placeholder="6 (no need to write months)" />
          </div>
          <button className="addpage_btn">
            <NavLink to="/teacherdashboard/" id="addpage_btn_link">
              Save
            </NavLink>
          </button>
        </form>
      </div>
    </>
  );
}
