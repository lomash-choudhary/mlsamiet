import React from "react";
import joinUsSvg from "../assets/joinus.svg";

export default function JoinUs() {
  return (
    <div className="flex items-center justify-center mt-8">
      <img 
        src={joinUsSvg} 
        className="mx-auto h-16" 
        alt="Join Us"
      />
    </div>
  );
}

