import React from "react";
import {
  FaFacebook,
  FaInstagramSquare,
  FaYoutube,
  FaHome,
} from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  const Icons = [
    {
      iconurl: "/icons/facebook.png",
    },
    {
      iconurl: "/icons/instagram.png",
    },
    {
      iconurl: "/icons/linkedin.png",
    },
    {
      iconurl: "/icons/twitter.png",
    },
    {
      iconurl: "/icons/youtube.png",
    },
  ];

  const InportantLink = [
    {
      title: "Business with Knowlege.all",
    },
    {
      title: "Abouts Us",
    },
    {
      title: "Contact Us",
    },
    {
      title: "Help?",
    },
  ];
  const About = [
    {
      title: "Partners",
    },
    {
      title: "Careers",
    },
    {
      title: "Placement",
    },
    {
      title: "Community",
    },
  ];
  const OurOffice = [
    {
      title: "Parsauna, Parsa, Saran (Bihar), 841219, Inida.",
      logo: <FaHome />,
    },
    {
      title: "knowledge.all@gmail.com",
      logo: <MdEmail />,
    },
    {
      title: "+91 9608950496",
      logo: <FaPhoneAlt />,
    },
  ];
  return (
    <>
      <div className="bg-[#1a7676] mt-[80px] pt-[60px]">
        <Grid container columnSpacing={4}>
          <Grid item md={3}>
            <div className="bg-[#f3f1f1] flex justify-center mt-[6px] rounded-r-full py-[8px] px-[5px] shadow-lg">
              <img src="./icons/logo.svg" alt="Logo" className="w-[200px]" />
            </div>
            <div className="flex items-center gap-[15px] mt-[40px] pl-[15px]">
              {Icons.map((item, index) => (
                <div
                  key={index}
                  className="rounded-full w-[40px] shadow-2xl cursor-pointer transform transition duration-300 ease-in-out hover:scale-110 "
                >
                  <img src={item?.iconurl} alt="img" />
                </div>
              ))}
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="flex flex-col items-center">
              <div className="flex flex-col">
                <h6 className="text-[#dfdddd] mb-[5px] underline text-[22px] font-semibold">
                  Important Links
                </h6>
                {InportantLink.map((item, index) => (
                  <Link
                    key={index}
                    className="mb-[8px] hover:translate-x-1 duration-300 hover:text-[white]"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="flex flex-col items-center">
              <div className="flex flex-col">
                <h6 className="text-[#dfdddd] mb-[5px] underline text-[22px] font-semibold">
                  About
                </h6>
                {About.map((item, index) => (
                  <Link
                    key={index}
                    className="mb-[8px] hover:translate-x-1 duration-300 hover:text-[white]"
                  >
                    {item?.title}
                  </Link>
                ))}
              </div>
            </div>
          </Grid>
          <Grid item md={3}>
            <div className="flex flex-col  ">
              <div className="flex flex-col">
                <h6 className="text-[#dfdddd] mb-[5px] underline text-[22px] font-semibold">
                  Our office
                </h6>
                {OurOffice.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-[10px] mb-[15px]"
                  >
                    <span className="text-[22px]">{item?.logo}</span>
                    <p className="">{item?.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="bg-[#d8d6d6] p-3 text-center mt-[80px] ">
          by Devenra Kumar Pandit | © 2024 All Copyright :
          <span className="text-[#1a7676] font-semibold"> Knowlege.all</span>
        </div>
      </div>
    </>
  );
};

export default Footer;
