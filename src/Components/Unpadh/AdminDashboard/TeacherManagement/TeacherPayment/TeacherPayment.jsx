import React from "react";
import "./Teacherpayment.scss";
export default function TeacherPayment({ teacherpayment }) {
  return (
    <div className="teacherpayment_container">
      <div className="teacherpayment_title">
        <h1>Payment status</h1>
      </div>
      <div className="teacherpayment_content_title">
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
            {teacherpayment.map((teacherPaymentdata) => {
              const { courseid, total, paymentstatus, coursename, date } =
                teacherPaymentdata;
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
