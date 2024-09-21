import { useState } from "react";
import "./Teacherlogin.scss";
import { Link } from "react-router-dom";

export default function Teacherlogin() {
  const [emailormobile, setemailOrmobile] = useState("");
  const [password, setPassword] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <div className="tlogin_container">
        <div className="Tform_wrapper">
          <form action="" onSubmit={submitHandle} id="tform">
            <div className="tcol1">
              <img src="/loginimg.png" alt="" />
            </div>
            <div className="tcol2">
              <div className="tcontent">
                <h1>Login</h1>
                <div className="temail_div">
                  <label htmlFor="email_mobile">Email or Mobile no.</label>
                  <input
                    type="text"
                    placeholder="Email or Mobile no"
                    value={emailormobile}
                    onChange={(e) => setemailOrmobile(e.target.value)}
                    required
                  />
                </div>
                <div className="tpassword_div">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="tforgot_div">
                  <div className="remember_me">
                    <input type="checkbox" />
                    <label htmlFor="password">Remember me</label>
                  </div>
                  <p>
                    <Link to="/tsendmail" id="tforgot_p">
                      Forgot password?
                    </Link>
                  </p>
                </div>
                <button id="tlogin">
                  <Link to="/" id="tlogin_btn">
                    Submit
                  </Link>
                </button>
                <div className="fb_google">
                  <button id="fb">Login with facebook</button>
                  <button id="google">Login with Google</button>
                </div>
                <p>
                  <span>Create an account</span>
                  <Link to="/teachersignup" id="tsignup_btn">
                    Signup
                  </Link>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
