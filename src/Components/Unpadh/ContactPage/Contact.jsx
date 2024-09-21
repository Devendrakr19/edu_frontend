import React from "react";
import "./Contact.css";
import { FaMapLocationDot } from "react-icons/fa6";
import { PiPhoneCallFill } from "react-icons/pi";
import { SiMinutemailer } from "react-icons/si";
import Page7 from "../../layouts/landing-pages/Page7";
import Footer from "../../layouts/landing-pages/Footer";
 
 
export default function Contact() {
  return (
    <>
      <div id="contact">
        <h1>Contact Us</h1>
        <p>
          Relatively permanent change in behavior or potential behavior as a
          result of the or practice occurring learning is the result of the
          interaction between stimulus
        </p>
      </div>
      <div className="card_content_container">
        <div className="card_info_wrapper">
          <div className="card_info1">
            <button>
              <FaMapLocationDot className="contact_icon" />
            </button>
            <p>Location: <br />1020A El Camino Real, Menlo Park, CA 94025, USA</p>
          </div>
          <div className="card_info1">
            <button>
              <PiPhoneCallFill className="contact_icon" />
            </button>
            <p>
              Phone No: <br />
              <span>+91 8810536354</span>
            </p>
          </div>
          <div className="card_info1">
            <button>
              <SiMinutemailer className="contact_icon" />
            </button>
            <p>
              Mail: <br />
              <span>uredx@gmail.com</span>
            </p>
          </div>
        </div>
      </div>

      <div id="main-contant">
        <div className="main_contact_wrapper">
          <div id="c-left">
            <div className="c_left_title">
              <h1>Let's Talk</h1>
              <p>
                We Normally Get Back Within 48hrs. <br></br>
                Please Leave Message.
              </p>
            </div>
            <div className="c_input_field">
              <div className="input-text">
                <div className="name">
                  <label htmlFor="name">Name:</label>
                  <input type="text" placeholder="Enter your name"></input>
                </div>
                <div className="email">
                  <label htmlFor="name">Email:</label>
                  <input type="email" placeholder="Enter your email"></input>
                </div>
                <div className="subject">
                  <label htmlFor="">Subject:</label>
                  <input type="text" placeholder="Enter subject title"></input>
                </div>
                <div className="contact_textarea">
                  <textarea
                    name="text"
                    placeholder="write your massage"
                  ></textarea>
                </div>
              </div>
            </div>
            <button>Post Comment</button>
          </div>
          <div className="right_div_img">
            <img src="./cont4.jpg" alt="" />
          </div>
        </div>
      </div>
      <Page7 />
      <Footer />
    </>
  );
}
