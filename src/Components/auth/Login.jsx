import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Autocomplete, Grid, TextField } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { IoEyeOffSharp } from "react-icons/io5";
import { IoEyeSharp } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Loginuser } from "../Redux/slices/auth/authSlice";
import { toast } from "react-toastify";

const Login = () => {
  const [passwordVisible, setPasswordVisisble] = useState(true);

  const dispatch = useDispatch();
  const loading = useSelector((state) => state?.authUser?.loading);
  const navigate = useNavigate();

  const validationSchema = Yup.object({
    email: Yup.string().required("Email is required."),
    password: Yup.string().required("Password is required."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values) => {
      // console.log("signup values", values);
      try {
        await dispatch(Loginuser(values)).unwrap();
        toast.success("Login successfully");
        formik.resetForm();
        navigate("/");
      } catch (error) {
        toast.error("Login Failed.");
      }
    },
  });

  const handlePasswordShow = () => {
    setPasswordVisisble(!passwordVisible);
  };
  const handleReset = () => {
    navigate("/get-otp");
  };
  return (
    <>
      <div className="bg-[#16454395] flex justify-center items-center h-[100vh]">
        <div className="w-[400px] bg-[#fffdfdd6] px-[15px] py-[10px] rounded shadow-lg">
          <form onSubmit={formik.handleSubmit}>
            <Grid container rowGap={0.5}>
              <Grid item xs={12}>
                <h1 className="text-center text-[22px] font-semibold">Login</h1>
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
              <Grid item xs={12}>
                <div className="text-[12px] flex justify-end text-[blue]">
                  <span className="cursor-pointer" onClick={handleReset}>
                    Forgot Password?
                  </span>
                </div>
              </Grid>
              <Grid item xs={12}>
                <div className="flex justify-center mt-[20px]">
                  <button
                    className="site_btn px-[40px] font-semibold"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "Logging..." : "Log in"}
                  </button>
                </div>
                <div className="text-[12px] mt-[5px] flex justify-center">
                  Don't have account
                  <Link to="/signup">
                    <span className="cursor-pointer ml-[3px] text-[blue] font-medium">
                      Signup
                    </span>
                  </Link>
                </div>
                <div className="flex justify-center items-center gap-[20px] mt-[20px]">
                  <button className="site_btn border_btn text-[12px]">
                    Login with Google
                  </button>
                  <button className="site_btn border_btn text-[12px]">
                    Login with facebook
                  </button>
                </div>
              </Grid>
            </Grid>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
