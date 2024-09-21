import { useState } from "react";
import { MdOutlineModeEdit } from "react-icons/md";
export default function Accountsecurity() {
  const [HandleInput, setHandleInput] = useState({
    email: "",
    password:""
  })

  const HandleChange = (e) => {
    setHandleInput((prev) => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  const HandleSubmit = () => {
    e.preventDefault();
  }

  return (
    <>
        <div className="mt-[8px] px-[10px] col-span-1">
          <label htmlFor="email" className="text-[18px] font-medium">
            Email:
          </label>
          <div className="border-[1px] min-w-[250px] max-w-[510px] rounded border-[black] flex items-center mt-[5px]">
            <input 
            type="email"
            name="email"
            value={HandleInput.email}
              className="w-[455px] px-[8px] py-[8px]  bg-[transparent] outline-none rounded-l-sm"
              placeholder="devendraku18956@gmail.com"
              onChange={HandleChange}
            />
            <button className="site_btn py-[8px] bg-black hover:text-[#f4f3f3] hover:bg-[#42a38c] hover:border-[transparent] rounded-l-sm">
              <MdOutlineModeEdit className="text-[26px]"/>
            </button>
          </div>
        </div>
        <div className="mt-[8px] px-[10px] col-span-1">
          <label htmlFor="password" className="text-[18px] font-medium">
            Password:
          </label>
          <div className="border-[1px] min-w-[250px] max-w-[510px] rounded border-[black] flex items-center mt-[5px]">
          <input
            type="password"
            className="w-[455px] px-[8px] bg-[transparent] py-[8px] outline-none rounded-l-sm"
            placeholder="******" 
            name="password"
            value={HandleInput.password}
            onChange={HandleChange}
            
            />
            <button className="site_btn py-[8px] bg-black hover:text-[#f4f3f3] hover:bg-[#42a38c] hover:border-[transparent] rounded-l-sm">
            <MdOutlineModeEdit className="text-[26px]"/>
            </button>
          </div>
        </div>
        <div className="mt-[15px] px-[10px]">
          <button className="site_btn px-[30px]" onClick={HandleSubmit}>Save</button>
        </div>
 
    </>
  );
}
