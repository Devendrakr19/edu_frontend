import React from "react";

export default function StdUredxProfile() {
  return (
    <>
      <div className="col-span-2 lg:flex items-center justify-between gap-[15px]">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="firstname">First Name:</label>
          <input
            type="text"
            className="w-[100%] p-[8px] outline-none border-[1px] border-[#00000068] rounded"
            placeholder="Your first name"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="lastname">Last Name:</label>
          <input
            type="text"
            className="w-[100%] p-[8px] outline-none border-[1px] border-[#00000068] rounded"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="col-span-2 lg:flex items-center justify-between gap-[15px]">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="headline">Headline:</label>
          <input
            type="text"
            className="w-[100%] p-[8px] outline-none border-[1px] border-[#00000068] rounded"
            placeholder="Your first name"
          />
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="website">Website:</label>
          <input
            type="text"
            className="w-[100%] p-[8px] outline-none border-[1px] border-[#00000068] rounded"
            placeholder="Url"
          />
        </div>
      </div>

      <div className="col-span-2 lg:flex items-center justify-between gap-[15px]">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="linkedin">Linkedin</label>
          <div className="flex justify-between items-center border-[1px] border-[#00000068] rounded">
            <span className="bg-[#e7e6e6] p-[8px] rounded-l">
              http://www.linkedin.com/
            </span>
            <input
              type="text"
              className="w-[100%] p-[8px] outline-none rounded-r"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="youtube">Youtube</label>
          <div className="flex justify-between items-center border-[1px] border-[#00000068] rounded">
            <span className="bg-[#e7e6e6] p-[8px] rounded-l">
              http://www.youtube.com/
            </span>
            <input
              type="text"
              className="w-[100%] p-[8px] outline-none rounded-r"
              placeholder="Username"
            />
          </div>
        </div>
      </div>

      <div className="col-span-2 lg:flex items-center justify-between gap-[15px]">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="twitter">Twitter</label>
          <div className="flex justify-between items-center border-[1px] border-[#00000068] rounded">
            <span className="bg-[#e7e6e6] p-[8px] rounded-l">
              http://www.twitter.com/
            </span>
            <input
              type="text"
              className="w-[100%] p-[8px] outline-none rounded-r"
              placeholder="Username"
            />
          </div>
        </div>
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="facebook">Facebook</label>
          <div className="flex justify-between items-center border-[1px] border-[#00000068] rounded">
            <span className="bg-[#e7e6e6] p-[8px] rounded-l">
              http://www.facebook.com/
            </span>
            <input
              type="text"
              className="w-[100%] p-[8px] outline-none rounded-r"
              placeholder="Username"
            />
          </div>
        </div>
      </div>

      <div className="col-span-2 lg:flex items-center justify-between gap-[15px]">
        <div className="w-[100%] lg:w-[50%] flex flex-col gap-[5px] mt-[10px]">
          <label htmlFor="biography">Biography:</label>
          <textarea
            name=""
            id=""
            rows="3"
            className="p-[8px] outline-none border-[1px] border-[#00000068] rounded"
            placeholder="Write here"
          ></textarea>
          <p className="text-[12px]">
            To help learners learn more about you, your bio should reflect your
            Credibility, Empathy, Passion, and Personaluty.Your biography should
            have a least 50 words, links and coupon codes are not permitted.
          </p>
        </div>
      </div>

      <div className="col-span-2 mt-[15px] mb-[10px]">
        <button className="site_btn px-[40px]">Save</button>
      </div>
    </>
  );
}
