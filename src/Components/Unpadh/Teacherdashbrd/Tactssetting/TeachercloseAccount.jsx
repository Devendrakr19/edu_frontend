import "./TeachercloseAccount.scss";

export default function TeachercloseAccount() {
  return (
    <>
      <div className="T_closeaccount_container">
        <div className="T_clsa_row1">
          <p>
            <span>Warning: </span>
            If you close your account, you will be unsubscribed from all your
            courses, and will lose access forever.
          </p>
        </div>
        <div className="T_clsa_row2">
          <button id="T_clsa_btn">Close account</button>
        </div>
      </div>
    </>
  );
}
