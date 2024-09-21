import "./TeacherMessagestng.scss";

export default function TeacherMessagestng() {
  return (
    <>
      <div className="T_messagesetting_container">
        <div className="T_ms_row">
          <div className="T_ms_checkbox">
            <input type="checkbox" id="T_ms_chekbox" />
            <h3>Turn off direct messaging</h3>
          </div>
          <div className="T_ms_text">
            <p>
              When you rurn off direct messages, you will no longer be able to
              send or receive direct messages as an instructor.
            </p>
          </div>
        </div>
        <div className="T_ms_btn_div">
          <button id="T_ms_btn">Save</button>
        </div>
      </div>
    </>
  );
}
