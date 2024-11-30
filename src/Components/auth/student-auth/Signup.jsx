// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { signupUser } from "../../Redux/slices/auth/StudentAuthSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Signup = () => {
//   const [Input, setInput] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confpassword:""
//   });
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.loginsignupauth);
//   const navigate = useNavigate();


//   const HandleChange = (e) => {
//     setInput((prev)=>({...prev, [e.target.name]:e.target.value}))
//   }

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     if (Input.password !== Input.confpassword) {
//       alert("Password do not match");
//       return;
//     }

//     try {
//       await dispatch(signupUser(Input)).unwrap();
//       navigate('/student-login');      
//     }
//     catch (error) {
//       alert("Signup Failed: " + (error?.message || "Unknown error"));
//     }
//     console.log("Input", Input);
//   };

//   return (
//     <>
//       <div className="bg-[#4e605c] flex justify-center items-center h-[100vh]">
//         <form  onSubmit={HandleSubmit}>
//           <div className="w-[400px] bg-[white] px-[15px] py-[15px] rounded shadow-lg">
//             <h1 className="text-center text-[20px] font-semibold">Signup</h1>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="name" className="text-[16px] font-medium">
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter your full name"
//                 name="name"
//                 value={Input.name}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="email" className="text-[16px] font-medium">
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter Email Id"
//                 name="email"
//                 value={Input.email}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="mobile" className="text-[16px] font-medium">
//                 Phone Number
//               </label>
//               <input
//                 type="tel"
//                 id="mobile"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter your Phone number"
//                 name="mobile"
//                 value={Input.mobile}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="password" className="text-[16px] font-medium">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 id="password"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter Password"
//                 name="password"
//                 value={Input.password}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="confpassword" className="text-[16px] font-medium">
//                 Confirm Password
//               </label>
//               <input
//                 type="password"
//                  id="confpassword"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter Confirm Password"
//                 name="confpassword"
//                 value={Input.confpassword}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="flex justify-center mt-[20px]">
//               <button
//                 className="site_btn px-[40px] font-semibold"
//                 type="submit"
//                 disabled={loading}
//               >
//                 {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//             <div className="text-[12px] mt-[5px] flex justify-center">
//               Already have account
//               <Link to="/student-login">
//                 <span className="cursor-pointer ml-1 text-[blue]">Login</span>
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Signup;
