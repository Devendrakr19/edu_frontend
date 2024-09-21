import React from "react";
import "./PrivacySetting.scss";
import { NavLink } from "react-router-dom";

export default function PrivacySetting() {
  return (
    <>
      <div className="privacysetting_container">
        <div className="privacysetting_checkbox1">
          <input type="checkbox" />
          <p>Show your profile to logged-in Users</p>
        </div>
        <div className="privacysetting_checkbox2">
          <input type="checkbox" />
          <p>Show courses you're taking on your profile page</p>
        </div>
        <div className="privacysetting_btn">
          <button>
            <NavLink id="privacysetting_link">Save</NavLink>
          </button>
        </div>
      </div>
    </>
  );
}
