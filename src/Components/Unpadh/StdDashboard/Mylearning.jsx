import React, { useState } from "react";
import { Tooltip } from "@mui/material";
 

export default function Mylearning() {
  const videoArray = [
    {
      Title: "Nature",
      id: 1,
      url: "./memu agami.mp4",
    },
    {
      Title: "Nature1",
      id: 2,
      url: "./nature.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
    {
      Title: "Nature",
      id: 3,
      url: "./nature1.mp4",
    },
  ];


  const [sidebarshow, setSidebarshow] = useState(true);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const toggleSidebar = () => setSidebarshow(!sidebarshow);

  const handleVideoClick = (index) => setCurrentVideoIndex(index);

  const playNextVideo = () =>
    setCurrentVideoIndex((currentVideoIndex + 1) % videoArray.length);

  const playPreviousVideo = () =>
    setCurrentVideoIndex(
      (currentVideoIndex - 1 + videoArray.length) % videoArray.length
    );

  return (
    <div className="grid grid-cols-3">
      <div className={`col-span-3 ${sidebarshow ? "lg:col-span-2":"lg:col-span-3"}`}>
        <div className="bg-[black] text-[white] flex justify-between items-center px-[5px]">
          <h3>Web application with MERN</h3>
          <i
            className={`uil uil-angle-double-${
              sidebarshow ? "right" : "left"
            } text-[24px] cursor-pointer hidden lg:block`}
            onClick={toggleSidebar}
          ></i>
        </div>
        <div className="">
          <video
            src={videoArray[currentVideoIndex].url}
            type="video/mp4"
            controls
            className="w-[100%]"
          ></video>
          <div className="flex relative gap-[20px] top-[-60px] left-[130px] text-[white]">
            <Tooltip title="Preview" placement="top">
              <i
                className="uil uil-step-backward cursor-pointer"
                onClick={playPreviousVideo}
              ></i>
            </Tooltip>
            <Tooltip title="Next" placement="top">
              <i
                className="uil uil-skip-forward cursor-pointer"
                onClick={playNextVideo}
              ></i>
            </Tooltip>
          </div>
        </div>
      </div>
 
      {sidebarshow && (
        <div className="overflow-y-scroll scrollbar_hide h-[580px] bg-[#95f2ce67] p-[10px] col-span-3 lg:col-span-1">
          <div className="flex gap-[8px]">
            <img
              src="/web.png"
              alt="Course thumbnail"
              className="w-[120px] h-[70px] rounded"
            />
            <div className="flex flex-col">
              <p className="text-[14px]">Web application using MERN</p>
              <span className="text-[12px]">Course: Beginner</span>
              <span className="text-[12px]">Total: 36hours</span>
            </div>
          </div>

          {/* Playlist */}
          <div className="mt-[10px] border-t-[black] border-t-[1px]">
            {videoArray.map((vid, index) => (
              <div
                className="flex gap-[10px] items-center"
                key={vid.id}
                onClick={() => handleVideoClick(index)}
              >
                <video
                  src={vid.url}
                  type="video/mp4"
                  className="w-[100px] h-[70px] rounded"
                ></video>
                <div className="flex flex-col">
                  {/* <p>{vid.id}</p>  */}
                  <p className="text-[14px]">Web application using MERN</p>
                  <span className="text-[12px]">Introduction</span>
                  <span className="text-[12px]">30min</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
