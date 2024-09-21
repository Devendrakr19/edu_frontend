import React from "react";
import "./Getdemo.scss";
import { FcCheckmark } from "react-icons/fc";

function HeadingCard() {
  const card = [
    {
      icon: <FcCheckmark />,
      descreption:
        "Train your entire workforce with over 25,000+ courses in 15 languages",
    },
    {
      icon: <FcCheckmark />,
      descreption:
        "Prep employees for over 200 industry-recognized certification exams",
    },
    {
      icon: <FcCheckmark />,
      descreption:
        "Develop highly skilled tech teams in risk-free practice environments",
    },
    {
      icon: <FcCheckmark />,
      descreption:
        "Identify emerging skills gaps, learning trends, and industry benchmarks",
    },
    {
      icon: <FcCheckmark />,
      descreption:
        "Integrate content with your existing learning management system",
    },
  ];

  return (
    <div className=" ">
      {card.map((data, index) => (
        <div key={index} className="con-icon">
          <div className="contain-icon">{data.icon}</div>
          <div className="para">
            <p className="contain">{data.descreption}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default HeadingCard;
