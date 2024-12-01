import React from 'react'
import { Grid } from "@mui/material";


const Banner = () => {
  return (
    <>
      <div className="min-h-[570px] bg-[#1a7676]">
        <Grid container rowGap={2} className="">
          <Grid item md={6} xs={12} className="">
            <div className="flex flex-col pl-[80px] mt-[50px]">
              <span className="text-[65px] font-extrabold leading-[80px]">
                Focus on <span className="text-[#e0dede]">Learning</span> &{" "}
                <span className="text-[#ffff00c9]">Growth</span>
              </span>

              <div class="w-[65%]">
                <h1 class="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-[30px] text-[40px] text-white font-bold">
                  Take the First Step
                </h1>
              </div>
              <div className="flex items-center gap-[10px] mt-[15px]">
                <button className="px-[15px] py-[5px] bg-[#0000008e] text-[#43fffc] rounded-full text-[15px] font-medium cursor-text">
                  Unlock Your Potential
                </button>
                <button className="px-[15px] py-[5px] bg-[#0000008e] text-[#ffffff] rounded-full text-[15px] font-medium cursor-text">
                  Master New Skills
                </button>
                <button className="px-[15px] py-[5px] bg-[#0000008e] text-[#f2ff3f] rounded-full text-[15px] font-medium cursor-text">
                  {" "}
                  Shape Your Future
                </button>
              </div>
              <span className="text-[16px] font-medium mt-[30px] text-[#defffe] leading-[25px]">
                Learn at your own pace with expert-led courses and resources.
                Whether you're starting a new journey or advancing your skills,
                we offer flexible learning paths to help you succeed. Start
                today and take the first step toward your future.
              </span>
            </div>
          </Grid>
          <Grid item md={6} xs={12}>
            <div className="max-w-[400px] md:max-w-xl pl-8 md:pt-12 ">
              <img src="about.png" alt="" className="relative" />
            </div>

            <div className="  grid grid-cols-4 gap-4 absolute right-16 top-28 ">
              {Array.from({ length: 4 * 4 }).map((_, index) => (
                <div
                  key={`grid-item-${index}`}
                  className="md:opacity-100 opacity-0  w-2 h-2  bg-yellow-300 rounded-full "
                ></div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  )
}

export default Banner