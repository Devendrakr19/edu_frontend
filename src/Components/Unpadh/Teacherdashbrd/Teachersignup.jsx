import { useState } from "react";
import "./Teachersignup.scss";
import { NavLink } from "react-router-dom";

export default function Teachersignup() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // Added mobile state
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    // Add your form submission logic here
    if (password !== cpassword) {
      alert("Password not match");
    } else {
      alert("Match");
    }
  };

  return (
    <>
      <div className="t_signup_container">
        <div className="tsignup_wrapper">
          <form action="" onSubmit={submitHandle}>
            <div className="t_col1">
              <img src="/loginimg.png" alt="" />
            </div>
            <div className="t_col2">
              <div className="content">
                <h1>Signup</h1>
                <div className="username_div">
                  <label htmlFor="username">Fullname:</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="t_email_div">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    placeholder="Enter email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="t_mobile_div">
                  <label htmlFor="mobile">Mobile no:</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile no."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                <div className="t_password_div">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="t_password_div">
                  <label htmlFor="confirm_password">Confirm Password:</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <button id="signup" type="submit">
                  <NavLink to="/teacherlogin" id="signup_btn">
                    Submit
                  </NavLink>
                </button>
                <p>
                  Already have an account?{" "}
                  <NavLink to="/teacherlogin" id="signup_login">
                    Login
                  </NavLink>
                </p>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
