import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const [Input, setInput] = useState({
    password: "",
    confpassword: "",
  });
    const navigate = useNavigate();

  const HandleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      navigate('/login')
  };

  return (
    <div className="bg-[#16454395] flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="w-[360px] bg-[white] px-[15px] pt-[15px] pb-[25px] rounded shadow-lg"
      >
        <h1 className="text-center text-[20px] font-semibold">
          Reset Password
        </h1>

        <div className="flex flex-col">
          <label htmlFor="password" className="text-[16px] font-medium">
            Password
          </label>

          <input
            id="password"
            type="password"
            className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded-l"
            placeholder="Enter password"
            name="password"
            value={Input.password}
            onChange={HandleChange}
          />
        </div>
        <div className="flex flex-col mt-[20px]">
          <label htmlFor="confpassword" className="text-[16px] font-medium">
            Confirm password
          </label>
          <input
            id="confpassword"
            type="password"
            className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded-l"
            placeholder="Enter confirm password"
            name="confpassword"
            value={Input.confpassword}
            onChange={HandleChange}
          />
        </div>
        <div className="flex justify-center mt-[20px]">
          <button className="site_btn px-[40px] font-semibold" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
