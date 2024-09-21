import React, { useEffect, useState } from "react";

export default function FinanceAccounting() {
  // Define an array of finance and accounting topics
  const financeTopics = [
    "Accounting & Bookkeeping",
    "Compliance",
    "Cryptocurrency & Blockchain",
    "Economics",
    "Finance",
    "Finance Cert & Exam Prep",
    "Finance Modeling & Analysis",
    "Investing & Trading",
    "Money Management Tools",
    "Taxes",
    "Other Finance & Accounting",
  ];

  const [relatedData, setRelatedData] = useState({});
  const [showItem, setShowItem] = useState(null);

  const fetchRelatedData = async () => {
    // Simulated API call, replace with your actual fetch call
    const dataFromDatabase = {
      "Accounting & Bookkeeping": [
        "Financial Statements",
        "Double-Entry Accounting",
        "Payroll",
      ],
      Compliance: [
        "Regulatory Compliance",
        "Legal Compliance",
        "Corporate Governance",
      ],
      "Cryptocurrency & Blockchain": ["Bitcoin", "Ethereum", "Smart Contracts"],
      Economics: ["Microeconomics", "Macroeconomics", "Behavioral Economics"],
      Finance: ["Corporate Finance", "Personal Finance", "Financial Markets"],
      "Finance Cert & Exam Prep": ["CFA", "CPA", "FRM"],
      "Finance Modeling & Analysis": [
        "Financial Forecasting",
        "Financial Ratios",
        "Valuation Methods",
      ],
      "Investing & Trading": [
        "Stock Market",
        "Forex Trading",
        "Options Trading",
      ],
      "Money Management Tools": [
        "Budgeting Apps",
        "Expense Trackers",
        "Investment Platforms",
      ],
      Taxes: ["Income Tax", "Corporate Tax", "Tax Planning"],
      "Other Finance & Accounting": [
        "Auditing",
        "Risk Management",
        "Financial Planning",
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
      {/* Map through the array to render each finance and accounting content */}
      {financeTopics.map((topic, index) => (
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
