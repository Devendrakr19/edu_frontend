import React from "react";
import Navbar from "../../Navbar";
import Footer from "../../Footer";
import { useLocation } from "react-router-dom";

const RouteLayout = ({ children }) => {

  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default RouteLayout;
