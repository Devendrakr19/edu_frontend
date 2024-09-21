import React from "react";
import { Checkbox } from "@mui/material";

export default function StdPrivacySetting() {
  return (
    <>
      <div className="col-span-2">
        <div className="flex items-center mt-[10px]">
          <Checkbox size="medium" defaultChecked />
          <p className="text-[16px]">Show your profile to logged-in Users</p>
        </div>
        <div className="flex items-center">
          <Checkbox size="medium" defaultChecked />
          <p>Show courses you're taking on your profile page</p>
        </div>
        <button className="site_btn mt-[15px] px-[40px] ml-[11px]">Save</button>
      </div>
    </>
  );
}
