import React, { useState } from 'react'
import Coursesperchase from './tabs/Coursesperchase';
import Refunds from './tabs/Refunds';

const Purchasehistory = () => {
  const Tab = [
    {
      title: "Course Purchase",
      component: <Coursesperchase/>,
    },
    
    {
      title: "Refund",
      component: <Refunds />,
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
            className={`bg-[#F8F8F8] border-r-[1px] last:border-r-[0px] px-[15px] font-medium py-[12px] xl:text-[14px] xxl:text-[14px] 2xl:text-[17px] ${
              index === activeTab
                ? "bg-[#eff8ff] border-t-[3px] rounded-t-[4px] border-t-[#1c85e8]"
                : ""
            }`}
            onClick={() => handleTab(index)}
          >
            {item.title}
          </button>
        ))}

        <div className="">{Tab[activeTab].component}</div>
      </div>
    </>
  );
};

export default Purchasehistory