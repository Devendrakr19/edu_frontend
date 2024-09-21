import React, { useEffect, useState } from "react";

export default function HealthFitness() {
  const HealthFitnessTopics = [
    "Fitness",
    "General Health",
    "Sports",
    "Nutrition & Diet",
    "Yoga",
    "Mental Health",
    "Martial Arts & Self Defense",
    "Safety & First Aid",
    "Dance",
    "Meditation",
    "Other Health & Fitness",
  ];

  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  // Function to fetch related data from the database
  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      Fitness: ["Cardio", "Strength training", "Flexibility exercises"],
      "General Health": [
        "Healthy lifestyle",
        "Preventive care",
        "Common illnesses",
      ],
      Sports: ["Football", "Basketball", "Tennis", "Swimming"],
      "Nutrition & Diet": [
        "Healthy eating",
        "Weight management",
        "Vitamins & Supplements",
      ],
      Yoga: ["Hatha yoga", "Vinyasa yoga", "Ashtanga yoga"],
      "Mental Health": [
        "Stress management",
        "Anxiety relief",
        "Depression support",
      ],
      "Martial Arts & Self Defense": ["Karate", "Taekwondo", "Krav Maga"],
      "Safety & First Aid": [
        "CPR",
        "First aid techniques",
        "Emergency preparedness",
      ],
      Dance: ["Ballet", "Hip hop", "Salsa", "Contemporary dance"],
      Meditation: [
        "Mindfulness meditation",
        "Guided meditation",
        "Transcendental meditation",
      ],
      "Other Health & Fitness": [
        "Sleep hygiene",
        "Holistic health practices",
        "Wellness coaching",
      ],
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
      {HealthFitnessTopics.map((topic, index) => (
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
