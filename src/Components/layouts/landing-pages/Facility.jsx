import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { Grid } from "@mui/material";

const Facility = () => {
  const card = [
    {
      icon: <RiGraduationCapFill />,
      title: "Expert Mentor’s",
      subtitle: "Receive guidance from experienced mentors, all graduates of prestigious institutions.",
    },
    {
      icon: <FaMedal />,
      title: "Lifetime Access",
      subtitle: "With lifetime access, you'll receive a certificate that can be used to apply for work at any time.",
    },
    {
      icon: <FaUser />,
      title: "Online",
      subtitle: "Broaden your professional network and gain opportunities for employment.",
    },
  ];

  return (
    <>
      <div className="pt-[50px]">
        <Grid container rowGap={3}>
          <Grid item xs={12}>
            <div className="text-[40px] font-medium text-center mb-[40px]">
              <h1>
                Learn, grow and succeed with{" "}
                <span className="text-[#2d8fc3] font-semibold">
                  Knowledge.all
                </span>
              </h1>
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="bg-[#1a7676] rounded-l rounded-full pr-[30px]">
              <img src="/icons/learn_grow1.svg" alt="" className="" />
            </div>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="px-[40px]">
              <h1 className="">
                Becoming a dedicated student with us will offer you in-depth
                knowledge, foster valuable relationships, and provide you with
                internationally recognized certifications, opening doors to
                global opportunities and enhancing your professional growth in
                today's competitive world.
              </h1>

              {card.map((data, index) => (
                <div
                  key={index}
                  className="w-[400px] bg-[#f3f0f0] border-[1px] hover:border-[transparent] border-[#1a76763d] pt-[5px] pb-[10px] px-[8px] mt-[15px] rounded-lg  hover:shadow-xl transition duration-300 ease-in-out"
                >
                  <div className="flex items-center gap-[20px] text-[20px] text-[#0BA085]">
                    {data.icon}
                    <h1 className="font-semibold tracking-wide ">
                      {data.title}
                    </h1>
                  </div>
                  <div className="pl-[41px]">
                    <p className="text-[14px] text-[#454545] tracking-wide">
                      {data.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Facility;
