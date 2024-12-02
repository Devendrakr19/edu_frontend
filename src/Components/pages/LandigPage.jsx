import React, { useEffect } from "react";
// import Page1 from '../layouts/landing-pages/Page1'
// import Page2 from '../layouts/landing-pages/Page2'
// import Page3 from "../layouts/landing-pages/Page3";
// import Page4 from "../layouts/landing-pages/Page4/demo";
import Page5 from "../layouts/landing-pages/Page5";
import Page6 from "../layouts/landing-pages/Page6";
import Aos from "aos";
import Banner from "../layouts/landing-pages/Banner";
import Facility from "../layouts/landing-pages/Facility";
import Courses from "../layouts/landing-pages/Courses";

const LandigPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* <Page1 /> */}
      <div className="bg-[#deecec]">
        <Banner />
        <Facility />
        <Courses/>
        {/* <Page2 /> */}
        {/* <Page3 /> */}
        {/* <Page4 /> */}
        <Page5 />
        <Page6 />
      </div>
    </>
  );
};

export default LandigPage;
