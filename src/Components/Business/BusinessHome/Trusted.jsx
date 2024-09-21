import React from "react";
import "./Getdemo.scss";

function Trusted() {
  const card = [
    {
      img: "../trustedimg/Meta-Logo.png",
    },

    {
      img: "../trustedimg/google_logo.png",
    },
    {
      img: "../trustedimg/microsoft.png",
    },
    {
      img: "../trustedimg/adobe-logo.png",
    },
    {
      img: "../trustedimg/intel_lodo.png",
    },
    {
      img: "../trustedimg/accenture-logo.png",
    },
    {
      img: "../trustedimg/Capgemini-Logo.png",
    },
    {
      img: "../trustedimg/punjab_bank.png",
    },

    {
      img: "../trustedimg/hp_logo.png",
    },
    {
      img: "../trustedimg/phonepe-logo.png",
    },
    {
      img: "../trustedimg/Swiggy-Logo.png",
    },
    {
      img: "../trustedimg/wipro-logo.png",
    },
    {
      img: "../trustedimg/TCS_logo.png",
    },
    {
      img: "../trustedimg/amazon-logo.png",
    },
    {
      img: "../trustedimg/dell_logo.png",
    },
    {
      img: "../trustedimg/hcl_logo.png",
    },
  ];
  return (
    <div className="trusted_div">
      {card.map((data, index) => (
        <React.Fragment key={index}>
          <div className="img-size">
            <img src={data.img} alt={`Image ${index}`} className="imgclass" />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
}

export default Trusted;
