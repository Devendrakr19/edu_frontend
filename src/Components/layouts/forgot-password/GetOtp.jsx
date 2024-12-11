import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
 
const GetOtp = () => {
  const [Input, setInput] = useState({ email: "" });
  const [otp, setOtp] = useState(["", "", "", ""]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const HandleChange = (e) => {
    setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;

    // Handle value change in OTP input
    setOtp((prevOtp) => {
      const newOtp = [...prevOtp];
      newOtp[index] = value;
      return newOtp;
    });

    // Move to next input box if the user typed something
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-${index + 1}`).focus();
    }

    // Move to previous input box if the user deleted a character
    if (!value && index > 0) {
      document.getElementById(`otp-${index - 1}`).focus();
    }
  };

  const handleSend = (e) => {
    e.preventDefault();
    // Perform validation before sending OTP
    if (!isValidEmail(Input.emailormobile)) {
      alert("Please enter a valid email.");
      return;
    }
    setIsLoading(true);
    // Simulate OTP sending logic (e.g., API call)
    setTimeout(() => {
      setIsLoading(false);
      alert("OTP Sent!");
    }, 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/reset-password");
  };

  return (
    <div className="bg-[#16454395] flex justify-center items-center h-[100vh]">
      <form
        onSubmit={handleSubmit}
        className="w-[360px] bg-[white] px-[15px] pt-[15px] pb-[25px] rounded shadow-lg"
      >
        <h1 className="text-center text-[20px] font-semibold">
          Email Authentication
        </h1>
        <div className="flex flex-col">
          <label htmlFor="email" className="text-[16px] font-medium">
            Email
          </label>
          <div className="flex">
            <input
              id="email"
              name="email"
              type="text"
              className="outline-none w-[100%] px-[8px] py-[5px] border-[1px] border-[#5b5b5b] rounded-l"
              placeholder="Enter Email"
              value={Input.email}
              onChange={HandleChange}
            />
            <button
              className="rounded-r bg-[#229b95] px-[20px] border-[1px] border-[transparent] py-[5px] text-[white] hover:bg-[white] hover:text-[#229b95] hover:border-[#229b95] transition delay-100"
              onClick={handleSend}
              disabled={isLoading}
            >
              {isLoading ? "Sending..." : "Send"}
            </button>
          </div>
        </div>

        <div className="flex items-center gap-[10px] justify-between mt-[30px]">
          {otp.map((value, index) => (
            <input
              key={index}
              id={`otp-${index}`} // Add unique ID to each input
              type="text"
              className="w-[60px] outline-none px-[5px] py-[6px] rounded text-center shadow-2xl border-[1px] border-[black]"
              value={value}
              onChange={(e) => handleOtpChange(e, index)}
              maxLength={1} // Limit OTP input to 1 character
            />
          ))}
        </div>

        <div className="flex justify-center mt-[20px]">
          <button
            className="site_btn px-[40px] font-semibold"
            type="submit"
            disabled={otp.some((digit) => digit === "")} // Disable submit until all OTP fields are filled
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default GetOtp;
