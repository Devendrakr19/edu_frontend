import React from "react";
import GetDemo from "./GetDemo";
import BusinessNavbar from "../Navbar_content/BusinessNavbar";
import Businessform from "./Businessform";

function BusinessHome() {
  return (
    <div>
      <BusinessNavbar />
      <div className="rohit">
        <div>
          <GetDemo />
        </div>

        <div>
          <Businessform />
        </div>
      </div>
    </div>
  );
}

export default BusinessHome;
