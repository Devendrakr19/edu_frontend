import React, { useEffect, useState } from "react";

export default function PersonalDevelopment() {
  // Define an array of personal development topics
  const developmentTopics = [
    "Personal Transformation",
    "Personal Productivity",
    "Leadership",
    "Career Development",
    "Parenting & Relationships",
    "Happiness",
    "Esoteric Practices",
    "Religion & Spirituality",
    "Personal Brand Building",
    "Creativity",
    "Influence",
    "Self Esteem & Confidence",
    "Stress Management",
    "Memory & Study Skills",
    "Motivation",
    "Other Personal Development",
  ];

  // State to store related data for each topic
  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  // Function to fetch related data from the database
  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      "Personal Transformation": [
        "Self-awareness",
        "Mindfulness",
        "Growth mindset",
      ],
      "Personal Productivity": [
        "Time management",
        "Goal setting",
        "Task prioritization",
      ],
      Leadership: [
        "Communication skills",
        "Decision making",
        "Team management",
      ],
      "Career Development": [
        "Resume writing",
        "Interview skills",
        "Networking",
      ],
      "Parenting & Relationships": [
        "Parenting techniques",
        "Effective communication",
        "Conflict resolution",
      ],
      Happiness: [
        "Gratitude practice",
        "Positive psychology",
        "Emotional well-being",
      ],
      "Esoteric Practices": ["Meditation", "Yoga", "Energy healing"],
      "Religion & Spirituality": [
        "Spiritual teachings",
        "Religious practices",
        "Moral values",
      ],
      "Personal Brand Building": [
        "Online presence",
        "Brand identity",
        "Marketing strategies",
      ],
      Creativity: [
        "Idea generation",
        "Creative thinking techniques",
        "Artistic expression",
      ],
      Influence: [
        "Persuasion techniques",
        "Negotiation skills",
        "Social influence",
      ],
      "Self Esteem & Confidence": [
        "Self-affirmations",
        "Building self-confidence",
        "Overcoming imposter syndrome",
      ],
      "Stress Management": [
        "Stress-relief techniques",
        "Relaxation methods",
        "Mindfulness practices",
      ],
      "Memory & Study Skills": [
        "Memory improvement techniques",
        "Effective studying strategies",
        "Learning methods",
      ],
      Motivation: [
        "Goal setting",
        "Intrinsic motivation",
        "Achievement motivation",
      ],
      "Other Personal Development": [
        "Life coaching",
        "Personal growth seminars",
        "Online courses",
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
      {/* Map through the array to render each personal development content */}
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
