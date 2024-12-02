import React from "react";
import { RiGraduationCapFill } from "react-icons/ri";
import { FaMedal } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";

const Page2 = () => {
  const rows = 4;
  const cols = 4;

  const card =[
    {
        icon: <RiGraduationCapFill />,
        title: "Expert Mentor’s",
        subtitle: "The best mentors in the world from the best college graduates"
    },
    {
        icon: <FaMedal />,
        title: "Lifetime Access",
        subtitle: "Certificate that can be used to apply for work"
    },
    {
        icon:<FaUser />,
        title: " online",
        subtitle: "Wide relationship and get my opportunities to work"
    },
];

  return (
    <>
      <section className="justify-center items-center  mt-16  w-full mx-auto">
        {/* Left Side  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-4xl">
            <h1>
            Learn, grow and succeed with Knowledge.all
            </h1>
          </div>
           
        </div>

        {/* Right Side  */}
        <div className="container flex flex-col items-center pt-16 ">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center justify-center">
            {/* images  */}
            <div
              // data-aos="fade-left"
              className="items-center relative justify-center "
            >
              <img src="/Group 17.png" alt="" className="relative z-10" />
              <div className="absolute w-[80px] z-0 inset- h-[75px] bg-{#0BA085} rounded-full -top-5 -left-5"></div>
            </div>
            {/* text container  */}
            <div
              // data-aos="fade-right"
              className=" font-Poppins text-lg font-medium"
            >
              <h1>
                Some of the benefits that you will get if you join us and become
                a<br />
                passionate student, you will get insight and knowledge as well
                as
                <br />
                relationships and international certificates
              </h1>
              <div className="grid grid-cols-1 gap-4 pt-5 justify-center  items-center ">
            {card.map((data, index) => (
                <div key={index} className="max-w-xs p-2 rounded-lg overflow-hidden  bg hover:shadow-xl transition duration-300 ease-in-out">
                    <div className="p-2 flex text-2xl  text-[#0BA085]">
                        {data.icon}
                        <h1 className="ml-[20px]  text-lg font-semibold text-textcolor tracking-wide ">{data.title}</h1>
                    </div>
                    <div className="">
                        <p className="ml-[53px] mb-3 text-sm  text-gray-600 tracking-wide">
                            {data.subtitle}
                        </p>
                    </div>
                </div>
            ))}
        </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Page2