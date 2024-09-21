import React, { useState } from "react";
import "./TeacherList.scss";
import { IoSearch } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export default function TeacherList({ teacherlistdata }) {
  const [filtername, setFiltername] = useState("");

  const handlefilterchange = (e) => {
    setFiltername(e.target.value);
  };

  return (
    <>
      <div className="teacher_list_container">
        <div className="teacher_list_title">
          <h1>Teachers list</h1>
        </div>
        <div className="teacher_list_filter_div">
          <div className="search_area">
            <IoSearch className="Iosearch_bar" />
            <input
              type="text"
              placeholder="Search teachers by ID"
              onChange={handlefilterchange}
              value={filtername}
            />
          </div>
        </div>
        <div className="teacher_list_title_div">
          <div className="teacher_list_title">
            <div className="teacher_list_content">
              <p>Teachers name</p>
            </div>
            <div className="teacher_list_content">
              <p>Email</p>
            </div>
            <div className="teacher_list_content">
              <p>Teacher Id</p>
            </div>
            <div className="teacher_list_content">
              <p>Country</p>
            </div>
            <div className="teacher_list_content">
              <p>Last seen</p>
            </div>
          </div>
        </div>

        <div className="teacher_list_details_div">
          {teacherlistdata
            .filter((teacherData) =>
              teacherData.id.toLowerCase().includes(filtername.toLowerCase())
            )
            .map((teacherData) => {
              const { id, image, teachername, email, address, lastseen } =
                teacherData;
              return (
                <div className="teacher_list_details" key={id}>
                  <div className="teacher_list_details_content1">
                    <img src={image} alt="" />
                  </div>
                  <div className="teacher_list_details_content2">
                    <p>
                      <NavLink to={`/admin_dashboard/detailsofteacher/${id}`}>
                        {teachername}
                      </NavLink>
                    </p>
                  </div>
                  <div className="teacher_list_details_content3">
                    <p>{email}</p>
                  </div>
                  <div className="teacher_list_details_content4">
                    <p>{id}</p>
                  </div>
                  <div className="teacher_list_details_content5">
                    <p>{address.country}</p>
                  </div>
                  <div className="teacher_list_details_content6">
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
