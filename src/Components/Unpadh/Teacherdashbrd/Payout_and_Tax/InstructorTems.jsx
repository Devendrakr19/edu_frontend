import React from "react";
import "./InstructorTerms.scss";
import { NavLink } from "react-router-dom";

export default function InstructorTems() {
  return (
    <>
      <div className="Instructorterms_container">
        <div className="terms_wrapper">
          <p>
            When you sing up to become an instructor on the Uredx platform, you
            agree to abide by the <NavLink>Instructor terms</NavLink>
          </p>
          <p>
            They cover details about the Uredx platform that are relevant to
            instructor (including pricing, payments, and your obligations as an
            instructor), so it's immportant to read them
          </p>
          <div className="Instructorterms_checkbox_div">
            <input type="checkbox" id="Instructorterms_checkbox" />
            <p>I have read and agree to the Uredx Instructor Terms</p>
          </div>
          <div className="Instructorterms_btn_div">
            <button className="Instructorterms_btn">
              <NavLink
                to="/teacherdashboard/Teacher_payout_and_tax/Uredx_Marketing"
                id="Instructorterms_btn_link"
              >
                Save and Continue
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
