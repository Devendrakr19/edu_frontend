import React from "react";
import "./StudentPayment.scss";

export default function StudentPayment({ studentpayment }) {
  return (
    <div className="studentpayment_container">
      <div className="studentpayment_title">
        <h1>Payment status</h1>
      </div>
      <div className="studentpayment_content_title">
        <table>
          <thead>
            <tr>
              <th>Course id</th>
              <th>Total</th>
              <th>Payment status</th>
              <th>Course name</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {studentpayment.map((studentPaymentdata) => {
              const { courseid, total, paymentstatus, coursename, date } =
                studentPaymentdata;
              return (
                <tr key={courseid}>
                  <td>{courseid}</td>
                  <td>&#8377; {total}</td>
                  <td>{paymentstatus}</td>
                  <td>{coursename}</td>
                  <td>{date}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
