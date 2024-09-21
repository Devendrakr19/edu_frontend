import React, { useState } from 'react'
import StdUredxProfile from './tabs/StdUredxProfile';
import StdPrivacySetting from './tabs/StdPrivacySetting';
import StdProfilePicture from './tabs/StdProfilePicture';

const Editprofile = () => {
  const Tab = [
    {
      title: "Uredx Profile",
      component: <StdUredxProfile/>,
    },
    
    {
      title: "Profile Picture",
      component: <StdProfilePicture />,
    },
    {
      title: "Privacy Setting",
      component: <StdPrivacySetting/>,
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
            className={`bg-[#F8F8F8] border-r-[1px] last:border-r-[0px] px-[8px] font-medium py-[10px] xl:text-[14px] 2xl:text-[17px] ${
              index === activeTab
                ? "bg-[#eff8ff] border-t-[3px] rounded-t-[4px] border-t-[#1c85e8]"
                : ""
            }`}
            onClick={() => handleTab(index)}
          >
            {item.title}
          </button>
        ))}

        <div className="grid grid-cols-1 lg:grid-cols-2">{Tab[activeTab].component}</div>
      </div>
    </>
  );
};

export default Editprofile