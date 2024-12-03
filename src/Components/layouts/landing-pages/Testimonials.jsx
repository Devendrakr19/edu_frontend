import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Grid } from "@mui/material";
import { SiComma } from "react-icons/si";

const Testimonials = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
    speed: 3000,
    autoplay: true,
    autoplaySpeed: 1500,
    pauseOnHover: true,
  };

  const stuCard = [
    {
      img: "man-pass-1.jpg",
      title:
        "I wanted to express my gratitude for the incredible experience I've had with your education platform. As a student, I've found immense value in the resources and opportunities provided, and I wanted to share some feedback ",
      subtitle: "Saraubh Kumar",
      course: "MCA Student",
    },
    {
      img: "man2.jpg",
      title:
        "Your educational platform has been an absolute game-changer for me, and I'm deeply appreciative of the enriching journey it has offered. The wealth of resources and opportunities available has truly transformed my learning experience.",
      subtitle: "Virendra Kumar",
      course: "B.tech Student",
    },
    {
      img: "women2.jpg",
      title:
        "I am profoundly grateful for the unparalleled educational journey your platform has enabled me to undertake. The abundance of resources and opportunities has been instrumental in equipping me with the skills and knowledge necessary for success. ",
      subtitle: "Roshni Srivastav",
      course: "MBA Student",
    },
    {
      img: "women1.jpg",
      title:
        "I am profoundly grateful for the exceptional educational journey your platform has enabled me to embark on. The diverse array of resources and opportunities have been instrumental in shaping my academic growth and development.",
      subtitle: "Bharti Singh",
      course: "PG & Advance Diploma Student",
    },
    {
      img: "man4.jpg",
      title:
        "I wanted to extend my heartfelt appreciation for the extraordinary educational experience your platform has afforded me. The myriad of resources and opportunities have been instrumental in nurturing my intellectual curiosity and fostering academic excellence.",
      subtitle: "Aniket Kumar",
      course: "Msc Student",
    },
    {
      img: "women2.jpg",
      title:
        "I gratitude for the incredible educational journey your platform has facilitated for me. The diverse range of resources and opportunities have been instrumental in broadening my horizons and nurturing my passion for learning.",
      subtitle: "Anushka Anu",
      course: "Bsc Student",
    },
    {
      img: "man4.jpg",
      title:
        "Words cannot express the depth of my gratitude for the invaluable learning experience your platform has provided. The abundance of resources and opportunities has been nothing short of remarkable, profoundly impacting my educational journey.",
      subtitle: "Rishul Verma",
      course: "MCA Student",
    },
  ];
  return (
    <>
      <div className="pt-[50px]">
        <Grid container>
          <Grid item xs={12}>
            <div className="text-[40px] font-semibold text-center">
              <h1>What Our Students Think</h1>
            </div>
          </Grid>
        </Grid>

        <Grid item xs={12}>
          <div className="mt-[30px] px-[50px]">
            <Slider {...settings}>
              {stuCard.map((data, index) => (
                <div key={index} className="p-[8px]">
                  <div className="border-[1px] border-gray-400 bg-slate-200 px-[20px] py-[20px] rounded-xl h-[270px]">
                    <div className="flex">
                      <SiComma className="transform scale-x-[-1] text-[26px]" />
                      <SiComma className="transform scale-x-[-1] text-[26px]" />
                    </div>
                    <p className="mt-[10px] pl-[8px]">{data.title}</p>

                    <div className="flex items-center gap-[20px]">
                      <img
                        className="h-[80px] w-[80px] mt-[20px] object-cover object-center rounded-full  border-[5px] border-yellow-300"
                        src={data.img}
                        alt="icon"
                      />
                      <div className="flex flex-col">
                        <span className="font-bold">{data.subtitle}</span>
                        <span className="text-sm">{data.course}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </Grid>
      </div>
    </>
  );
};

export default Testimonials;
