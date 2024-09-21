import React, { useState } from "react";
import { RxAvatar } from "react-icons/rx";
 

export default function StdProfilePicture() {
  const [profilepic, setProfilepic] = useState(null);

  const handlePicupload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      setProfilepic(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  return (
    <>
      <div className="col-span-2 mt-[10px] px-[10px]">
        <div className="max-w-[400px] py-[35px] border-[1px] border-[black] rounded flex  justify-center items-center">
          {!profilepic ? (
            <RxAvatar className="text-[200px]" />
          ) : (
            <img
              src={profilepic}
              alt=""
              className="w-[60%] object-cover rounded-full"
            />
          )}
        </div>
        <div className="border-[1px] border-[black] max-w-[400px] mt-[15px] bg-[#ffffffbc] rounded">
          <input
            type="file"
            className="p-[6px]"
            onChange={handlePicupload}
            accept="image/*"
          />
        </div>

        <button className="site_btn mt-[15px] px-[40px]">Save</button>
      </div>
    </>
  );
}
