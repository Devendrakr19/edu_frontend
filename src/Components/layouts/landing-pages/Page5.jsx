import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Page5 = () => {

  const [counteron, setcounteron] = useState(false);

  const card = [
    {
      count: <CountUp end={200} suffix="K+" duration={2.75} />,
      title: "More Students",
    },
    {
      count: <CountUp end={140} suffix="K+" duration={2.75} />,

      title: "Expert Mentor’s",
    },
    {
      count: <CountUp end={500} suffix="+" duration={2.75} />,
      title: "Expert Mentor’s",
    },
    {
      count: <CountUp end={20} suffix="+" duration={2.75} />,
      title: "Expert Member’s",
    },
  ];

  return (
    <>
      <section className=" max-w-[1280px] mx-auto mt-16 items-center   ">
        {/*********************** * Left side Section **************************** */}

        <div className="mx-auto justify-between flex">
          <div data-aos="fade-right" className="max-w-[40%]">
            <div className="text-[40px] font-semibold tracking-wide">
              <h1>
                Why to choose<br></br> our{" "}
                <span className="text-[#0BA085]">program</span>{" "}
              </h1>
            </div>
            <div className="mt-5 text-[15px] font-medium leading-8 ">
              <h1>
                We are the largest and oldest provider of online education
                services in the world, best served and with professional, smart
                and intelligent teachers, best graduates from the best campuses
                in the world
              </h1>
            </div>

            <div className="mt-16">
            <ScrollTrigger
      onEnter={() => setcounteron(true)}
      onExit={() => setcounteron(false)}
    >
      <div className="flex flex-wrap gap-16     ">
        {card.map((data, index) => (
          <div
            key={index}
            className="max-w-xs p-3 rounded overflow-hidden  bg-teal-50 hover:shadow-xl transition duration-300 ease-in-out"
          >
            <div className=" flex text-2xl  text-[#0BA085]">
              <h1 className="  text-2xl  font-semibold text- tracking-wider">
                {counteron && data.count}
              </h1>
            </div>
            <div className="">
              <p className=" mb-3 text-lg   text-gray-600 tracking-wider">
                {data.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </ScrollTrigger>
            </div>
          </div>

          {/*********************** * Right side Section **************************** */}
          <div data-aos="fade-left" className="mt-8">
            <img src="/Group .png" alt="img" />
          </div>
        </div>
      </section>
    </>
  );
}

export default Page5
