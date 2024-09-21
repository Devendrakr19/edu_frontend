import React, { useState } from "react";
import { Link } from "react-router-dom";

import cardData from "./Page4Api"; // Assuming this is the data source for your cards
import { FaAngleRight } from "react-icons/fa6"; // Assuming this is the correct import for the right arrow icon

export default function Page4() {
  const [apiData, setApiData] = useState(cardData);

  // Filter items based on category
  const filterItem = (category) => {
    const updatedItems = cardData.filter((item) => item.category === category);
    setApiData(updatedItems);
  };

  // Scroll slider to the left
  const sliderLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft -= 500;
  };

  // Scroll slider to the right
  const sliderRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft += 500;
  };

  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <>
      <section className="w-auto h-full box-border mx-auto mt-28 ">
        {/* Title And Subtitle */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-3xl ">
            <h1>Learn From The Best Courses</h1>
          </div>
          <div className="font-Poppins text-lg font-medium mt-4 ">
            <h1>
              Choose from 10,000 online video courses with new additions
              published every month
            </h1>
          </div>
        </div>

        {/* Slider Card */}
        <div className="flex mx-auto justify-around items-center">
          <div
            // id="slider"
            className="mt-5"
          >
            {/* Buttons for filtering */}
            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400 hover:bg-transparent focus:z-10 hover:border-2 hover:border-[#0BA085] focus:bg-transparent focus:border-[#0BA085] focus:text-textcolor"
              onClick={() => setApiData(cardData)}
            >
              All
            </button>

            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400 hover:bg-transparent focus:z-10 hover:border-2 hover:border-[#0BA085] focus:bg-transparent focus:border-[#0BA085] focus:text-textcolor"
              onClick={() => filterItem("engineering")}
            >
              Engineering
            </button>

            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400 hover:bg-transparent focus:z-10 hover:border-2 hover:border-[#0BA085] focus:bg-transparent focus:border-[#0BA085] focus:text-textcolor"
              onClick={() => filterItem("science")}
            >
              Science
            </button>

            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400 hover:bg-transparent focus:z-10 hover:border-2 hover:border-[#0BA085] focus:bg-transparent focus:border-[#0BA085] focus:text-textcolor"
              onClick={() => filterItem("management")}
            >
              Management
            </button>

            <button
              type="button"
              className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900  focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400 hover:bg-transparent focus:z-10 hover:border-2 hover:border-[#0BA085] focus:bg-transparent focus:border-[#0BA085] focus:text-textcolor"
              onClick={() => filterItem("Design")}
            >
              Design
            </button>
          </div>

          {/* Slider Controls */}
          {/* <div className="items-center mt-12">
            <FaAngleRight
              onClick={sliderRight}
              className="text-sm bg-slate-800 w-16 h-16 rounded-full p-1 mr-16 text-[#0BA085]"
            />
          </div> */}
        </div>

        {/* Grid for displaying cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 mx-10 md:mx-24 gap-10 gap mt-10">
          {apiData.map((item) => {
            const {
              id,
              img,
              title,
              name,
              time,
              views,
              price,
              maxprice,
              timeicon,
              viewicon,
            } = item;

            const slug = convertToSlug(title);

            return (
              <div
                key={id} // Assuming title is unique, replace with a unique identifier if available
                data-aos="fade-up"
                className="rounded-lg p-4 max-w-[300px] hover:bg-slate-200 dark:hover:bg-[#0BA085] hover:no-underline active:rounded transform transition duration-150 border border-outline-variant item-center justify-center hover:scale-105 cursor-pointer overflow-hidden border-gray-400 hover:text-white"
              >
                <Link to={`/Courses/${slug}`}>
                  <img
                    className=" h-[150px] w-full   object-cover   rounded-lg "
                    src={img}
                    alt=""
                  />
                </Link>

                <div className="pt-2 text-black  font-semibold">
                  <h1>{title}</h1>
                </div>

                <div className="py-3 justify-between relative flex text-textcolor ">
                  <span>{name}</span>
                  <span className="absolute right-[75px] top-[12px]">
                    {timeicon}
                  </span>
                  <span>{time}</span>
                </div>

                <div className="p-2 justify-start gap-5 font-semibold text-2xl text-blue-900 flex">
                  <h1>{price}</h1>
                  <h1 className="line-through text-black  font-semibold text-lg">
                    {maxprice}
                  </h1>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
