import "./Teacherdashboard.scss";
import { Link, Outlet, useLocation } from "react-router-dom";
export default function Teacherdashboard() {
  const location = useLocation();

  return (
    <>
      <div className="tdashboard_container">
        <div className="tdashboard">
          <h2>Dashboard{location.pathname}</h2>
        </div>
        <div className="tcontent">
          <div className="tcol1">
            <div className="row1">
              <h1>Profile</h1>
            </div>
            <div className="row2">
              <img src="/avat.jpg" alt="" />
            </div>
            <div className="row2name">
              <p>John Williams</p>
            </div>
            <div className="row3">
              <p>
                <Link to="teachernotificaton" className="links">
                  Notification
                </Link>
              </p>
            </div>
            <div className="row4">
              <p>
                <Link to="teacheractsetting" className="links">
                  Account Settings
                </Link>
              </p>
            </div>
            <div className="row5">
              <p>
                <Link to="liveclass" className="links">
                  Live Class Settings
                </Link>
              </p>
            </div>
            <div className="row6">
              <p>
                <Link to="" className="links">
                  Recorded Class Upload Settings
                </Link>
              </p>
            </div>
            <div className="row7">
              <p>
                <Link to="Teacher_payout_and_tax" className="links">
                  Payout and Tax Settings
                </Link>
              </p>
            </div>
            <div className="row8">
              <p>
                <Link to="pbprofile" className="links">
                  Public Profile
                </Link>
              </p>
            </div>
            <div className="row9">
              <p>
                <Link to="Edit_profile" className="links">
                  Edit Profile
                </Link>
              </p>
            </div>
            <div className="row10">
              <p>
                <Link to="help" className="links">
                  Help
                </Link>
              </p>
            </div>
            <div className="row16">
              <p>
                <Link to="/admin_dashboard" className="links">
                  Logout
                </Link>
              </p>
            </div>
          </div>
          <div className="col2">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
