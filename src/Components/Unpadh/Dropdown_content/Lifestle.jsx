import React, { useEffect, useState } from "react";

export default function Lifestyle() {
  const lifestyleTopics = [
    "Arts & Crafts",
    "Beauty & Makeup",
    "Esoteric Practices",
    "Food & Beverage",
    "Gaming",
    "Home Improvement & Gardening",
    "Pet Care & Training",
    "Travel",
    "Other Lifestyle",
  ];
  // State to store related data for each topic
  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  // Function to fetch related data from the database
  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      "Arts & Crafts": ["Drawing", "Painting", "Sculpting"],
      "Beauty & Makeup": [
        "Skincare",
        "Makeup application techniques",
        "Beauty products",
      ],
      "Esoteric Practices": ["Astrology", "Tarot reading", "Crystal healing"],
      "Food & Beverage": ["Cooking recipes", "Mixology", "Dining etiquette"],
      Gaming: ["Video game reviews", "Gaming strategies", "Gaming communities"],
      "Home Improvement & Gardening": [
        "DIY projects",
        "Gardening tips",
        "Home decor ideas",
      ],
      "Pet Care & Training": ["Pet grooming", "Training methods", "Pet health"],
      Travel: ["Travel destinations", "Travel guides", "Travel tips"],
      "Other Lifestyle": ["Hobbies", "Leisure activities", "Lifestyle trends"],
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
      {lifestyleTopics.map((topic, index) => (
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
