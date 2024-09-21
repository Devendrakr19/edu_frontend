import "./TeachernotificSetting.scss";

export default function TeachernotificSetting() {
  return (
    <>
      <div className="T_notificatonsetting_container">
        <div className="T_nst_row1">
          <h2>As an instructor, I want to recieve:</h2>
        </div>
        <div className="T_nst_row2">
          <div className="T_nst_row2_content1">
            <input type="checkbox" className="T_nst_checkbox" />
            <h3>
              Helpful resourses and important updates related to being an
              instructor on Udemy.
            </h3>
          </div>
          <div className="T_nst_row2_content2">
            <p>
              To adjust this preference by course, leave this box checked and go
              to the course dashboard and click on "Oprions" to opt in or out of
              specific announcements.
            </p>
          </div>
        </div>
        <div className="T_nst_row3">
          <button id="T_nst_save_btn">Save</button>
        </div>
      </div>
    </>
  );
}
