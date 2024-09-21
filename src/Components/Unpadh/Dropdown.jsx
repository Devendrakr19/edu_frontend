import React, { useState } from "react";
import DevelopmentContent from "./Dropdown_content/DevelopmentContent";
import BusinessContent from "./Dropdown_content/BusinessContent";
import FinanceAccounting from "./Dropdown_content/FinanceAccounting";
import ItSoftware from "./Dropdown_content/ItSoftware";
import OfficeProductivity from "./Dropdown_content/OfficeProductivity";
import PersonalDevelopment from "./Dropdown_content/PersonalDevelopment";
import Design from "./Dropdown_content/Design";
import Marketing from "./Dropdown_content/Marketing";
import Lifestyle from "./Dropdown_content/Lifestle";
import PhotographyVideo from "./Dropdown_content/PhotographyVideo";
import HealthFitness from "./Dropdown_content/HealthFitness";
import Music from "./Dropdown_content/Music";
import TeachingAcademics from "./Dropdown_content/TeachingAcademic";

export default function Dropdown() {
  const [activeCategory, setActiveCategory] = useState(null);

  const handleClick = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };
 
  const categories = [
    { plusicon:"+", subticon:"-", title:"Development", content: <DevelopmentContent /> },
    { plusicon:"+", subticon:"-", title:"IT & Software", content: <ItSoftware /> },
    { plusicon:"+", subticon:"-", title:"Business", content: <BusinessContent /> },
    { plusicon:"+", subticon:"-", title:"Finance & Accounting", content: <FinanceAccounting /> },
    { plusicon:"+", subticon:"-", title:"Music", content: <Music /> },
    { plusicon:"+", subticon:"-", title:"Photography & Video", content: <PhotographyVideo /> },
    { plusicon:"+", subticon:"-", title:"Office Productivity", content: <OfficeProductivity /> },
    { plusicon:"+", subticon:"-", title:"Personal Development", content: <PersonalDevelopment /> },
    { plusicon:"+", subticon:"-", title:"Lifestyle", content: <Lifestyle /> },
    { plusicon:"+", subticon:"-", title:"Design", content: <Design /> },
    { plusicon:"+", subticon:"-", title:"Teaching & Academics", content: <TeachingAcademics /> },
    { plusicon:"+", subticon:"-", title:"Health & Fitness", content: <HealthFitness /> },
    { plusicon:"+", subticon:"-", title:"Marketing", content: <Marketing /> },
  ];

  return (
    <div className="w-[100%] lg:w-[250px] lg:top-[45px] lg:h-[525px] lg:absolute z-10 lg:bg-[white] px-[4px]">
      {categories.map((category, index) => (
        <div className="" key={index}>
          <div
            className="w-[100%] cursor-pointer"
            onClick={() => handleClick(category.title)}
          >
            <div
              className={`px-[8px] py-[5px] flex justify-between items-center mt-[5px] rounded hover:bg-[#b1f2d9] ${
                activeCategory === category.title ? "bg-[#94ccb7]" : ""
              }`}
            >
              <p className="ml-[10px] font-medium">{category.title}</p>              
                <span className="text-[20px] lg:hidden">{activeCategory === category.title  ? category.subticon:category.plusicon}</span> 
            </div>
          </div>
          {activeCategory === category.title && (
            <div className="w-[100%] lg:w-[280px] border-b-[2px] border-[white] lg:bg-[#fefefe] px-[4px] lg:border-l-[#d7d7d7] lg:border-l-[1px] lg:absolute lg:top-[0] lg:left-[250px] z-10">
              {category.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
