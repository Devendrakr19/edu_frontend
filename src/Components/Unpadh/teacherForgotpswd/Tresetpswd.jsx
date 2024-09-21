import "./Tresetpswd.scss";
import { NavLink } from "react-router-dom";

export default function Tresetpswd() {
  return (
    <>
      <div className="Tresetpassword_container">
        <div className="Tresetpassword_wrapper">
          <div className="Tresetpassword_content">
            <h1>Reset account password</h1>
            <div className="Treset_pswd1">
              <label htmlFor="newpassword">New password:</label>
              <input type="password" placeholder="******" />
            </div>
            <div className="Treset_pswd2">
              <label htmlFor="confpassword">Confirm password:</label>
              <input type="password" placeholder="******" />
            </div>
            <button className="Treset_btn">
              <NavLink to="/teacherlogin" id="Treset_link">
                Submit
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
