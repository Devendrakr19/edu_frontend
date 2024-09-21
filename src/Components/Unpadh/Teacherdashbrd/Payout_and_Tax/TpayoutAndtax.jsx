import "./TpayoutAndtax.scss";
import { NavLink, Outlet } from "react-router-dom";
import React from "react";

export default function TpayoutAndtax() {
  return (
    <>
      <div className="teacher_payoutandtax_container">
        <h1>Instructor Application</h1>
        <div className="teacher_payoutandtax_tiltle_div">
          <div className="teacher_payoutandtax_title">
            <p>
              <NavLink to="" className="payoutAndtax_navlink">
                {" "}
                Profile Picture
              </NavLink>
            </p>
            <p>
              <NavLink   className="payoutAndtax_navlink">
                Instructor Terms
              </NavLink>
            </p>
            <p>
              <NavLink  className="payoutAndtax_navlink">
                Uredx Marketing
              </NavLink>
            </p>
            <p>
              <NavLink className="payoutAndtax_navlink">
                Payout & Tax Details
              </NavLink>
            </p>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
