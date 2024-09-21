import React, { useState } from 'react'
import HtmlCssJs from './tabs/HtmlCssJs';
import Cpp from './tabs/Cpp';
import Java from './tabs/Java';
import Python from './tabs/Python';
 

const Lab = () => {
  const Tab = [
    {
      title: "Html Css and Js",
      component:<HtmlCssJs/>,
    },
    {
      title: "C++",
      component: <Cpp/>,
    },
    {
      title: "Java",
      component: <Java/>,
    },
    {
      title: "Python",
      component: <Python/>,
    },
  ];

  const [activeTab, setactiveTab] = useState(0);

  const handleTab = (index) => {
    setactiveTab(index);
  };
  return (
    <>
      <div className="">
        {Tab.map((item, index) => (
          <button
            key={index}
            className={`bg-[#F8F8F8] border-r-[1px] last:border-r-[0px] px-[16px] font-medium py-[8px] xl:text-[14px] xxl:text-[14px] 2xl:text-[17px] ${
              index === activeTab
                ? "bg-[#eff8ff] border-t-[3px] rounded-t-[4px] border-t-[#1c85e8]"
                : ""
            }`}
            onClick={() => handleTab(index)}
          >
            {item.title}
          </button>
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-[10px]">
          {Tab[activeTab].component}
        </div>
      </div>
    </>
  );
};

export default Lab