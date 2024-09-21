import React, { useRef } from 'react';
import "./Tsendmailpswd.scss";
import { NavLink } from "react-router-dom";

export default function Tsendmailpswrd() {
  const inputs = useRef([]);

  const handleChange = (index, event) => {
    const value = event.target.value;
    if (value.length === 1 && index < inputs.current.length - 1) {
      inputs.current[index + 1].focus();
    }
  };

  return (
    <>
      <div className="Tsendmail_container">
        <div className="Tmail_div_wrapper">
          <div className="Tmail_content">
            <h2>Forgot Password</h2>
            <p>
              Enter your account's email address or mobile number below and we
              will email you a link to reset your password with.
            </p>
            <div className="Tsendmail_div">
              <label htmlFor="emiai">Email or Mobile no :</label>
              <div className="Tsendmial_input_btn">
                <input type="text" id="sendmail_input" />
                <button id="sendmail_btn">Submit</button>
              </div>
            </div>

            <div className="TOtp_div">
              <p>Enter OTP:</p>
              <div className="Tinput_wrapper">
                <input 
                  type="text" 
                  ref={(el) => inputs.current[0] = el}
                  maxLength="1" 
                  pattern="[0-9]" 
                  className="TOtp_input"
                  onChange={(e) => handleChange(0, e)}
                />
                <input 
                  type="text" 
                  ref={(el) => inputs.current[1] = el}
                  maxLength="1" 
                  pattern="[0-9]" 
                  className="TOtp_input"
                  onChange={(e) => handleChange(1, e)}
                />
                <input 
                  type="text" 
                  ref={(el) => inputs.current[2] = el}
                  maxLength="1" 
                  pattern="[0-9]" 
                  className="TOtp_input"
                  onChange={(e) => handleChange(2, e)}
                />
                <input 
                  type="text" 
                  ref={(el) => inputs.current[3] = el}
                  maxLength="1" 
                  pattern="[0-9]" 
                  className="TOtp_input"
                  onChange={(e) => handleChange(3, e)}
                />
              </div>
              <button id="T_reset_pswd_btn">
                <NavLink to="/tresetpswd" id="T_reset_link">
                  Reset password
                </NavLink>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
