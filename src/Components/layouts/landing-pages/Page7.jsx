import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const Page7 = () => {
  return (
    <>
      <section className=" h-[350px] bg-teal-100">
        <div className="justify-center items-center pt-10 capitalize ">
          <h1 className="text-center  text-4xl font-semibold tracking-wide">
            Subscribe to our <span className="text-teal-600">Uredx</span>
          </h1>
          <p className="text-center text-black font-medium py-8 tracking-wide">
            Get notification about course, new product and exclusive tranding
            course just for you.
          </p>
        </div>
        <div className="py-8 flex mx-auto items-center justify-center">
        <div className="w-[520px] ">
        <form className=" mx-auto">
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only"
          ></label>
          <div className="relative">
            <div className="absolute inset-y-0 start-0  flex items-center ps-3 pointer-events-none">
              <MdOutlineEmail className="text-lg text-gray-500 " />
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-5 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full outline-none"
              placeholder="Enter your email address..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-[9px] 
                
                          bg-[#0BA085] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-semibold rounded-full text-sm px-6 py-3 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Join now
            </button>
          </div>
        </form>
      </div>
        </div>
      </section>
    </>
  );
}

export default Page7