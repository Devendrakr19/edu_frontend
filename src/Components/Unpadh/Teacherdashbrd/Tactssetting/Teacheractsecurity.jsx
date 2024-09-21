import "./Teacheractsecurity.scss";

export default function Teacheractsecurity() {
  return (
    <>
      <div className="Taccountsecurity_container">
        <div className="T_accountsecurity_row1">
          <label htmlFor="email" className="T_as_label">
            Email:
          </label>
          <div className="T_inpt_btn_wrap">
            <input
              type="email"
              className="T_as_input"
              placeholder="devendraku18956@gmail.com"
            />
            <button className="T_as_btn">
              <i className="uil uil-pen"></i>
            </button>
          </div>
        </div>
        <div className="T_accountsecurity_row1">
          <label htmlFor="password" className="T_as_label">
            Password:
          </label>
          <div className="T_inpt_btn_wrap">
            <input type="password" className="T_as_input" placeholder="******" />
            <button className="T_as_btn">
              <i className="uil uil-pen"></i>
            </button>
          </div>
        </div>
        <div className="T_accountsecurity_row1">
          <button id="T_as_save_btn">Save</button>
        </div>
      </div>
    </>
  );
}
