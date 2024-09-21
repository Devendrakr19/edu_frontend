import React, { useEffect, useState } from "react";

export default function Marketing() {
  const MarketingTopics = [
    "Digital Marketing",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Branding",
    "Marketing Fundamentals",
    "Marketing Analytics & Automation",
    "Public Relations",
    "Paid Advertising",
    "Video & Mobile Marketing",
    "Content Marketing",
    "Growth Hacking",
    "Affiliate Marketing",
    "Product Marketing",
    "Other Marketing",
  ];

  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  // Function to fetch related data from the database
  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      "Digital Marketing": ["SEO", "Content Marketing", "Email Marketing"],
      "Search Engine Optimization": [
        "On-page SEO",
        "Off-page SEO",
        "Local SEO",
      ],
      "Social Media Marketing": [
        "Facebook Marketing",
        "Instagram Marketing",
        "Twitter Marketing",
      ],
      Branding: ["Brand identity", "Brand strategy", "Brand positioning"],
      "Marketing Fundamentals": [
        "Marketing principles",
        "Marketing research",
        "Market segmentation",
      ],
      "Marketing Analytics & Automation": [
        "Google Analytics",
        "Marketing automation tools",
        "Data analysis",
      ],
      "Public Relations": [
        "Media relations",
        "Press releases",
        "Crisis management",
      ],
      "Paid Advertising": ["Google Ads", "Facebook Ads", "LinkedIn Ads"],
      "Video & Mobile Marketing": [
        "YouTube Marketing",
        "Mobile advertising",
        "App Store Optimization",
      ],
      "Content Marketing": [
        "Content strategy",
        "Blogging",
        "Content distribution",
      ],
      "Growth Hacking": [
        "User acquisition",
        "Virality",
        "Retention strategies",
      ],
      "Affiliate Marketing": [
        "Affiliate networks",
        "Commission models",
        "Affiliate tracking",
      ],
      "Product Marketing": [
        "Product launches",
        "Market positioning",
        "Competitive analysis",
      ],
      "Other Marketing": [
        "Event marketing",
        "Influencer marketing",
        "Experiential marketing",
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
      {MarketingTopics.map((topic, index) => (
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
