import React from "react";
import MuznaResume from '../../Assets/MuznaResume.jpg';

function ResumeNew() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#cdcbd6]">
      <img className="mb-5 max-w-full h-auto" src={MuznaResume} alt="Resume" />
    </div>
  );
}

export default ResumeNew;
