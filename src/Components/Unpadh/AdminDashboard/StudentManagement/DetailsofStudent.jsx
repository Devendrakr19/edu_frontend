import React from "react";
import "./DetailsofStudent.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { studentlistdata } from "./StudentListAPI";
import { useParams } from "react-router-dom";
import StudentPayment from "./Studentpayment/StudentPayment";
import { studentpayment } from "./Studentpayment/StudentpaymentAPI";

export default function DetailsOfStudent() {
  const { id } = useParams();

  const studentData = studentlistdata.find((d) => d.id === parseInt(id));

  if (!studentData) {
    return <div>Data not found!</div>;
  }
  const {
    studentname,
    email,
    address,
    mobileno,
    totalcourse,
    runningcourse,
    completecourse,
  } = studentData;

  return (
    <>
      <div className="Details_of_student_container">
        <div className="details_of_student_title">
          <h1>Details of Student </h1>
          <button type="submit">
            <RiDeleteBin5Line id="delete_icon" />
            Delete account
          </button>
        </div>
        {/* .............Student info and courses update.............. */}
        <div className="details_of_student_card_div">
          <div className="details_of_student_card1">
            <div className="student_img_and_name">
              <div className="student_img">
                <img src="/man2.jpg" alt="" />
              </div>
              <div className="student_name">
                <h1>{studentname}</h1>
                <p>Join 3 months ago</p>
                <p id="website_icons">
                  <FaLinkedinIn className="icons" />
                  <FaFacebook className="icons" />
                  <FaInstagram className="icons" />
                </p>
              </div>
            </div>
            <div className="student_courses">
              <div className="student_courses_details">
                <h1>Total Courses</h1>
                <p>{totalcourse}</p>
              </div>
              <div className="student_courses_details">
                <h1>Running courses</h1>
                <p>{runningcourse}</p>
              </div>
              <div className="student_courses_details">
                <h1>Completed courses</h1>
                <p>{completecourse}</p>
              </div>
            </div>
          </div>

          {/* ..............Student address area............ */}
          <div className="details_of_student_card2">
            <div className="details_of_student_card2_address1">
              <h1>Default Address </h1>
              <MdEdit id="Mdedit_icon" />
            </div>
            <div className="details_of_student_card2_address2">
              <h1>Address:</h1>
              <p>
                {address.area}, {address.landmark}, {address.city},
                {address.country}
              </p>
            </div>
            <div className="details_of_student_card2_address3">
              <h1>Email:</h1>
              <p>{email}</p>
            </div>
            <div className="details_of_student_card2_address4">
              <h1>Phone:</h1>
              <p>{mobileno}</p>
            </div>
          </div>
        </div>
        {/* ..................Student payment details............. */}
        <StudentPayment studentpayment={studentpayment} />
      </div>
    </>
  );
}
