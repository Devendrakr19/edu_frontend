import React, { useEffect } from "react";
// import Page1 from '../layouts/landing-pages/Page1'
// import Page2 from '../layouts/landing-pages/Page2'
// import Page3 from "../layouts/landing-pages/Page3";
// import Page4 from "../layouts/landing-pages/Page4/demo";
// import Page5 from "../layouts/landing-pages/Page5";
// import Page6 from "../layouts/landing-pages/Page6";
import Aos from "aos";
import Banner from "../layouts/landing-pages/Banner";
import Facility from "../layouts/landing-pages/Facility";
import Courses from "../layouts/landing-pages/Courses";
import ChooseProgram from "../layouts/landing-pages/ChooseProgram";
import Testimonials from "../layouts/landing-pages/Testimonials";
import Footer from "../layouts/landing-pages/Footer";

const LandigPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* <Page1 /> */}
      <div className="bg-[#d6e1e1]">
        <Banner />
        <Facility />
        <Courses/>
        <ChooseProgram/>
        {/* <Page2 /> */}
        {/* <Page3 /> // skip */}
        {/* <Page4 /> */}
        {/* <Page5 /> */}
        <Testimonials/>
        {/* <Page6 /> */}
       <Footer/>
      </div>
    </>
  );
};

export default LandigPage;
