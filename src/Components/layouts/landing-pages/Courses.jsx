import { Grid, Pagination, Skeleton, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { getAllCourse } from "../../Redux/slices/courses/CourseSlice";
import { useDispatch, useSelector } from "react-redux";

// const coureDetials = [
//   {
//     coursetitle: "Become MERN stack dsgfdh artdgdsf dhgdsf",
//     teachername: "Devendra Kumar Pandit",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "java Developer",
//     teachername: "Rohit",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "MERN Developer",
//     teachername: "Anu",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Frontend Developer",
//     teachername: "Ravi",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
//   {
//     coursetitle: "Pythons Developer",
//     teachername: "Devendra",
//     price: 1299,
//     duration: 8,
//     c_img: "/course.jpg",
//   },
// ];

const Courses = () => {
  const dispatch = useDispatch();
  const courseData =
    useSelector((state) => state?.coursedata?.getAllCourse?.courses) || [];

  const loading = useSelector(
    (state) => state?.coursedata?.getAllCourseLoading
  );

  const [page, setPage] = useState(0);
  const coursesPerPage = 10;
  const [searchInput, setSearchInput] = useState("");

  // console.log("courseData", courseData);

  useEffect(() => {
    dispatch(getAllCourse({ page: page + 1, limit: coursesPerPage }));
  }, [dispatch, page, coursesPerPage]);

  const handlePageCahnge = (e, value) => {
    setPage(value - 1);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
    setPage(0);
  };

  const filteredCourses = courseData.filter((item) => {
    return (
      item.coursetitle.toLowerCase().includes(searchInput.toLowerCase()) ||
      item.name.toLowerCase().includes(searchInput.toLowerCase())
    );
  });

  const paginatedCoures = filteredCourses.slice(
    page * coursesPerPage,
    (page + 1) * coursesPerPage
  );

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
              </div>
            </div>
          </Grid>
        </Grid>
        <div className="flex justify-center items-center mt-[30px]">
          <div className="w-[90%]">
            <Grid container columnSpacing={2} rowSpacing={2}>
              {paginatedCoures.length === 0 ? (
                <Grid item xs={12} className="">
                  <div className="flex flex-col justify-center items-center">
                    <img
                      src="/icons/no_data.png"
                      alt="No data available"
                      className="w-[20%]"
                    />
                    <span className="text-[20px] font-medium">
                      No data found!
                    </span>
                  </div>
                </Grid>
              ) : (
                paginatedCoures.map((item, index) => (
                  <Grid key={index} item xs={5.5} md={2.4}>
                    {loading ? (
                      <Skeleton
                        variant="rectangular"
                        width={250}
                        height={180}
                      />
                    ) : (
                      <div className="bg-[#fffbfb] hover:bg-[#297f7f] transition duration-500 ease-in-out cursor-pointer text-[#1a7676] hover:text-[white] rounded border-[1px] border-[#1a76768b] p-[10px]">
                        <img
                          src={item?.img}
                          alt="no image"
                          className="w-[100%] h-[140px]"
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
                          <span className="font-normal">{item?.name}</span>
                        </p>
                        <p className="truncate font-semibold ">
                          Price:{" "}
                          {item?.price === 0 ? (
                            <span className="font-normal">Free</span>
                          ) : (
                            <span className="font-normal">₹{item?.price}</span>
                          )}
                        </p>
                      </div>
                    )}
                  </Grid>
                ))
              )}
            </Grid>
          </div>
        </div>
        {paginatedCoures.length > 0 ? (
          <div className="flex justify-end mr-[55px] mt-[20px]">
            <Stack spacing={2}>
              <Pagination
                count={Math.ceil(filteredCourses.length / coursesPerPage)}
                page={page + 1}
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
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Courses;
