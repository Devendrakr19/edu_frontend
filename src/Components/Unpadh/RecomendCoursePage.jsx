import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function RecomendCoursePage() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");

  // Fetch data from the server
  const getMyPostData = async () => {
    try {
      const res = await axios.get(
        "https://frantic-nightshirt.cyclic.app/course"
      );
      setMyData(res.data);
    } catch (error) {
      setIsError(error.message);
    }
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  return (
    <>
      <section className="h-full box-border mx-auto mt-28">
        <div className="font-Poppins font-semibold text-3xl pl-3 pb-5 ">
          <h1>You might also like</h1>
        </div>
        {isError !== "" && <h2>{isError}</h2>}

        <div className="pb-16">
          <Slider {...settings}>
            {myData.map((data) => (
              <div className="rounded-lg p-4 max-w-[300px]     hover:bg-slate-200  hover:no-underline  active:rounded   transform transition duration-150 border border-outline-variant item-center justify-center hover:scale-105 cursor-pointer overflow-hidden   border-gray-400   hover:text-white ">
                <Link>
                  <img
                    className=" h-[150px] w-full   object-cover   rounded-lg "
                    src={data.img}
                    alt=""
                  />
                </Link>

                <div className="pt-2 text-black font-semibold text-lg ">
                  <h1>{data.title}</h1>
                </div>

                <div className="py-3 justify-between relative  flex text-textcolor dark:text-white">
                  <span>{data.name}</span>

                  <span>{data.time}</span>
                </div>

                <div className=" justify-start gap-5  font-semibold text-2xl text-blue-900 flex">
                  <h1>{`₹${data.price}`}</h1>
                  <h1 className="line-through text-black  font-semibold text-lg">
                    {`₹${data.maxprice}`}
                  </h1>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}

export default RecomendCoursePage;
