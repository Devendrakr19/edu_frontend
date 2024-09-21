import React, { useState } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet } from "react-router-dom";

const data = [
  {
    header: "Course management",
    links: [
      { to: "", label: "Add course" },
      { to: "admn-course-details", label: "Course details" },
    ],
  },
  {
    header: "Teacher management",
    links: [
      { to: "teacher-list", label: "Teacher list" },
      { to: "teacher-details", label: "Teacher details" },
    ],
  },
  {
    header: "Student management",
    links: [
      { to: "student-list", label: "Student list" },
      { to: "student-details", label: "Student details" },
    ],
  },
  {
    header: "Payment management",
  },
  {
    header: "Business management",
  },
  {
    header: "Content management",
  },
  {
    header: "User block & permission",
  },
  {
    header: "System management",
  },
  {
    header: "Analytics and Reporting",
  },
  {
    header: "Lab management",
  },
  {
    header: "Role-Based Access Control",
  },
];

function AccordionList() {
  const [dashboardSidebar, setDashboardSidebar] = useState(false);

  const handleDashboardSidebar = (open) => {
    setDashboardSidebar(open);
  };

  return (
    <div className="grid lg:grid-cols-5 gap-[10px] p-[10px]">
      <div className="col-span-2 lg:col-span-5">
        <div className="flex justify-start items-center cursor-pointer bg-[#1d6e4f41] w-[30px] p-[5px] rounded lg:hidden">
          <RxHamburgerMenu
            className="text-[20px]"
            onClick={() => handleDashboardSidebar(true)}
          />
        </div>
      </div>
      <div
        className={`absolute overflow-y-scroll scrollbar_hide lg:relative z-10 top-0 left-0 w-[280px] h-full lg:h-[660px] p-[10px] bg-[#95f2ce] lg:bg-[#95f2ce61] rounded lg:block transform ${
          dashboardSidebar ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:col-span-1`}
      >
        <div className="flex flex-col justify-center items-center gap-[8px] border-b-[1px] border-b-[#000000]">
          <div
            className="w-[100%] flex justify-end items-center cursor-pointer lg:hidden"
            onClick={() => handleDashboardSidebar(false)}
          >
            <p className="text-[20px] font-medium">{"X"}</p>
          </div>
          <div className="w-[90px]">
            <img
              src="/avat.jpg"
              alt="Profile"
              className="object-contain rounded-full"
            />
          </div>
          <div className="p-[5px]">
            <p>Profile</p>
          </div>
        </div>
        <div>
          {data.map((item, index) => (
            <Accordion
              key={index}
              className="w-[260px] bg-[#d7f3e7] hover:bg-[#b3e5d3]"
              style={{
                boxShadow: "none",
                border: "none",
                backgroundColor: "#d7f3e7",
              }}
              sx={{
                "&.MuiPaper-root": { paddingBottom: "0px", margin: "0px" },
              }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
                // sx={{"&.MuiButtonBase-root":{padding:"0px" , minHeight:"20px"}}}
                sx={{
                  "&.MuiButtonBase-root": {
                    padding: "0px",
                    minHeight: "30px", // Adjusted minHeight
                    border: "none",
                  },
                  "& .MuiAccordionSummary-content": {
                    margin: "8px 0", // Adjust spacing around content
                  },
                }}
              >
                <Typography>{item.header}</Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{
                  padding: "0px 16px", // Adjust padding inside AccordionDetails
                  margin: "0px", // No additional margin
                  minHeight: "0px", // Remove minHeight if any
                  border: "none", // Ensure no border-bottom
                }}
              >
                <div>
                  {item.links ? (
                    item.links.map((link, idx) => (
                      <Typography key={idx} style={{ marginBottom: "8px" }}>
                        <Link to={link.to}>{link.label}</Link>
                      </Typography>
                    ))
                  ) : (
                    <Typography>No links available</Typography>
                  )}
                </div>
              </AccordionDetails>
            </Accordion>
          ))}
          <div className="text-red-500 cursor-pointer font-semibold a hover:text-[red] transition-colors ">
            Logout
          </div>
        </div>
      </div>
      <div className="col-span-4">
        <Outlet />
      </div>
    </div>
  );
}

export default AccordionList;
