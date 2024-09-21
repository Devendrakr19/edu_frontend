import { useState } from "react";
import "../Scss/Signup.scss";
import { Link } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState(""); // Added mobile state
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");
  const [name, setName] = useState("");

  const submitHandle = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <>
      <div className="signup_container">
        <div className="signup_wrapper">
          <form action="" onSubmit={submitHandle} id="signup_form">
            <div className="col1">
              <img src="/loginimg.png" alt="" />
            </div>
            <div className="col2">
              <div className="content">
                <h1>Signup</h1>
                <div className="username_div">
                  <label htmlFor="username">Fullname</label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="email_div">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    placeholder="Enter email id"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="mobile_div">
                  <label htmlFor="mobile">Mobile no.</label>
                  <input
                    type="tel"
                    placeholder="Enter your mobile no."
                    value={mobile}
                    onChange={(e) => setMobile(e.target.value)}
                    required
                  />
                </div>

                <div className="password_div">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={password}
                    onChange={(e) => setPassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <div className="password_div">
                  <label htmlFor="confirm_password">Confirm Password</label>
                  <input
                    type="password"
                    placeholder="********"
                    value={cpassword}
                    onChange={(e) => setCpassword(e.currentTarget.value)}
                    required
                  />
                </div>
                <button id="signup" type="submit">
                  <Link to="/login" id="signup_btn">
                    Submit
                  </Link>
                </button>
                <p>
                  Already have an account?{" "}
                  <Link to="/login" id="signup_login">
                    Login
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
