import React from "react";

function AboutCourse({
  Desc,
  coursestart,
  coursemode,
  doubt,
  ClassRecording,
  CourseValidity,
  Lectures,
  Revision,
}) {
  return (
    <>
      <section className="bg-gray-950">
        <div className="    max-w-[1280px] mx-auto">
          <div className="max-w-[60%] text-white  ">
            <h1 className="text-3xl font-bold leading-tight tracking-normal py-10">
              About Course
            </h1>
            <p className="text-lg">{Desc}</p>
          </div>

          <div className="max-w-[60%] py-10">
            <div className=" border-2 border-gray-400 rounded-lg">
              <div className="grid grid-cols-2 gap-16 p-10">
                <div className="text-white">
                  <h1>{coursestart}</h1>
                </div>
                <div className="text-white">
                  <h1>{coursemode}</h1>
                </div>
                <div className="text-white">
                  <h1>{doubt}</h1>
                </div>
                <div className="text-white">
                  <h1>{ClassRecording}</h1>
                </div>
                <div className="text-white">
                  <h1>{CourseValidity}</h1>
                </div>
                <div className="text-white">
                  <h1>{Lectures}</h1>
                </div>
                <div className="text-white">
                  <h1>{Revision}</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutCourse;
