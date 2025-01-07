import React from "react";
import joinUsSvg from "../assets/joinus.svg";

export default function JoinUs() {
  return (
    <div className="flex justify-center mt-8">
      <img 
        src={joinUsSvg} 
        className="w-[280px] sm:w-[380px] md:w-[483px] h-auto max-h-[142px]" 
        alt="Join Us"
      />
    </div>
  );
}

