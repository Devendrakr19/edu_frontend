import React, { useEffect, useState } from "react";

export default function PhotographyVideo() {
  // Define an array of photography and video topics
  const PhotographyVideoTopics = [
    "Digital Photography",
    "Photography",
    "Portrait Photography",
    "Photography Tools",
    "Commercial Photography",
    "Video Design",
    "Other Photography & Video",
  ];

  // State to store related data for each topic
  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  // Function to fetch related data from the database
  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      "Digital Photography": [
        "Camera types",
        "Exposure settings",
        "Composition techniques",
      ],
      Photography: [
        "History of photography",
        "Genres of photography",
        "Photography tips",
      ],
      "Portrait Photography": [
        "Lighting techniques",
        "Posing guidance",
        "Editing tips",
      ],
      "Photography Tools": [
        "Editing software",
        "Camera accessories",
        "Storage solutions",
      ],
      "Commercial Photography": [
        "Product photography",
        "Advertising campaigns",
        "Client management",
      ],
      "Video Design": [
        "Video editing software",
        "Motion graphics",
        "Storyboarding",
      ],
      "Other Photography & Video": [
        "Photography exhibitions",
        "Film photography",
        "Documentary filmmaking",
      ],
    };
    setRelatedData(dataFromDatabase);
  };

  useEffect(() => {
    fetchRelatedData();
  }, []);

  const ShowTopic = (index) => {
    setShowItem(showItem === index ? null : index);
  };

  return (
    <>
      {/* Map through the array to render each photography and video content */}
      {PhotographyVideoTopics.map((topic, index) => (
        <div className="" key={index}>
          <div
            className={`flex justify-center items-center px-[8px] py-[4px] cursor-pointer rounded mt-[2px] hover:bg-[#b1f2d9] ${
              showItem === index ? "bg-[#94ccb7]" : ""
            }`}
            onClick={() => ShowTopic(index)}
          >
            <p
              className={`w-[98%] ${
                showItem === index ? "text-[#000000]" : ""
              }`}
            >
              {topic}
            </p>
            <span
              className={`lg:hidden text-[20px] ${
                showItem === index ? "text-[#000000]" : ""
              }`}
            >
              {showItem === index ? "-" : "+"}
            </span>
          </div>

          {/* Render related content for the hovered topic */}
          {showItem === index && relatedData[topic] && (
            <div className="w-[100%] border-b-[1px] border-[white] lg:absolute lg:top-[0px] lg:left-[279px] px-[8px] py-[5px] lg:border-l-[#d7d7d7] lg:border-l-[1px] lg:bg-[white]">
              <p className="">Populer Topics:</p>
              <ul className="w-full p-[5px]">
                {relatedData[topic].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-[3px] rounded cursor-pointer hover:bg-[#b1f2d9]"
                  >
                    <li className="ml-2">{item}</li>
                  </div>
                ))}
              </ul>
            </div>
          )}
        </div>
      ))}
    </>
  );
}
