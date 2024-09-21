import "./BusinessNavbar.scss";
import { Link } from "react-router-dom";
// import { useState } from "react";
// import Dropdown from "../Unpadh/Dropdown";
import { Outlet } from "react-router-dom";

export default function BusinessNavbar() {
  //   const [isDropdownVisible, setDropdownVisible] = useState(false);

  //   const handleHover = () => {
  //     setDropdownVisible(true);
  //   };

  //   const handleLeave = () => {
  //     setDropdownVisible(false);
  //   };

  return (
    <>
      <div className="Business_nav_container">
        <div className="Business_col1">
          <img src="./uredx_logo.png" alt="" />
        </div>
        <div className="Business_col2">
          <div
            className="Business_content1"
            // onMouseOver={handleHover}
            // onMouseLeave={handleLeave}
          >
            <div className="Business_content_link">
              <Link className="Business_nav_link">What we do</Link>
              {/* <i className="uil uil-angle-down"></i> */}
            </div>
            {/* {isDropdownVisible && <Dropdown />} */}
          </div>

          <div className="Business_content1">
            <div className="Business_content_link">
              <Link className="Business_nav_link">How we do it</Link>
              {/* <i className="uil uil-angle-down"></i> */}
            </div>
          </div>

          <div className="Business_content1">
            <div className="Business_content_link">
              <Link className="Business_nav_link">Resourses</Link>
            </div>
          </div>
          <div className="Business_content1">
            <div className="Business_content_link">
              <Link className="Business_nav_link">Plan</Link>
            </div>
          </div>
        </div>

        <div className="Business_col3">
          <button id="Business_login_btn">
            <Link to="/login" className="Business_login_signup_link">
              Login
            </Link>
          </button>

          <button id="Business_signup_btn">
            <Link to="/signup" className="Business_login_signup_link">
              {" "}
              Sign Up
            </Link>
          </button>
        </div>
        {/* <button>
          <Link to="/dashboard">Dashboard</Link>
        </button> */}
      </div>
      <Outlet />
    </>
  );
}
