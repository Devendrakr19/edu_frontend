import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import GridLoader from "react-spinners/GridLoader";
import { RiVidiconFill } from "react-icons/ri";
import { GrLanguage } from "react-icons/gr";
import StarRating from "./StarRating";
import AboutCourse from "./AboutCourse";
import Page7 from "../Page7";
import Footer from "../Footer";


function CourseSinglePage({ AddToCart }) {
  const { courseTitle } = useParams();

  const [singlePage, setsinglePage] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState("");

  // Fetch data from the server
  const getMySingleCoursepage = async () => {
    try {
      const res = await axios.get(
        "https://frantic-nightshirt.cyclic.app/course"
      );
      setsinglePage(res.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getMySingleCoursepage();
  }, [courseTitle]);

  function convertToSlug(text) {
    return text
      .toLowerCase()
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");
  }

  const data = singlePage.find((c) => convertToSlug(c.title) === courseTitle);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <GridLoader
          className="mt-[200px]"
          loading={isLoading}
          color="#36d7b7"
          cssOverride={{}}
        />
      </div>
    );
  }

  if (isError) {
    return <div>Error: {isError}</div>;
  }

  if (!data) {
    return <div>Course not found</div>;
  }

  return (
    <>
      <section className="h-[750px] md:h-[350px] bg-[#0BA085]">
        <div className="max-w-[1280px] mx-auto">
          <section className="container flex flex-col items-center justify-between ">
            <div className="grid grid-cols-1 md:grid-cols-2 items-center  ">
              {/* text container  */}
              <div className="md:-mt-[15rem]   flex flex-col items-center gap-5 text-center text-white md:items-start md:text-left ">
                <h1 className="text-3xl font-bold leading-tight tracking-normal ">
                  {data.title}
                </h1>
                <div className="flex gap-5 font-medium text-xl justify-center items-center">
                  <div className="flex justify-center items-center gap-2">
                    <span>
                      {" "}
                      <RiVidiconFill className="text-gray-800 " />
                    </span>
                    <p className="text-gray-800">{data.Lectureshours} </p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <span>
                      {" "}
                      <GrLanguage className="text-blue-800 " />
                    </span>
                    <p className="text-blue-800">{data.lang}</p>
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <h1 className="text-yellow-400">{data.rating}</h1>
                    <StarRating star={data.rating} />
                  </div>
                </div>
                <div className="text-lg">
                  <h1 className="text-textcolor">
                    Created by{" "}
                    <span className="text-blue-900 font-medium">
                      {data.name}
                    </span>
                  </h1>
                </div>
              </div>
              {/* card container  */}
              <div className="ml-36 mt-48">
                <div className="rounded-lg p-5 max-w-[400px] bg-gray-800 border item-center justify-center cursor-pointer overflow-hidden border-gray-400 ">
                  <img
                    className="h-[200px] w-full object-cover rounded-lg "
                    src={data.img}
                    alt=""
                  />
                  <div className="pt-2 text-white font-semibold text- ">
                    <h1>{data.title}</h1>
                  </div>
                  <div className="py-3 justify-between relative text-white">
                    <span>{data.name}</span>
                  </div>
                  <div className="justify-start gap-5 font-semibold text-2xl text-blue-900 flex">
                    <h1>{`₹${data.price}`}</h1>
                    <h1 className="line-through text-gray-400 font-semibold text-lg">
                      {`₹${data.maxprice}`}
                    </h1>
                  </div>
                  <div className="text-center pt-5">
                    <button
                      type="button"
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:outline-none font-medium rounded-full text-sm px-20 py-2.5 text-center me-2 mb-2 "
                      onClick={() => AddToCart(data)}
                    >
                      Add Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <AboutCourse
        Desc={data.description}
        coursestart={data.coursestart}
        coursemode={data.coursemode}
        doubt={data.doubt}
        ClassRecording={data.ClassRecording}
        CourseValidity={data.CourseValidity}
        Lectures={data.Lectures}
        Revision={data.Revision}
      />
      <Page7 />
      <Footer />
    </>
  );
}

export default CourseSinglePage;
