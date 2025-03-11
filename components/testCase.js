"use client";
import React from "react";
import Video from "./video";

function TestCase({ stylePlaceholder, caseOpen }) {
  return (
    <div
      className={`w-full bg-black h-fit overflow-hidden absolute z-[20] transition-all
        `}
      // Apply dynamic animation classes
      //   caseOpen ? "ease-fastEase" : "animate-closeCase"
      style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.
    >
      <div className="flex flex-col gap-[220px] justify-center">
        <section className="lg:mx-[120px] mx-[20px]">
          <div className="">
            <h1 className="text-white"> Innota </h1>
            <div className="flex flex-row justify-between w-[100%] mt-[20vh]">
              <h5> 2024 </h5>
              <div className="flex flex-row justify-between w-[20%]">
                <div className="flex flex-col gap-[2px] w-full h-full">
                  <h5> Project </h5>
                  <h5> 5 Weeks </h5>
                  <h5> Web & Mobile </h5>
                  <h5> Vision Project </h5>
                </div>
                <div className="flex flex-col gap-[2px] w-full h-full">
                  <h5> Team</h5>
                  <h5> 1 Designer (Me) </h5>
                  <h5> 1 Front end </h5>
                  <h5> 3 Backend </h5>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[100%] h-[60vh] mt-[5vh]">
            <Video
              placeholder={
                "https://www.youtube.com/embed/w8R3G3Anpjo?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=w8R3G3Anpjo"
              }
              brightness={"100%"}
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default TestCase;
