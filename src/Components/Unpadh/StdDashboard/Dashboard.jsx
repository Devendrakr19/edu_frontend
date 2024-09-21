import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link, Outlet, NavLink, useLocation, useNavigate } from "react-router-dom";

export default function Dashboard() {
  const [handleactive, setHandleactive] = useState(0);
  const [dashboardsidebar, setDashboardsidebar] = useState(false);
  const navigate = useNavigate();

  const HandleActiveContent = (index) => {
    setHandleactive(index);
    setDashboardsidebar(false); // Close the sidebar when an item is clicked
    navigate(links[index].to);
  };

  const Handledashboardsidebar = () => {
    setDashboardsidebar(!dashboardsidebar);
  };

  const links = [
    { to: "", label: "My learning" },
    { to: "lab", label: "Lab" },
    { to: "courseanalyse", label: "Course analyse" },
    { to: "accountsetting", label: "Account settings" },
    { to: "paymentmethod", label: "Payment methods" },
    { to: "subscription", label: "Subscriptions" },
    { to: "unpadhcredit", label: "Uredx credits" },
    { to: "purchasehistory", label: "Purchase history" },
    { to: "publicprofile", label: "Public profile" },
    { to: "editprofile", label: "Edit Profile" },
    { to: "/", label: "Logout" },
  ];

  return (
    <>
      <div className="grid lg:grid-cols-5 gap-[10px] p-[10px]">
        <div className="col-span-2 lg:col-span-5">
          <div className="flex justify-start items-center cursor-pointer bg-[#1d6e4f41] w-[30px] p-[5px] rounded lg:hidden">
            <RxHamburgerMenu className="text-[20px]" onClick={Handledashboardsidebar} />
          </div>
        </div>

        {/* Sidebar */}
        <div
          className={`absolute overflow-y-scroll scrollbar_hide lg:relative z-10 top-0 left-0  h-full lg:h-[580px] p-[10px] bg-[#95f2ce] lg:bg-[#95f2ce61] rounded  lg:block transform ${
            dashboardsidebar ? 'translate-x-0 w-[280px]' : '-translate-x-full'
          } lg:translate-x-0 transition-transform duration-300 ease-in-out lg:col-span-1`}
        >
          <div className="flex flex-col justify-center items-center gap-[8px] border-b-[1px] border-b-[#000000]">
            <div className="w-[100%] flex justify-end items-center cursor-pointer lg:hidden" onClick={() => setDashboardsidebar(false)}>
              <p className="text-[20px] font-medium">{"X"}</p>
            </div>
            <div className="w-[90px]">
              <img src="/avat.jpg" alt="Profile" className="object-contain rounded-full" />
            </div>
            <div className="p-[5px]">
              <p>John Williams john</p>
            </div>
          </div>
          {links.map((link, index) => (
            <div
              key={index}
              className={`px-[15px] mt-[5px] py-[5px] font-medium rounded cursor-pointer ${
                handleactive === index ? "bg-[#1e1e1e6d]" : ""
              }`}
              onClick={() => HandleActiveContent(index)}
            >
              {link.label}
            </div>
          ))}
        </div>

        <div className="col-span-4 h-[calc(100vh-115px)] overflow-y-scroll scrollbar_hide">
          <Outlet />
        </div>
      </div>
    </>
  );
}
