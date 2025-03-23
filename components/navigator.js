"use client";
// 1702
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavigatorCell from "./navigatorCell";

function Navigator({ openNav, navAppear, caseContent }) {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    if (openNav != true) {
      setNav(false);
    }
  }, [openNav]);

  return (
    <div
      className={`z-[11] flex flex-col transition-all h-fit relative
        ${openNav !== true ? "opacity-[40%] duration-[400ms] ease-slowEase scale-[90%]" : "opacity-[100%] delay-[700ms] duration-[1100ms] ease-fastEase scale-[100%]"}`}
    >
      <button
        className={` w-full h-fit flex flex-row gap-[7px] items-center rounded-full px-[16px] py-[5px] backdrop-blur-sm hover:border-[1px]  ease-in-out duration-[200ms] transition-all border-[1px] border-transparent hover:cursor-pointer
            ${nav === true ? "bg-white/50 text-white rounded-[10px]" : "bg-white/30 backdrop-filter rounded-[120px]"}
            ${caseContent === "Innota" ? "bg-white/30 hover:border-white text-white" : "border-black hover:bg-black/20 text-black"}`}
        onClick={() => setNav(!nav)}
      >
        {nav === true ? (
          <p
            className={`text-[12px] z-[12] ${caseContent === "Innota" ? "text-white" : "text-black"}`}
          >
            Close Directory{" "}
          </p>
        ) : (
          <p
            className={`text-[12px] z-[12] ${caseContent === "Innota" ? "text-white" : "text-black"}`}
          >
            Case Directory
          </p>
        )}
        <div className=" w-fit h-fit">
          {nav === true ? (
            <IoIosArrowDown
              className={`${caseContent === "Innota" ? "text-white" : "text-black"} text-[0.9rem] rotate-180 z[12]"`}
            />
          ) : (
            <IoIosArrowDown
              className={`${caseContent === "Innota" ? "text-white" : "text-black"} text-[0.9rem] z-[12]"`}
            />
          )}
        </div>
      </button>

      <div
        className={`flex flex-col gap-[2px] transition-all ease-fastEase duration-[400ms] justify-start items-start bg-white w-[100%] border-[1px] p-[0.2rem] overflow-hidden
        ${nav === true ? "h-[14rem] opacity-[100%] z-[10] rounded-[10px] mt-[1rem]" : "h-[5vh] opacity-[0] z-[-10] rounded-[20px] mt-[0.5rem]"}
        ${caseContent === "Innota" ? "border-white" : "border-black"}
        `}
      >
        {caseContent === "Innota" ? (
          <>
            <NavigatorCell Case="Intro" Link="#Innota-Intro" />
            <NavigatorCell Case="Problem" Link="#Innota-Problem" />
            <NavigatorCell Case="Solution #1" Link="#Innota-Goal1" />
            <NavigatorCell Case="Solution #2" Link="#Innota-Goal2" />
            <NavigatorCell Case="Handoff" Link="#Innota-Handoff" />
            <NavigatorCell Case="Reflection" Link="#Innota-Reflection" />
          </>
        ) : (
          <>
            <NavigatorCell Case="Intro" Link="#AxisIntro" />
            <NavigatorCell Case="Vision" Link="#AxisVision" />
            <NavigatorCell Case="Media" Link="#AxisMarketingCampaign" />
            <NavigatorCell Case="Website" Link="#AxisWebsite" />
            <NavigatorCell Case="Branding" Link="#AxisBrand" />
            <NavigatorCell Case="My Impact" Link="#AxisImpact" />
          </>
        )}
      </div>
    </div>
  );
}

export default Navigator;
