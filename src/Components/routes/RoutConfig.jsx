import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandigPage from "../pages/LandigPage";
import RouteLayout from "./RouteLayout";
import ProtectedRoute from "./ProtectedRoute";
import Login from "../auth/student-auth/Login";
import Signup from "../auth/student-auth/Signup";
import TeacherLogin from "../auth/teacher-auth/TeacherLogin";
import TeacherSignup from "../auth/teacher-auth/TeacherSignup";
import About from "../pages/About";
import StudentDashboard from "../pages/StudentDashboard";
import ResetPassword from "../layouts/forgot-password/ResetPassword";
import GetOtp from "../layouts/forgot-password/GetOtp";
import TeacherDashboard from "../pages/TeacherDashboard";

const RoutConfig = () => {
  
  return (
    <>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path="/student-login" element={<Login />} />
          <Route path="/student-signup" element={<Signup />} />
          <Route path="/teacher-login" element={<TeacherLogin />} />
          <Route path="/teacher-signup" element={<TeacherSignup />} />
          <Route path="/get-otp" element={<GetOtp />} />          
          <Route path="/reset-password" element={<ResetPassword />} />         

          <Route element={<RouteLayout />}>
            <Route path="/" element={<LandigPage />} />
            <Route path="/about" element={<About />} />

            {/* Protecte Route  */}
            <Route
              path="/student-dashboard"
              element={
                <ProtectedRoute>
                  <StudentDashboard />
                </ProtectedRoute>
              }
            />
            <Route
              path="/teacher-dashboard"
              element={
                <ProtectedRoute>
                  <TeacherDashboard />
                </ProtectedRoute>
              }
            />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default RoutConfig;
