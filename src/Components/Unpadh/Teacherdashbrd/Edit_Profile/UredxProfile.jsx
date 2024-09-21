import React from "react";
import "./UredxProfile.scss";
import { NavLink } from "react-router-dom";

export default function UredxProfile() {
  return (
    <>
      <div className="uredx_profile_container">
        <div className="uredx_profile_col1">
          <div className="uredx_profile_row1">
            <label htmlFor="firstname">First Name:</label>
            <input type="text" placeholder="Your first name" />
          </div>
          <div className="uredx_profile_row2">
            <label htmlFor="lastname">Last Name:</label>
            <input type="text" placeholder="Your last name" />
          </div>
          <div className="uredx_profile_row3">
            <label htmlFor="headline">Headline:</label>
            <input type="text" />
          </div>
          <div className="uredx_profile_row4">
            <label htmlFor="biography">Biography:</label>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Write here"
            ></textarea>
          </div>
          <div className="uredx_profile_row5">
            <p>
              To help learners learn more about you, your bio should reflect
              your Credibility, Empathy, Passion, and Personaluty.Your biography
              should have a least 50 words, links and coupon codes are not
              permitted.
            </p>
          </div>
          <div className="uredx_profile_row6">
            <button>
              <NavLink
                to="/teacherdashboard/Edit_profile/profile_picture"
                id="uredx_profile_link"
              >
                Save
              </NavLink>
            </button>
          </div>
        </div>
        {/* .......................col2 area................  */}

        <div className="uredx_profile_col2">
          <div className="uredx_profile_col2_row1">
            <label htmlFor="website">Website:</label>
            <input type="text" placeholder="Url" />
          </div>
          <div className="uredx_profile_col2_row2">
            <label htmlFor="twitter">Twitter</label>
            <div className="url_input_div">
              <p>http://www.twitter.com/</p>
              <input type="text" placeholder="Username" />
            </div>
          </div>
          <div className="uredx_profile_col2_row3">
            <label htmlFor="facebook">Facebook</label>
            <div className="url_input_div">
              <p>http://www.facebook.com/</p>
              <input type="text" placeholder="Username" />
            </div>
          </div>
          <div className="uredx_profile_col2_row4">
            <label htmlFor="linkedin">Linkedin</label>
            <div className="url_input_div">
              <p>http://www.linkedin.com/</p>
              <input type="text" placeholder="Resource ID" />
            </div>
          </div>
          <div className="uredx_profile_col2_row5">
            <label htmlFor="youtube">Youtube</label>
            <div className="url_input_div">
              <p>http://www.youtube.com/</p>
              <input type="text" placeholder="Username" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
