import { Grid } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const ChooseProgram = () => {
  const [counteron, setcounteron] = useState(false);

  const card = [
    {
      count: <CountUp end={200} suffix="K+" duration={2.75} />,
      title: "More Students",
      img: "/icons/student.svg",
    },
    {
      count: <CountUp end={140} suffix="K+" duration={2.75} />,
      title: "Expert Mentor’s",
      img: "/icons/teacher.svg",
    },
    {
      count: <CountUp end={20} suffix="+" duration={2.75} />,
      title: "Expert Member’s",
      img: "/icons/members.svg",
    },
  ];
  return (
    <>
      <div className="pt-[50px]">
        <Grid container columnSpacing={6}>
          <Grid item md={6} className="">
            <div className="pl-[60px] text-[40px] font-semibold">
              <h1>Why select our program</h1>
            </div>
            <div className="pl-[60px] leading-[25px] mt-[10px]">
              <h1>
                As the most experienced and expansive online education provider,
                we offer high-quality learning experiences with expert
                instructors, all of whom are exceptional graduates from the
                world’s best campuses.
              </h1>
            </div>

            <div className="pl-[60px] mt-[50px]">
              <ScrollTrigger
                onEnter={() => setcounteron(true)}
                onExit={() => setcounteron(false)}
              >
                <div className="flex items-center gap-[80px]">
                  {card.map((data, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center program "
                    >
                      <img src={data.img} alt="img" className="w-[100px]" />
                      <h1 className="text-[40px] font-semibold mt-[3px] text-[#1a7676]">
                        {counteron && data.count}
                      </h1>
                      <p className="text-[18px]">{data.title}</p>
                    </div>
                  ))}
                </div>
              </ScrollTrigger>
            </div>
          </Grid>
          <Grid item md={6}>
              <div className="bg-[#1a7676] pl-[15px] rounded-l-full overflow-hidden">
                <img src="/icons/gr.png" alt="img" className="rounded-l-full mt-[-30px]" />
              </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default ChooseProgram;
