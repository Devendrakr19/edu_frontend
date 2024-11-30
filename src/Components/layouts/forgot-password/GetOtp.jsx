import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const GetOtp = () => {
  const [Input, setInput] = useState({
    email: "",
    mobile: "",
  });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });
  };

  const handleSend = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };
  return (
    <>
      <div className="bg-[#16454395] flex justify-center items-center h-[100vh]">
        <form
          onSubmit={handleSubmit}
          className="w-[360px] bg-[white] px-[15px] pt-[15px] pb-[25px] rounded shadow-lg"
        >
          <h1 className="text-center text-[20px] font-semibold">
            Select for Reset Password
          </h1>
          <div className="flex flex-col">
            <label htmlFor="email" className="text-[16px] font-medium">
              Email or Mobile
            </label>
            <div className="flex">
              <input
                id="email"
                type="text"
                className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded-l"
                placeholder="Enter Email Id"
                name="email"
                value={Input.email}
                onChange={HandleChange}
              />
              <button
                className="rounded-r bg-[#229b95] px-[20px] border-[1px] border-[transparent] py-[5px] text-[white] hover:bg-[white] hover:text-[#229b95] hover:border-[#229b95] transition delay-100"
                onClick={handleSend}
              >
                Send
              </button>
            </div>
          </div>

          <div className="flex items-center gap-[10px] justify-between mt-[30px]">
            {otp.map((value, index) => (
              <input
                key={index}
                type="text"
                className="w-[60px] outline-none px-[5px] py-[6px] rounded text-center shadow-2xl border-[1px] border-[black]"
                value={value}
                onChange={(e) => handleOtpChange(e, index)}
              />
            ))}
          </div>
          <div className="flex justify-center mt-[20px]">
            <button
              className="site_btn px-[40px] font-semibold cursor-not-allowed"
              type="submit"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default GetOtp;
