import React from 'react'

const UploadedClasses = ({setShowCourses}) => {
  return (
    <>
    <div>
        <span onClick={()=>setShowCourses(true)} className='cursor-pointer'>{"<--back"}</span>
        <h1>Uploaded courses</h1>
    </div>
     </>
  )
}

export default UploadedClasses