import React, { useEffect, useState } from "react";

export default function BusinessContent() {
  const businessTopics = [
    "Entrepreneurship",
    "Communication",
    "Management",
    "Sales",
    "Business Strategy",
    "Operations",
    "Project Management",
    "Business Law",
    "Business Analytics & Intelligence",
    "Human Resources",
    "Industry",
    "E-Commerce",
    "Media",
    "Real Estate",
    "Other Business",
  ];

  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  const fetchRelatedData = async () => {
    const dataFromDatabase = {
      Entrepreneurship: ["Startups", "Venture Capital", "Business Plans"],
      Communication: ["Public Speaking", "Negotiation", "Interpersonal Skills"],
      Management: ["Leadership", "Team Building", "Organizational Behavior"],
      Sales: [
        "Sales Techniques",
        "Lead Generation",
        "Customer Relationship Management",
      ],
      "Business Strategy": [
        "SWOT Analysis",
        "Competitive Intelligence",
        "Market Research",
      ],
      Operations: [
        "Supply Chain Management",
        "Process Improvement",
        "Logistics",
      ],
      "Project Management": ["Agile Methodologies", "Scrum", "Risk Management"],
      "Business Law": ["Contracts", "Intellectual Property", "Employment Law"],
      "Business Analytics & Intelligence": [
        "Data Visualization",
        "Predictive Analytics",
        "Big Data",
      ],
      "Human Resources": [
        "Recruitment",
        "Training & Development",
        "Performance Management",
      ],
      Industry: ["Retail", "Healthcare", "Finance"],
      "E-Commerce": [
        "Online Marketing",
        "Payment Gateways",
        "Customer Experience",
      ],
      Media: ["Advertising", "Social Media Marketing", "Content Creation"],
      "Real Estate": [
        "Property Management",
        "Real Estate Investment",
        "Home Buying Process",
      ],
      "Other Business": ["Networking", "Leadership", "Public Relations"],
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
      {/* Map through the array to render each business content */}
      {businessTopics.map((topic, index) => (
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
