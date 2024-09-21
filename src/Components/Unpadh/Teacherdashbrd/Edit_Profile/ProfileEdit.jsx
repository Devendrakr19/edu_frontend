import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import "./ProfileEdit.scss";
export default function ProfileEdit() {
  return (
    <>
      <div className="Profile_edit_container">
        <h1>Profile & Setting</h1>
        <div className="Profile_edit_title_div">
          <div className="Profile_edit_title">
            <p>
              <NavLink to="" className="Profile_edit_link">
                Uredx profile
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/teacherdashboard/Edit_profile/profile_picture"
                className="Profile_edit_link"
              >
                Profile picture
              </NavLink>
            </p>
            <p>
              <NavLink
                to="/teacherdashboard/Edit_profile/privacy_setting"
                className="Profile_edit_link"
              >
                Privacy setting
              </NavLink>
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
