import { Checkbox } from "@mui/material";

export default function Messagesetting() {
  return (
    <>
      <div className="col-span-1  px-[10px]">
        <div className="flex items-center mt-[10px]">
          <Checkbox size="medium" defaultChecked />
          <p>Turn off direct messaging</p>
        </div>
        <div className="ml-[40px] text-[14px] text-[#8a8989]">
          When you rurn off direct messages, you will no longer be able to send
          or receive direct messages as an instructor.
        </div>
    
        <div className="mt-[15px] px-[10px]">
          <button className="site_btn px-[40px]">Save</button>
        </div>
      </div>
    </>
  );
}
