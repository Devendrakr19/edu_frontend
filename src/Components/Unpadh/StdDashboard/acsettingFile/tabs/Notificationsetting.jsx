import { Checkbox } from "@mui/material";

export default function Notificationsetting() {
  return (
    <>
      <div className="col-span-1 px-[10px]">
        <h2 className="text-[18px] mt-[10px] font-medium">
          I want to recieve:
        </h2>
        <div className="flex items-center">
          <Checkbox size="medium" defaultChecked />
          <p>
            Promotion,course recommendations, and helpful resources from Uredx.
          </p>
        </div>

        <div className="flex items-center mt-[10px]">
          <Checkbox size="medium" defaultChecked />
          <p>Announcements from instructors whose courses I'm enrolled in.</p>
        </div>
        <div className="ml-[40px] text-[14px] text-[#8a8989]">
          To adjust this preference by course, leave this box checked and go to
          the course dashboard and click on "Oprions" to opt in or out of
          specific announcements.
        </div>

        <div className="flex items-center mt-[10px]">
          <Checkbox size="medium" defaultChecked />
          <p>Don't send me any promotional emails.</p>
        </div>

        <div className="ml-[40px] text-[14px] text-[#8a8989]">
          If the box is checked,please note that you will continue to recieve
          important transactional emails like purchase receipts.
        </div>
        <div className="mt-[15px] px-[10px]">
          <button className="site_btn px-[40px]">Save</button>
        </div>
      </div>
    </>
  );
}
