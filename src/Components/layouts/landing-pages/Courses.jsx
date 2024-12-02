import { Grid, Pagination, Stack } from "@mui/material";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

const Courses = () => {
  const coureDetials = [
    {
      coursetitle: "Become MERN stack dsgfdh artdgdsf dhgdsf",
      teachername: "Devendra Kumar Pandit",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "java Developer",
      teachername: "Rohit",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "MERN Developer",
      teachername: "Anu",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Frontend Developer",
      teachername: "Ravi",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      duration: 8,
      c_img: "/course.jpg",
    },
  ];

  const [page, setPage] = useState(1); // Current page number
  const coursesPerPage = 10; // Number of courses per page
  const [searchInput, setSearchInput] = useState("");

  const handlePageCahnge = (e, value) =>{
      setPage(value);
  }

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setPage(1); // Reset to first page whenever search changes
  };

  const filteredCourses = coureDetials.filter((item) => {
    return (
      item.coursetitle.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.teachername.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const paginatedCoures = filteredCourses.slice((page - 1) * coursesPerPage, page * coursesPerPage);


  return (
    <>
      <div className="pt-[50px]">
        <Grid container rowGap={1}>
          <Grid item xs={12}>
            <h1 className="text-[40px] font-semibold text-center">
              Learn from the Best Courses
            </h1>
          </Grid>
          <Grid item xs={12}>
            <p className="text-[16px] text-center">
              Choose from 10,000 online video courses with new additions
              published every month
            </p>
          </Grid>
          <Grid item xs={12}>
            <div className="flex justify-center mt-[10px]">
              <div className="flex justify-center items-center border-[1px] border-[#1a767662] bg-[white] pl-[15px] rounded-full">
                <CiSearch className="text-[24px]" />
                <input
                  type="text"
                  value={searchInput}
                  onChange={handleSearchChange}
                  placeholder="Search Course or Teacher"
                  className="bg-[transparent] outline-none border-none pl-[15px] pr-[5px] py-[10px] w-[400px]"
                />
                {/* <button
                  type="button"
                  className="bg-[#1a7676] rounded-full px-[25px] py-[5px] text-[white] text-[18px] transition duration-500 ease-in-out hover:bg-[#279d9d]"
                >
                  Search
                </button> */}
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="flex justify-center items-center mt-[30px]">
          <div className="w-[90%]">
            <Grid container columnSpacing={2} rowSpacing={2}>
              {paginatedCoures.map((item, index) => (
                <Grid key={index} item xs={5.5} md={2.4}>
                  <div className="bg-[#fffbfb] hover:bg-[#297f7f] transition duration-500 ease-in-out cursor-pointer text-[#1a7676] hover:text-[white] rounded border-[1px] border-[#1a76768b] p-[10px]">
                    <img
                      src={item?.c_img}
                      alt="no image"
                      className="w-[100%]"
                    />
                    <p className="truncate mt-[6px] font-semibold">
                      {item?.coursetitle}
                    </p>
                    <p className="truncate font-semibold">
                      Duration:{" "}
                      <span className="font-normal">
                        {item?.duration} months
                      </span>
                    </p>
                    <p className="truncate font-semibold">
                      Teacher:{" "}
                      <span className="font-normal">{item?.teachername}</span>
                    </p>
                    <p className="truncate font-semibold ">
                      Price: <span className="font-normal">₹{item?.price}</span>
                    </p>
                  </div>
                </Grid>
              ))}
            </Grid>
          </div>
        </div>
        <div className="flex justify-end mr-[55px] mt-[20px]">
          <Stack spacing={2}>
            <Pagination
              count={Math.ceil(coureDetials.length / coursesPerPage)}
              page={page}
              onChange={handlePageCahnge}
              sx={{
                "& .MuiPaginationItem-root.Mui-selected": {
                  backgroundColor: "#1a7676",
                  color: "#fff",
                },
              }}
            />
          </Stack>
        </div>
      </div>
    </>
  );
};

export default Courses;
