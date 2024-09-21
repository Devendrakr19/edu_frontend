import React from 'react'

export default function Closeaccount() {
  return (
    <>
      <div className="col-span-1  px-[10px]">
        <div className="mt-[15px]">
          <span className="text-[red]">Warning: </span>
          If you close your account, you will be unsubscribed from all your
          courses, and will lose access forever.
        </div>
        <div className="mt-[20px]">
          <button className="site_btn px-[40px]">Save</button>
        </div>
      </div>
    </>
  );
}
