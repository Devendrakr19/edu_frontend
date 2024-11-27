import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa";
import CourseDetails from "./CourseDetails";
import UploadedClasses from "./UploadedClasses";

const RecordedClass = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [showCourses, setShowCourses] = useState(true);
  const createfolder = [
    {
      img: "../Mern.png",
      coursetitle: "Become Fullstack using MERN Express, mongodb",
      teachername: "Devendra Kumar pandit",
      Price: 2999,
      level: "Beginner",
      duration: "6",
    },
    {
      img: "../Mern.png",
      coursetitle: "C++ for beginner",
      teachername: "Devendra Kumar pandit",
      Price: 4999,
      level: "Beginner",
      duration: "6",
    },
    {
      img: "../Mern.png",
      coursetitle: "Java with DSA for beginner to advanced",
      teachername: "Devendra Kumar pandit",
      Price: 5999,
      level: "Beginner",
      duration: "8",
    },
    {
      img: "../Mern.png",
      coursetitle: "Java with DSA for beginner to advanced",
      teachername: "Devendra Kumar pandit",
      Price: 5999,
      level: "Beginner",
      duration: "8",
    },
    {
      img: "../Mern.png",
      coursetitle: "Java with DSA for beginner to advanced",
      teachername: "Devendra Kumar pandit",
      Price: 5999,
      level: "Beginner",
      duration: "8",
    },
  ];

  const handleCourses = () => {
    setShowCourses(false);
  };
  const HandlePopup = () => {
    setOpenPopup(true);
  };
  const handleClose = () => {
    setOpenPopup(false);
  };
  return (
    <>
      <div className="">
        <div className="flex flex-wrap gap-[20px]">
          {showCourses ? (
            <>
              {createfolder.map((item, index) => (
                <div
                  className="border-[1px] border-[#adacac] transition-all delay-75 hover:bg-[#ceeace] cursor-pointer rounded w-[250px] px-[6px] py-[6px]"
                  onClick={handleCourses}
                >
                  <img
                    src={item.img}
                    alt=""
                    className="w-[250px] rounded object-cover"
                  />
                  <p className="text-[15px] font-medium leading-[18px] mt-[5px]">
                    {item.coursetitle}
                  </p>
                  <p className="text-[14px] font-semibold">
                    Teacher:{" "}
                    <span className="text-[13px] font-medium">
                      {item.teachername}
                    </span>
                  </p>
                  <p className="text-[14px] font-semibold">
                    Price:{" "}
                    <span className="text-[13px] font-medium">
                      Rs {item.Price}
                    </span>
                  </p>
                  <p className="text-[14px] font-semibold">
                    Lavel:
                    <span className="text-[13px] font-medium">
                      {item.level}
                    </span>
                  </p>
                  <p className="text-[14px] font-semibold">
                    Duration:{" "}
                    <span className="text-[13px] font-medium">
                      {item.duration} months
                    </span>
                  </p>
                </div>
              ))}
              <div
                className="border-[1px] border-[#adacac] flex justify-center items-center transition-all delay-75 hover:bg-[#ceeace] cursor-pointer rounded w-[250px] px-[6px] py-[6px]"
                onClick={HandlePopup}
              >
                <FaFolderPlus className="text-[88px]" />
              </div>
            </>
          ) : (
            <UploadedClasses setShowCourses={setShowCourses}/>
          )}
        </div>
      </div>
      <CourseDetails open={openPopup} onClose={handleClose} />
    </>
  );
};

export default RecordedClass;
