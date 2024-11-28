import React, { useState } from "react";
import { FaFolderPlus } from "react-icons/fa";
import CourseDetails from "./CourseDetails";
import UploadedClasses from "./UploadedClasses";
import { useSelector } from "react-redux";
import { MdDelete } from "react-icons/md";

const RecordedClass = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [showCourses, setShowCourses] = useState(true);
  const courseData =
    useSelector((state) => state?.coursedata?.getCourse?.courses) || [];
  console.log("courseData", courseData);

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
              {courseData?.map((item, index) => (
                <div
                  key={index}
                  className="border-[1px] border-[#adacac] transition-all delay-75 hover:bg-[#ceeace] rounded w-[250px] px-[6px] py-[6px]"
                >
                  <img
                    src={item?.img}
                    alt="Not available"
                    className="w-[250px] rounded object-cover"
                  />
                  <p
                    onClick={handleCourses}
                    className="text-[15px] text-[#296bb6] cursor-pointer font-medium leading-[18px] mt-[5px]"
                  >
                    {item?.coursetitle}
                  </p>
                  <p className="text-[14px] font-semibold">
                    Teacher:{" "}
                    <span className="text-[13px] font-medium">
                      {item?.name}
                    </span>
                  </p>
                  {item?.price ? (
                    <p className="text-[14px] font-semibold">
                      Price:{" "}
                      <span className="text-[13px] font-medium">
                        Rs {item?.price}
                      </span>
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="text-[14px] font-semibold">
                    Lavel:
                    <span className="text-[13px] font-medium">
                      {item?.level}
                    </span>
                  </p>
                  <div className="flex justify-between items-center">
                    <p className="text-[14px] font-semibold">
                      Duration:{" "}
                      <span className="text-[13px] font-medium">
                        {item?.duration} months
                      </span>
                    </p>
                    <MdDelete className="cursor-pointer" />
                  </div>
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
            <UploadedClasses setShowCourses={setShowCourses} />
          )}
        </div>
      </div>
      <CourseDetails open={openPopup} onClose={handleClose} />
    </>
  );
};

export default RecordedClass;
