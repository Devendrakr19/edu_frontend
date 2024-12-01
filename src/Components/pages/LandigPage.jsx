import React, { useEffect } from 'react'
// import Page1 from '../layouts/landing-pages/Page1'
import Page2 from '../layouts/landing-pages/Page2'
import Page3 from '../layouts/landing-pages/Page3'
import Page4 from '../layouts/landing-pages/Page4/demo'
import Page5 from '../layouts/landing-pages/Page5'
import Page6 from '../layouts/landing-pages/Page6'
import Aos from 'aos'
import Banner from '../layouts/landing-pages/Banner'

const LandigPage = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      {/* <Page1 /> */}
      <Banner/>
      <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
    </>
  )
}

export default LandigPage