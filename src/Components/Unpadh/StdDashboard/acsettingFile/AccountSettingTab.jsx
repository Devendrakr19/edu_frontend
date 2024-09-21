import React, { useState } from "react";
import Accountsecurity from "./tabs/Accountsecurity";
import Notificationsetting from "./tabs/Notificationsetting";
import Messagesetting from "./tabs/Messagesetting";
import Closeaccount from "./tabs/Closeaccount";
 

const AccountSettingTab = () => {
  const Tab = [
    {
      title: "Account Security",
      component: <Accountsecurity />,
    },
    {
      title: "Notitfication Setting",
      component: <Notificationsetting />,
    },
    {
      title: "Message Setting",
      component: <Messagesetting />,
    },
    {
      title: "Close Account",
      component: <Closeaccount />,
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
            className={`bg-[#F8F8F8] border-r-[1px] last:border-r-[0px] px-[8px] font-medium py-[10px] text-[9px] md:text-[12px]  xl:text-[14px] 2xl:text-[17px] ${
              index === activeTab
                ? "bg-[#eff8ff] border-t-[3px] rounded-t-[4px] border-t-[#1c85e8]"
                : ""
            }`}
            onClick={() => handleTab(index)}
          >
            {item.title}
          </button>
        ))}

        <div className="grid grid-cols-1">{Tab[activeTab].component}</div>
      </div>
    </>
  );
};

export default AccountSettingTab;
