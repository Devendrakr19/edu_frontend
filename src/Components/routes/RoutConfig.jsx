import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LandigPage from "../pages/LandigPage";
import RouteLayout from "./RouteLayout";
import ProtectedRoute from "./ProtectedRoute";
import About from "../pages/About";
import StudentDashboard from "../pages/StudentDashboard";
import ResetPassword from "../layouts/forgot-password/ResetPassword";
import GetOtp from "../layouts/forgot-password/GetOtp";
import TeacherDashboard from "../pages/TeacherDashboard";
import Signup from "../auth/Signup";
import Login from "../auth/Login";

const RoutConfig = () => {
  
  return (
    <>
      <Router>
        <ToastContainer/>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
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
