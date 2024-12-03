import { Link, useNavigate, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { Badge } from "antd";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaShoppingCart } from "react-icons/fa";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "./Components/Redux/slices/profileSlice";

const Navbar = ({ AddCart }) => {
  const [isMobileSidebarVisible, setMobileSidebarVisible] = useState(false);
  const [MobileDropdownVisible, setMobileDropdownVisible] = useState(false);
  const [PcDropdownVisible, setPcDropdownVisible] = useState(false);

  const role = sessionStorage.getItem("Role"); 
  const userName = sessionStorage.getItem("userName");
  const navigate = useNavigate();
  const dispatch = useDispatch();  

  useEffect(() => {
      dispatch(userProfile());
  }, [dispatch]);


  const toggleMobileSidebar = () => {
    setMobileSidebarVisible((prevstate) => !prevstate);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownVisible((prevstate) => !prevstate);
  };

  const togglePcDropdown = () => {
    setPcDropdownVisible((prevstate) => !prevstate);
  };

  const handleDashboard = () => {
    if (role === "Teacher") {
      navigate("/teacher-dashboard");
    } else {
      navigate("/student-dashboard");
    }
  };

  return (
    <>
      {/* Navbar */}
      <div className="w-full flex justify-between items-center lg:sticky top-0 z-20 bg-white px-[6px] py-[16px] lg:px-[8px] shadow-md">
        <div className="ml-[30px] cursor-pointer">
          <img src="./icons/logo.svg" alt="Logo" className="w-[180px]" />
        </div>

        {/* Dropdown items in desktop mode */}
        <div className="hidden lg:flex lg:space-x-6">
          <div className="relative">
            <Link className="hover:text-[#37a6a2] font-medium">Programs</Link>
            {/* {PcDropdownVisible && <Dropdown />} */}
          </div>
          
          <Link to="/" className="hover:text-[#2f9592] font-medium">
            Test
          </Link>

          <Link to="/" className="hover:text-[#2f9592] font-medium">
            Business
          </Link>


          <Link to="/about" className="hover:text-[#2f9592] font-medium">
            About us
          </Link>

          <Link to="/contact" className="hover:text-[#2f9592] font-medium">
            Contact
          </Link>

          <Link to="/help" className="hover:text-[#2f9592] font-medium">
            Help?
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <div className="lg:hidden">
            <RxHamburgerMenu
              className="text-3xl font-medium text-[black] cursor-pointer"
              onClick={toggleMobileSidebar}
            />
          </div>
          <Link to="/cart" className="nav_link">
            {/* <Badge count={AddCart.length}> */}
            <FaShoppingCart className="text-3xl text-background" />
            {/* </Badge> */}
          </Link>
          {!userName ? (
            <>
              <button className="site_btn border_btn hidden lg:block rounded-full py-[2px] px-[18px]">
                <Link to="/login">Login</Link>
              </button>
              <button className="site_btn rounded-full hidden lg:block py-[2px] px-[18px]">
                <Link to="/signup">Sign Up</Link>
              </button>
            </>
          ) : (
            <div
              className="px-[20px] py-[2px] cursor-pointer site_btn border_btn rounded-full"
              onClick={handleDashboard}
            >
              <p>Hi, {userName}</p>
            </div>
          )}
        </div>
      </div>

      {/* Mobile sidebar */}
      {/* {isMobileSidebarVisible && (
        <div className="lg:hidden absolute top-[0px] w-[320px] left-[0px] md:top-0 bg-[#ffffff] lg:relative z-10  justify-evenly">
          <div className="w-[100%] p-[15px] bg-[#2a554fd6] text-[white] flex justify-between items-center">
            <AccountCircleOutlinedIcon style={{ fontSize: 60 }} />
            <div className="">
              <Link to="/student-login" className="text-[18px]">
                Login
              </Link>
              <Link to="/signup" className="text-[18px]">
                {" "}
                / Signup
              </Link>
            </div>
            <p
              className="text-3xl font-medium cursor-pointer"
              onClick={toggleMobileSidebar}
            >
              {"X"}
            </p>
          </div>
          <div className="lg:hidden h-[625px] flex flex-col items-start p-[8px] gap-[5px] overflow-scroll">
            <div className="w-[100%] p-[5px] rounded">
              <div
                className="flex justify-between items-center cursor-pointer"
                onClick={toggleMobileDropdown}
              >
                <Link
                  className={`text-[20px] ml-[10px] font-medium ${
                    MobileDropdownVisible ? "text-[#33a092]" : ""
                  }`}
                >
                  Programs
                </Link>
                <span className="text-[28px] font-medium">
                  {MobileDropdownVisible ? "-" : "+"}
                </span>
              </div>
              {MobileDropdownVisible && <Dropdown />}
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/business" className="text-[20px] ml-[10px]">
                Business
              </Link>
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/teachersignup" className="text-[20px] ml-[10px]">
                Become Instructor
              </Link>
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/about" className="text-[20px] ml-[10px]">
                About us
              </Link>
            </div>
            <div className="w-[100%] p-[5px] rounded">
              <Link to="/contact" className="text-[20px] ml-[10px]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      )} */}
      <Outlet />
    </>
  );
};

export default Navbar;
