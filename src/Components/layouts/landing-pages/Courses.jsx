import { Grid, Pagination, Stack } from "@mui/material";
import React from "react";
import { CiSearch } from "react-icons/ci";

const Courses = () => {
  const coureDetials = [
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      c_img: "/course.jpg",
    },
    {
      coursetitle: "Pythons Developer",
      teachername: "Devendra",
      price: 1299,
      c_img: "/course.jpg",
    },
  ];
  return (
    <>
      <div className="pt-[50px] h-[100vh]">
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
              <div className="flex justify-center items-center bg-[white] px-[4px] rounded-full">
                <CiSearch className="text-[26px]" />
                <input
                  type="text"
                  placeholder="Search Course or Teacher"
                  className="bg-[transparent] outline-none border-none pl-[10px] pr-[5px] py-[10px] w-[400px]"
                />
                <button className="bg-[#1a7676] rounded-full px-[25px] py-[5px] text-[white] text-[18px] transition duration-500 ease-in-out hover:bg-[#279d9d]">
                  Search
                </button>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <div className="px-[120px] mt-[30px]">
              <Grid container columnGap={2} rowGap={2}>
                {coureDetials.map((item, index) => (
                  <Grid key={index} item xs={2.2}>
                    <div className="bg-[transparent] hover:bg-[#297f7f] hover:text-[white] rounded border-[1px] border-[#1a76768b] p-[10px]">
                      <img
                        src={item?.c_img}
                        alt="no image"
                        className="w-[200px]"
                      />
                      <p>{item?.coursetitle}</p>
                      <p>{item?.teachername}</p>
                      <p>{item?.price}</p>
                    </div>
                  </Grid>
                ))}

                <Grid item xs={12}>
                  <div className="flex justify-end">
                    <Stack spacing={2}>
                      <Pagination
                        count={10}
                        sx={{
                          "& .MuiPaginationItem-root.Mui-selected": {
                            backgroundColor: "#1a7676",
                            color: "#fff",
                          },
                        }}
                      />
                    </Stack>
                  </div>
                </Grid>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Courses;
