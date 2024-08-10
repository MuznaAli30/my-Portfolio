import React from "react";
import MuznaResume from '../../Assets/MuznaResume.jpg';

function ResumeNew() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#cdcbd6] ">
      <img className="m-10 max-w-[90%] h-auto shaddow-2xl rounded-2xl max-sm:w-[90%] max-lg:w-[90%] max-xl:w-[90%]" src={MuznaResume} alt="Resume" />
    </div>
  );
}

export default ResumeNew;
