import React from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => { 
  const token = useSelector((state) => state?.authUser?.token);

  // console.log("token", token);

  if (!token) {
    return <Navigate to="/" />;
  }
  return children;
};
export default ProtectedRoute;
