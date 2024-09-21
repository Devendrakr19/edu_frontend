import React, { useState } from "react";
import "./StudentList.scss";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function StudentList({ studentlistdata }) {
  const [filtername, setFiltername] = useState("");

  const handlefilterchange = (e) => {
    setFiltername(e.target.value);
  };

  return (
    <>
      <div className="student_list_container">
        <div className="student_list_title">
          <h1>Student list</h1>
        </div>
        <div className="student_list_filter_div">
          <div className="search_area">
            <IoSearch className="Iosearch_bar" />
            <input
              type="text"
              placeholder="Search students"
              onChange={handlefilterchange}
              value={filtername}
            />
          </div>
        </div>
        <div className="student_list_title_div">
          <div className="student_list_title">
            <div className="student_list_content">
              <p>Students name</p>
            </div>
            <div className="student_list_content">
              <p>Email</p>
            </div>
            <div className="student_list_content">
              <p>City</p>
            </div>
            <div className="student_list_content">
              <p>Country</p>
            </div>
            <div className="student_list_content">
              <p>Last seen</p>
            </div>
          </div>
        </div>

        <div className="student_list_details_div">
          {studentlistdata
            .filter((studentDatas) =>
              studentDatas.studentname
                .toLowerCase()
                .includes(filtername.toLowerCase())
            )
            .map((studentData) => {
              const { id, image, studentname, email, address, lastseen } =
                studentData;
              return (
                <div className="student_list_details" key={id}>
                  <div className="student_list_details_content1">
                    <img src={image} alt="" />
                  </div>
                  <div className="student_list_details_content2">
                    <p>
                      <NavLink to={`/admin_dashboard/detailsofstudent/${id}`}>
                        {studentname}
                      </NavLink>
                    </p>
                  </div>
                  <div className="student_list_details_content3">
                    <p>{email}</p>
                  </div>
                  <div className="student_list_details_content4">
                    <p>{address.city}</p>
                  </div>
                  <div className="student_list_details_content5">
                    <p>{address.country}</p>
                  </div>
                  <div className="student_list_details_content6">
                    <p>{lastseen} hour ago</p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
