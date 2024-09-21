import React, { useState, useEffect } from "react";

export default function DevelopmentContent() {
  const developmentTopics = [
    "Web development",
    "Data Science",
    "Mobile Development",
    "Programing Language",
    "Game Development",
    "Software Testing",
    "Software Engineering",
    "Software Development Tools",
    "No-code Development",
  ];

  // State to store related data for each topic
  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  // Function to fetch related data from the database
  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      "Web development": ["React.js", "HTML & CSS", "JavaScript"],
      "Data Science": ["Python", "R", "Machine Learning"],
      "Mobile Development": ["React Native", "Swift", "Kotlin"],
      "Programing Language": ["Java", "C++", "Python"],
      "Game Development": ["Unity", "Unreal Engine", "GameMaker"],
      "Software Testing": ["Unit Testing", "Integration Testing", "UI Testing"],
      "Software Engineering": [
        "Agile Methodologies",
        "SDLC",
        "Design Patterns",
      ],
      "Software Development Tools": ["Git", "Jenkins", "Docker"],
      "No-code Development": ["Bubble", "Webflow", "Appgyver"],
    };
    setRelatedData(dataFromDatabase);
  };

  useEffect(() => {
    // Fetch related data when the component mounts
    fetchRelatedData();
  }, []);

  const ShowTopic = (index) => {
    setShowItem(showItem === index ? null : index);
  };

  return (
    <>
      {developmentTopics.map((topic, index) => (
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
