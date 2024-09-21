import React, { useState } from "react";
import "./TeacherRecordedclass.scss";
import { NavLink, useNavigate } from "react-router-dom";
import { FaFolderPlus } from "react-icons/fa";

export default function TeacherRecordedclass({ createfolder }) {
  const navigate = useNavigate();

  const handleAddfolder = () => {
    navigate("/addpage");
  };

  const handlepage = (id) => {
    // console.log("Clicked folder id:", id);
    navigate(`/upload_video/${id}`);
  };
  return (
    <>
      <div className="Trecordclass_container">
        {createfolder.map((dt) => {
          const { id, img, coursetitle, teachername, Price, level, duration } =
            dt;
          return (
            <div
              className="Teacher_create_folder"
              key={id}
              onClick={() => handlepage(id)}
            >
              <div className="Tcourse_img">
                <img src={img} alt="" />
              </div>
              <div className="Tcourse_title">
                <h1>{coursetitle}</h1>
              </div>
              <div className="Teacher_name">
                <p>By {teachername}</p>
              </div>
              <div className="Tprice">
                <p>Rs {Price}</p>
              </div>
              <div className="Tcourse_level">
                <p>{level}</p>
              </div>
              <div className="Tcourse_duration">
                <p>{duration} Months</p>
              </div>
            </div>
          );
        })}
        <div className="Teacher_create_folder_icon" onClick={handleAddfolder}>
          <FaFolderPlus id="plusIcon" />
        </div>
      </div>
    </>
  );
}
