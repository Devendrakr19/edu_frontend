import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Addcourse = () => {
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="w-full p-[10px]">
      <div className="grid grid-cols-2 gap-4">
        <div className="col-span-1">
          <h1 className="text-[30px] font-bold">Add a Course</h1>
          <p className="text-gray-600">Orders placed across your store</p>
          <div className="w-full mt-[12px]">
            <h1 className="text-[20px] font-semibold">Course Title</h1>
            <input
              type="text"
              placeholder="Write title here..."
              className="bg-white border border-gray-300 rounded p-[10px] w-full mt-[10px]"
            />
          </div>
          <div className="mt-[12px]">
            <h1 className="text-[20px] font-semibold">Course Description</h1>
            <textarea
              placeholder="Write description here..."
              className="bg-white border border-gray-300 rounded p-[10px] w-full mt-[10px] h-[180px]"
            ></textarea>
          </div>
        </div>
        <div className="col-span-1">
          <div className="flex justify-center items-center gap-[20px]">
            <button className="gary_btn border_gray font-bold ">Discard</button>
            <button className="gary_btn border_gray text-[blue] font-bold">
              Save draft
            </button>
            <button className="site_btn">Publish Course</button>
          </div>
          <div className="mt-[50px] ml-[110px]">
            <h1 className="text-[20px]">Organize</h1>
            <div className="mt-[12px]">
              <p className="">
                category
                <span className="text-blue-500 hover:underline ml-[5px]">
                  Add new category
                </span>
              </p>

              <FormControl sx={{ m: 1, minWidth: 375 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>

            <div className="mt-[18px]">
              <p className="">
                category
                <span className="text-blue-500 hover:underline ml-[5px]">
                  Add new category
                </span>
              </p>

              <FormControl sx={{ m: 1, minWidth: 375 }} size="small">
                <InputLabel id="demo-select-small-label">Age</InputLabel>
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={age}
                  label="Age"
                  onChange={handleChange}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Addcourse;

// import React from "react";
// import Courseadd from "./addcoursefiles/Courseadd";
// import Coursetitle from "./addcoursefiles/Coursetitle";
// import Display from "./addcoursefiles/Display";
// import Organize from "./addcoursefiles/Organize";
// import "../CourseManagement/addcoursefiles/category.css";

// export default function Addcourse() {
//   return (
//     // <div className="background-main">
//     <div>
//       <Courseadd />
//       <div className="mycls">
//         <Coursetitle />
//         <Organize />
//       </div>
//       <Display />
//     </div>
//     // </div>
//   );
// }
