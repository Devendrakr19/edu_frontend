import { NavLink, Outlet } from "react-router-dom";
import "./Teacheractsetting.scss";

export default function Teacheractsetting() {
  return (
    <>
      <div className="Tacst_container">
        <h1>Account setting</h1>
        <div className="Tacst_content">
          <div className="Tacst_row">
            <div className="Tacstcol1">
              <NavLink to="" className="Tacst_link">
                Account security
              </NavLink>
            </div>
            <div className="Tacstcol2">
              <NavLink to="teacher_notification_setting" className="Tacst_link">
                Notifications setting
              </NavLink>
            </div>
            <div className="Tacstcol3">
              <NavLink to="teacher_message_setting" className="Tacst_link">
                Massage setting
              </NavLink>
            </div>
            <div className="Tacstcol4">
              <NavLink to="teacher_close_account" className="Tacst_link">
                Close account
              </NavLink>
            </div>
          </div>
        </div>
        <Outlet />
      </div>
    </>
  );
}
