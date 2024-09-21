import React, { useState } from "react";
import "./Coursedetails.scss";

export default function Coursedetails({ courses, option }) {
  const [priceselected, setPriceselected] = useState("");
  const [categoryselected, setCategoryselected] = useState("");

  const handlePricechange = (e) => {
    setPriceselected(e.target.value);
  };
  const handlecategorychange = (e) => {
    setCategoryselected(e.target.value);
  };

  const filtercourese = courses.filter((c) => {
    return (
      priceselected === "" ||
      c.price === parseInt(priceselected) ||
      categoryselected === "" ||
      c.category === categoryselected
    );
  });

  return (
    <>
      <div className="course_details_container">
        <div className="course_title">
          <h1>Course Details</h1>
        </div>
        <div className="course_content">
          <div className="course_filter_header">
            <div className="course_header"></div>
            <div className="course_header">
              <p>Course name</p>
            </div>
            <div className="course_header">
              <select
                name="Price"
                value={priceselected}
                onChange={handlePricechange}
              >
                <option value="">Price</option>
                {option.map((opt, index) => {
                  return (
                    <option key={index} value={opt.price}>
                      &#8377;{opt.price}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="course_header">
              <select
                name="Category"
                value={categoryselected}
                onChange={handlecategorychange}
              >
                <option value="">Category</option>
                {option.map((opt, index) => {
                  return (
                    <option key={index} value={opt.category}>
                      {opt.category}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="course_header">
              <p>Teacher</p>
            </div>
            <div className="course_header">
              <p>Published on</p>
            </div>
          </div>
        </div>

        <div className="see_courses">
          {filtercourese.map((coursedata) => {
            const {
              id,
              image,
              coursename,
              price,
              category,
              teacher,
              publishDate,
            } = coursedata;

            return (
              <div className="see_courses_items_div" key={id}>
                <div className="see_course_content1">
                  <img src={image} alt="" />
                </div>
                <div className="see_course_content2">
                  <p>{coursename}</p>
                </div>
                <div className="see_course_content3">
                  <p>&#8377;{price}</p>
                </div>
                <div className="see_course_content4">
                  <p>{category}</p>
                </div>
                <div className="see_course_content5">
                  <p>{teacher}</p>
                </div>
                <div className="see_course_content6">
                  <p>{publishDate}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
