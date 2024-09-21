import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Page4() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");
  const [filter, setFilter] = useState(null); // State to hold the filter category

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

  // Filter items based on category
  const filterItems = (category) => {
    setFilter(category === "all" ? null : category); // Update the filter state. If "All" is selected, set filter to null
  };

  useEffect(() => {
    getMyPostData();
  }, []);

  // for slug

  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  return (
    <>
      <section className=" h-full box-border   mx-auto mt-28">
        {/* Title And Subtitle  */}
        <div className="text-center">
          <div className="font-Poppins font-semibold text-3xl ">
            <h1>Learn From The Best Courses</h1>
          </div>
          <div className=" font-Poppins text-lg font-medium mt-4 ">
            <h1>
              Choose from 10,000 online video courses with new additions
              published every month
            </h1>
          </div>
        </div>

        {/********************Button start*************************/}

        <div className="flex mx-auto justify-center  items-center ">
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-[#0BA085] focus:bg-transparent focus:border-[#0BA085] focus:text-textcolor dark:focus:text-black dark:focus:bg-white   "
            onClick={() => filterItems("all")}
          >
            All
          </button>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900   focus:outline-none bg-slate-200   rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-[#] focus:bg-transparent focus:border-[#] dark:border-[#] dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
            onClick={() => filterItems("engineering")}
          >
            Engineering
          </button>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900   focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-2 hover:border-[#] focus:bg-transparent focus:border-[#] dark:border-[#] dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
            onClick={() => filterItems("science")}
          >
            Science
          </button>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900   focus:outline-none bg-slate-200  rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10    r hover:border-2 hover:border-[#] focus:bg-transparent focus:border-[#] dark:border-[#] dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
            onClick={() => filterItems("management")}
          >
            Management
          </button>

          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900   focus:outline-none bg-slate-200    rounded-full border-2 border-gray-400  hover:bg-transparent  focus:z-10     hover:border-[#] focus:bg-transparent focus:border-[#] dark:border-[#] dark:focus:text-black dark:focus:bg-white focus:text-textcolor"
            onClick={() => filterItems("Design")}
          >
            Design
          </button>
        </div>

        {/********************Button end*************************/}

        {isError !== "" && <h2>{isError}</h2>}

        <div className=" grid grid-cols-1 md:grid-cols-4 mx-10 md:mx-24 gap-10 gap mt-10   ">
          {myData
            .filter((post) => !filter || post.category === filter) // Filter based on selected category
            .map((post) => {
              const {
                id,
                img,
                title,
                name,
                time,

                price,
                maxprice,
              } = post;

              const slug = convertToSlug(title);

              return (
                <div
                  data-aos="fade-up"
                  key={id}
                  className="rounded-lg p-4 max-w-[300px] dark:bg-zinc-800   hover:bg-slate-200 dark:hover:bg-[#] hover:no-underline  active:rounded   transform transition duration-150 border border-outline-variant item-center justify-center hover:scale-105 cursor-pointer overflow-hidden   border-gray-400   hover:text-white "
                >
                  <Link to={`/Courses/${slug}`}>
                    <img
                      className=" h-[150px] w-full   object-cover   rounded-lg "
                      src={img}
                      alt=""
                    />
                  </Link>

                  <div className="pt-2 text-black    font-semibold  ">
                    <h1>{title}</h1>
                  </div>

                  <div className="py-3 justify-between relative  flex text-textcolor ">
                    <span>{name}</span>

                    <span>{time}</span>
                  </div>

                  <div className=" justify-start gap-5  font-semibold text-2xl text-blue-900 flex">
                    <h1>{`₹${price}`}</h1>
                    <h1 className="line-through text-black  font-semibold text-lg">
                      {`₹${maxprice}`}
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

export default Page4;
