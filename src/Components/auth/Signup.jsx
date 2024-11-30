import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";

const Signup = () => {
  const [passwordVisible, setPasswordVisisble] = useState(true);
  const [confirmpasswordVisible, setconfirmPasswordVisisble] = useState(true);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string().required("Email is required."),
    mobile: Yup.number().required("Phone number is required."),
    password: Yup.string().required("Password is required.").min(6, "Password must be at least 6 characters."),
    confirmpassword: Yup.string().required("Confirm Password is required.").oneOf([Yup.ref("password"), null], "Passwords must match"),
    role: Yup.string().required("Role is required."),
  })

   const formik = useFormik({
    initialValues:{
      name:"",
      email:"",
      mobile:"",
      password:"",
      confirmpassword:"",
      role:"",
    },
    validationSchema,
    onSubmit:((values) =>{
        const { confirmpassword, ...formdata } = values;
      console.log("signup values", formdata);
    })
   })

   const handlePasswordShow = () =>{
    setPasswordVisisble(!passwordVisible);
   }
   const handleConfirmPasswordShow = () =>{
    setconfirmPasswordVisisble(!confirmpasswordVisible);
   }
  return (
    <>
      <div className="bg-[#16454395] flex justify-center items-center h-[100vh]">
        <div className="w-[400px] bg-[#fffdfdd6] px-[15px] py-[10px] rounded shadow-lg">
          <form onSubmit={formik.handleSubmit}>
            <Grid container rowGap={0.5}>
              <Grid item xs={12}>
                <h1 className="text-center text-[22px] font-semibold">
                  Signup
                </h1>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="name">
                  Name
                  <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="name"
                  fullWidth
                  value={formik.values.name || ""}
                  onChange={formik.handleChange}
                  sx={{ "& .MuiInputBase-input": { padding: "7px" } }}
                  placeholder="Enter Your Name"
                  error={formik.touched.name && Boolean(formik.errors.name)}
                  helperText={formik.touched.name && formik.errors.name}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="email">
                  Email
                  <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="email"
                  type="email"
                  fullWidth
                  value={formik.values.email || ""}
                  onChange={formik.handleChange}
                  sx={{ "& .MuiInputBase-input": { padding: "7px" } }}
                  placeholder="Enter Your email"
                  error={formik.touched.email && Boolean(formik.errors.email)}
                  helperText={formik.touched.email && formik.errors.email}
                />
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="mobile">
                  Phone Number
                  <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="mobile"
                  type="tel"
                  fullWidth
                  value={formik.values.mobile || ""}
                  onChange={formik.handleChange}
                  sx={{ "& .MuiInputBase-input": { padding: "7px" } }}
                  placeholder="Enter Your mobile"
                  error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                  helperText={formik.touched.mobile && formik.errors.mobile}
                />
              </Grid>
              <Grid item xs={12} className="relative">
                <label htmlFor="password">
                  Password
                  <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="password"
                  type={passwordVisible ? "password" : "text"}
                  fullWidth
                  value={formik.values.password || ""}
                  onChange={formik.handleChange}
                  sx={{ "& .MuiInputBase-input": { padding: "7px" } }}
                  placeholder="********"
                  error={formik.touched.password && Boolean(formik.errors.password)}
                  helperText={formik.touched.password && formik.errors.password}
                />
                <span className="absolute top-[33px] right-[10px] text-[20px] cursor-pointer" onClick={handlePasswordShow}>{ passwordVisible ? <IoEyeOffSharp/> : <IoEyeSharp/> }</span>
              </Grid>
              <Grid item xs={12} className="relative">
                <label htmlFor="confirmpassword">
                  Confirm Password
                  <span className="text-[red]">*</span>
                </label>
                <TextField
                  id="confirmpassword"
                  type={confirmpasswordVisible ? "password" : "text"}
                  fullWidth
                  value={formik.values.confirmpassword || ""}
                  onChange={formik.handleChange}
                  sx={{ "& .MuiInputBase-input": { padding: "7px" } }}
                  placeholder="********"
                  error={formik.touched.confirmpassword && Boolean(formik.errors.confirmpassword)}
                  helperText={formik.touched.confirmpassword && formik.errors.confirmpassword}
                />
                <span className="absolute top-[33px] right-[10px] text-[20px] cursor-pointer" onClick={handleConfirmPasswordShow}>{ confirmpasswordVisible ? <IoEyeOffSharp/> : <IoEyeSharp/> }</span>
              </Grid>
              <Grid item xs={12}>
                <label htmlFor="role">
                  Select Role <span className="text-[red]">*</span>
                </label>
                <Autocomplete
                  id="role"
                  disablePortal
                  fullWidth
                  options={["Teacher", "Student"]}
                  value={formik.values.role || ""}
                  onChange={(e, newvalue) => {
                    formik.setFieldValue("role", newvalue);
                  }}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      InputProps={{
                        ...params.InputProps,
                        style: {
                          height: "38px",
                        },
                      }}
                      placeholder="select role"
                      error={
                        formik.touched.role &&
                        Boolean(formik.errors.role)
                      }
                      helperText={
                        formik.touched.role && formik.errors.role
                      }
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="flex justify-center mt-[20px]">
                  <button
                    className="site_btn px-[40px] font-semibold"
                    type="submit"
                    // disabled={loading}
                  >
                    {/* {loading ? "Submitting..." : "Submit"} */}
                    Submit
                  </button>
                </div>
                <div className="text-[12px] mt-[5px] flex justify-center">
                  Already have account
                  <Link to="/login">
                    <span className="cursor-pointer ml-[5px] text-[blue] font-medium">
                      Login
                    </span>
                  </Link>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};

export default Signup;










// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import { teacherSignup } from "../../Redux/slices/auth/StudentAuthSlice";
// import { useDispatch, useSelector } from "react-redux";
// import { Grid, TextField } from "@mui/material";
// const TeacherSignup = () => {
//   const [Input, setInput] = useState({
//     name: "",
//     email: "",
//     mobile: "",
//     password: "",
//     confpassword: "",
//   });
//   const dispatch = useDispatch();
//   const { loading, error } = useSelector((state) => state.loginsignupauth);
//   const navigate = useNavigate();

//   const HandleChange = (e) => {
//     setInput((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const HandleSubmit = async (e) => {
//     e.preventDefault();

//     if (Input.password !== Input.confpassword) {
//       alert("Password do not match");
//       return;
//     }

//     try {
//       await dispatch(teacherSignup(Input)).unwrap();
//       navigate("/teacher-login");
//     } catch (error) {
//       alert("Signup Failed: " + (error?.message || "Unknown error"));
//     }
//     console.log("Input", Input);
//   };
//   return (
//     <>
//       <div className="bg-[#4e605c] flex justify-center items-center h-[100vh]">
//         <form onSubmit={HandleSubmit}>
//           <div className="w-[400px] bg-[white] px-[15px] py-[15px] rounded shadow-lg">
//             <Grid container>
//               <Grid item xs={12}>
//                 <h1 className="text-center text-[20px] font-semibold">
//                   Signup
//                 </h1>
//               </Grid>
//               <Grid item xs={12}>
//                 <label htmlFor="name" className="text-[16px]">
//                   Name
//                   <span className="text-[red]">*</span>
//                 </label>
//                 <TextField
//                   id="name"
//                   fullWidth
//                   // value={formik.values.name || ""}
//                   // onChange={formik.handleChange}
//                   sx={{ "& .MuiInputBase-input": { padding: "7px" } }}
//                   placeholder="Enter Your Name"
//                   // error={formik.touched.name && Boolean(formik.errors.name)}
//                   // helperText={formik.touched.name && formik.errors.name}
//                 />
//               </Grid>
//             </Grid>
//             {/* <h1 className="text-center text-[20px] font-semibold">Signup</h1>
//           <div className="mt-[10px] flex flex-col">
//             <label htmlFor="name" className="text-[16px] font-medium">
//               Name
//             </label>
//             <input
//               type="text"
//               id="name"
//               className="outline-none w-[100%] px-[5px] py-[5px] border-[1px] border-[#5b5b5b] rounded mt-[2px]"
//               placeholder="Enter your full name"
//               name="name"
//               value={Input.name}
//               onChange={HandleChange}
//             />
//           </div> */}
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
//                 id="confpassword"
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
//               <Link to="/teacher-login">
//                 <span className="cursor-pointer ml-1 text-[blue]">Login</span>
//               </Link>
//             </div>
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default TeacherSignup;



