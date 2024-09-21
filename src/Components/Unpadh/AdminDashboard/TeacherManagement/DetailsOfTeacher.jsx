import React from "react";
import "./DetailsOfTeacher.scss";
import { RiDeleteBin5Line } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { teacherlistdata } from "./TeacherListAPI";
import { useParams } from "react-router-dom";
import TeacherPayment from "./TeacherPayment/TeacherPayment";
import { teacherpayment } from "./TeacherPayment/TeacherPaymentAPI";
import TeacherReview from "./TeacherReview/TeacherReview";
import { teacherreviewrating } from "./TeacherReview/TeacherreviewAPI";

export default function DetailsOfTeacher() {
  const { id } = useParams();

  const teacherSData = teacherlistdata.find((d) => d.id === id);

  if (!teacherSData) {
    return <div>Data not found!</div>;
  }
  const {
    teachername,
    email,
    address,
    mobileno,
    totalcourse,
    runningcourse,
    completecourse,
  } = teacherSData;

  return (
    <>
      <div className="Details_of_teacher_container">
        <div className="details_of_teacher_title">
          <h1>Details of teacher </h1>
          <button type="submit">
            <RiDeleteBin5Line id="delete_icon" />
            Delete account
          </button>
        </div>
        {/* .............teacher info and courses update.............. */}
        <div className="details_of_teacher_card_div">
          <div className="details_of_teacher_card1">
            <div className="teacher_img_and_name">
              <div className="teacher_img">
                <img src="/man2.jpg" alt="" />
              </div>
              <div className="teacher_name">
                <h1>{teachername}</h1>
                <p>Join 3 months ago</p>
                <p id="website_icons">
                  <FaLinkedinIn className="icons" />
                  <FaFacebook className="icons" />
                  <FaInstagram className="icons" />
                </p>
              </div>
            </div>
            <div className="teacher_courses">
              <div className="teacher_courses_details">
                <h1>Total Courses</h1>
                <p>{totalcourse}</p>
              </div>
              <div className="teacher_courses_details">
                <h1>Running courses</h1>
                <p>{runningcourse}</p>
              </div>
              <div className="teacher_courses_details">
                <h1>Completed courses</h1>
                <p>{completecourse}</p>
              </div>
            </div>
          </div>

          {/* ..............Teacher address area............ */}
          <div className="details_of_teacher_card2">
            <div className="details_of_teacher_card2_address1">
              <h1>Default Address </h1>
              <MdEdit id="Mdedit_icon" />
            </div>
            <div className="details_of_teacher_card2_address2">
              <h1>Address:</h1>
              <p>
                {address.area}, {address.landmark}, {address.city},
                {address.country}
              </p>
            </div>
            <div className="details_of_teacher_card2_address3">
              <h1>Email:</h1>
              <p>{email}</p>
            </div>
            <div className="details_of_teacher_card2_address4">
              <h1>Phone:</h1>
              <p>{mobileno}</p>
            </div>
          </div>
        </div>
        {/* ..................Teacher payment details............. */}
        <TeacherPayment teacherpayment={teacherpayment} />

        {/* ................Teacher Review and rating............ */}

        <TeacherReview teacherreviewrating={teacherreviewrating} />
      </div>
    </>
  );
}
