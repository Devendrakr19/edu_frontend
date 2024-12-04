import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { logout } from "../Redux/slices/auth/authSlice";
// import RecordedClass from "../layouts/teacher-dashboard/recorded-class/RecordedClass";
import { Grid } from "@mui/material";

const TeacherDashboard = () => {
  const [dashboardsidebar, setDashboardsidebar] = useState(false);
  const teacherData = useSelector(
    (state) => state?.profileList?.profileData?.user?.name
  );
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Handledashboardsidebar = () => {
    setDashboardsidebar(!dashboardsidebar);
  };

  const Tabs = [
    {
      label: "Recorded Class Upload",
      url: "/teacher-dashboard/recorded-class",
    },
    { label: "Live Class", url: "/teacher-dashboard/live-class" },
    { label: "Account-Settings", url: "/teacher-dashboard/account-setting" },
    { label: "Notification", url: "/teacher-dashboard/notification" },
    { label: "Payout and Tax", url: "/teacher-dashboard/payout-tax" },
    { label: "Public Profile", url: "/teacher-dashboard/public-profile" },
    { label: "Edit Profile", url: "/teacher-dashboard/edit-profile" },
    { label: "Help", url: "/teacher-dashboard/help" },
    { label: "Logout" },
  ];

  const HandleLogout = () => {
    dispatch(logout());
    navigate("/");
  };

  return (
    <>
      <div className="bg-[#f1eeee] h-[calc(100vh-66px)] pt-[15px]">
        <Grid container columnSpacing={2}>
          <Grid item xs={12}>
          <div className="rounded-r-full bg-[#145d5d] pr-[14px] py-[3px] flex justify-end items-center cursor-pointer mb-[10px] w-[60px] lg:hidden">
              <RxHamburgerMenu
                className="text-[28px] text-[white]"
                onClick={Handledashboardsidebar}
              />
          </div>
          </Grid>
          <Grid item className={`absolute lg:relative  z-10 lg:top-0 lg:left-0 top-[115px] left-[-30px] lg:block lg:translate-x-0 transition-transform duration-300 ease-in-out ${dashboardsidebar ? "-translate-x-full" : "translate-x-0 h-[550px] overflow-y-scroll scrollbar_hide"}`}>
            <div className="bg-[#145d5d] px-[10px] py-[20px] h-[calc(100vh-85px)] ml-[10px] rounded">
              <div className="flex flex-col justify-center items-center gap-[8px] border-b-[1px] border-b-[#000000]">
                <div
                  className="w-[100%] flex justify-end items-center cursor-pointer lg:hidden"
                  onClick={Handledashboardsidebar}
                >
                  <p className="text-[20px] font-medium">{"X"}</p>
                </div>
                <div className="w-[90px]">
                  <img
                    src="/avat.jpg"
                    alt="Profile"
                    className="object-contain rounded-full"
                  />
                </div>
                <div className="p-[5px]">
                  <p>{teacherData}</p>
                </div>
              </div>
              {Tabs.map((item, index) => (
                <div
                  key={index}
                  className="px-[15px] text-[#efecec] mt-[5px] py-[5px] font-medium rounded cursor-pointer hover:bg-[#7978786d]"
                >
                  {item.label === "Logout" ? (
                    <div onClick={HandleLogout}>{item.label}</div>
                  ) : (
                    <Link to={item.url}>{item.label}</Link>
                  )}
                </div>
              ))}
            </div>
          </Grid>
          <Grid item xs={9.5} >
            <div className="h-[calc(100vh-84px)] px-[10px]">
              <Outlet />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default TeacherDashboard;
