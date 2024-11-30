// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { loginUser } from "../../Redux/slices/auth/StudentAuthSlice";
// import { useDispatch, useSelector } from "react-redux";

// const Login = () => {
//   const [Input, setInput] = useState({
//     email: "",
//     password: "",
//   });
  
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.loginsignupauth);
//   const navigate = useNavigate();
  
//   const HandleChange = (e) => {
//     setInput((prev)=>({...prev, [e.target.name]:e.target.value}))
//   }

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     try {
//       await dispatch(loginUser(Input)).unwrap();
//       navigate('/');      
//     }
//     catch (error) {
//       alert("login Failed: " + (error?.message || "Unknown error"));
//     }
//     console.log("Input", Input);
//   };

//   const HandleReset = () => {
//     navigate('/get-otp');
//   }

//   return (
//     <>
//       <div className="bg-[#4e605c] flex justify-center items-center h-[calc(100vh_-_1px)]">
//         <form action="" onSubmit={HandleSubmit}>
//           <div className="w-[360px] bg-[white] px-[15px] py-[15px] rounded shadow-lg">
//             <h1 className="text-center text-[20px] font-semibold">Login</h1>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="email" className="text-[16px] font-medium">
//                 Email
//               </label>
//               <input
//                 type="text"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter Email Id"
//                 name="email"
//                 value={Input.email}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="mt-[10px] flex flex-col">
//               <label htmlFor="password" className="text-[16px] font-medium">
//                 Password
//               </label>
//               <input
//                 type="password"
//                 className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//                 placeholder="Enter Password"
//                 name="password"
//                 value={Input.password}
//                 onChange={HandleChange}
//               />
//             </div>
//             <div className="text-[12px] mt-[2px] flex justify-end text-[blue]">
//               <span className="cursor-pointer" onClick={HandleReset}>Forgot Password?</span>
//             </div>
//             <div className="flex justify-center mt-[20px]">
//               <button className="site_btn px-[40px] font-semibold" type="submit" disabled={loading}>
//               {loading ? "Submitting..." : "Submit"}
//               </button>
//             </div>
//             <div className="text-[12px] mt-[5px] flex justify-center">
//               Don't have account
//               <Link to="/student-signup">
//                 <span className="cursor-pointer ml-1 text-[blue]">Signup</span>
//               </Link>
//             </div>

//             <div className="flex justify-center items-center gap-[20px] mt-[20px]">
//               <button className="site_btn border_btn text-[12px]">
//                 Login with Google
//               </button>
//               <button className="site_btn border_btn text-[12px]">
//                 Login with facebook
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Login;
