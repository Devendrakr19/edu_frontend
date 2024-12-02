import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { Signupuser } from "../Redux/slices/auth/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const Signup = () => {
  const [passwordVisible, setPasswordVisisble] = useState(true);
  const [confirmpasswordVisible, setconfirmPasswordVisisble] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.authUser?.loading);

  // console.log("loading", loading);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required."),
    email: Yup.string().required("Email is required."),
    mobile: Yup.number().required("Phone number is required."),
    password: Yup.string()
      .required("Password is required.")
      .min(6, "Password must be at least 6 characters."),
    confirmpassword: Yup.string()
      .required("Confirm Password is required.")
      .oneOf([Yup.ref("password"), null], "Passwords must match"),
    role: Yup.string().required("Role is required."),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      mobile: "",
      password: "",
      confirmpassword: "",
      role: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      const { confirmpassword, ...formdata } = values;
      // console.log("signup values", formdata);
      // dispatch(Signupuser(formdata)).then(() => {
      //   toast.success("User Created successfully");
      //   formik.resetForm();
      //   navigate("/login");
      // });
      try {
        await dispatch(Signupuser(formdata)).unwrap();
        toast.success("User Created successfully");
        formik.resetForm();
        navigate("/login");
      } catch (error) {
        toast.error("Signup Failed.");
      }
    },
  });

  const handlePasswordShow = () => {
    setPasswordVisisble(!passwordVisible);
  };
  const handleConfirmPasswordShow = () => {
    setconfirmPasswordVisisble(!confirmpasswordVisible);
  };
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
                  error={
                    formik.touched.password && Boolean(formik.errors.password)
                  }
                  helperText={formik.touched.password && formik.errors.password}
                />
                <span
                  className="absolute top-[33px] right-[10px] text-[20px] cursor-pointer"
                  onClick={handlePasswordShow}
                >
                  {passwordVisible ? <IoEyeOffSharp /> : <IoEyeSharp />}
                </span>
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
                  error={
                    formik.touched.confirmpassword &&
                    Boolean(formik.errors.confirmpassword)
                  }
                  helperText={
                    formik.touched.confirmpassword &&
                    formik.errors.confirmpassword
                  }
                />
                <span
                  className="absolute top-[33px] right-[10px] text-[20px] cursor-pointer"
                  onClick={handleConfirmPasswordShow}
                >
                  {confirmpasswordVisible ? <IoEyeOffSharp /> : <IoEyeSharp />}
                </span>
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
                      error={formik.touched.role && Boolean(formik.errors.role)}
                      helperText={formik.touched.role && formik.errors.role}
                    />
                  )}
                />
              </Grid>
              <Grid item xs={12}>
                <div className="flex justify-center mt-[20px]">
                  <button
                    className="site_btn px-[40px] font-semibold"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Submitting..." : "Submit"}
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
