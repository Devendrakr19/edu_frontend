import React, { useState } from "react";
import "./TeacherProfilepicture.scss";
import { RxAvatar } from "react-icons/rx";
import { NavLink } from "react-router-dom";

export default function TeacherPofilepicture() {
  const [profilepic, setProfilepic] = useState(null);

  const handlePicupload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfilepic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="teacher_profile_picture_container">
        <div className="profile_pic_div">
          {!profilepic ? (
            <RxAvatar className="profile_pic_avatar" />
          ) : (
            <img src={profilepic} alt="" id="profile_pic_img" />
          )}
        </div>
        <div className="profile_pic_input">
          <input type="file" onChange={handlePicupload} accept="image/*" />
        </div>
        <div className="profile_pic_btn_div">
          <button className="profile_pic_btn">
            <NavLink
              to="/teacherdashboard/Teacher_payout_and_tax/instructor_terms"
              id="profile_pic_link"
            >
              Save and Continue
            </NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
