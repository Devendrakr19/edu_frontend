import React from "react";
import { FcRight } from "react-icons/fc";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Page3.css";

const Page3 = () => {
  const settings = {
    dots: true,
    infinite: true,
 
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const card = [
    {
      img: "Icon.png",
      title: "Non Credit Programmes",
      subtitle: "Join Now",
      icon: <FcRight />,
    },
    {
      img: "Icon (1).png",
      title: "Management",
      subtitle: "Join Now",
      icon: <FcRight />,
    },
    {
      img: "Icon(2).png",
      title: "Bachlor's Degree",
      subtitle: "Join Now",
      icon: <FcRight />,
    },
    {
      img: "Icon (3).png",
      title: "PG & Advance Diploma",
      subtitle: "Join Now",
      icon: <FcRight />,
    },
    {
      img: "Icon (4).png",
      title: "Bachlor's Degree",
      subtitle: "Join Now",
      icon: <FcRight />,
    },
    {
      img: "Icon (5).png",
      title: "Bachlor's Degree",
      subtitle: "Join Now",
      icon: <FcRight />,
    },
  ];

  return (
    <>
      <section className="max-w-[1300px]  mx-auto mt-[80px]">
        {/* Title And Subtitle  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-4xl text-black">
            <h1>Our Popular Program</h1>
          </div>
          <div className=" font-Poppins text-black text-xl font-medium pt-3">
            <h1>Get the world class & verified program</h1>
          </div>
        </div>

        {/********************Slider Card*************************/}
        <div
          // data-aos="fade-up"
          className="mt-16">
          <Slider {...settings}>
        {card.map((data, index) => (
          <div
            key={index}
            className=" h-[250px]  relative rounded-lg overflow-hidden  bg-slate-50  shadow-slate-400 border-2 border-gray-300  transform transition duration-500 hover:scale-90   justify-center items-center flex cursor-pointer"
          >
            <div className=" ">
              <div className=" h-20 w-20  mt-8 items-center mx-auto justify-center">
                <img src={data.img} alt="icon" />
              </div>
              <div className=" text-center xl:mt-8 sm:mt-2 mt-0 text-blue-950 text-[20px] font-semibold">
                <h1>{data.title}</h1>
              </div>

              <div className=" my-4 border-2 xl:mx-20  md:lg-20 mx-20 p-2 rounded-lg  font-medium flex gap-5 justify-center items-center text-textcolor">
                <p>{data.subtitle}</p>
                {data.icon}
              </div>
            </div>
          </div>
        ))}
      </Slider>
        </div>
      </section>
    </>
  );
}

export default Page3