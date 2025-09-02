"use client";
// 1702
import React, { useState, useEffect, useRef } from "react";
import { useCase } from "../src/app/caseContext";
import { IoIosArrowDown } from "react-icons/io";
import NavigatorCell from "./navigatorCell";
import { CiCompass1 } from "react-icons/ci";

function Navigator({ navAppear }) {
  const { caseOpen, caseContent, nav, setNav, isMobile } = useCase();

  useEffect(() => {
    if (!caseOpen) {
      setNav(false);
    }
  }, [caseOpen]);

  return (
    <div
      className={`z-[11] flex flex-col transition-all h-fit relative items-end 
        ${nav !== true ? "opacity-[100%] delay-[200ms] duration-[1100ms] ease-fastEase scale-[100%]" : "opacity-[100%] duration-[400ms] ease-slowEase scale-[95%]"}`}
    >
      <button
        className={` w-fit h-fit flex flex-row gap-[7px] items-center rounded-[5px] px-[16px] py-[16px] backdrop-blur-sm 
          :border-[1px]  ease-in-out duration-[200ms] transition-all border-[1px]  hover:cursor-pointer
            ${nav === true ? "bg-white/50 text-white rounded-[10px] opacity-[40%]" : "opacity-[100%] bg-white/30 backdrop-filter rounded-[120px]"}
            ${caseContent === "Innota" || "RevisionDojo" ? "bg-white/30 hover:border-white text-white border-transparent" :
            caseContent === "Axis" ? "border-black hover:bg-black/20 text-black" :
              "hidden"}`}
        onClick={() => setNav(!nav)}
      >
        {nav === true ? (
          <p
            className={`text-[12px] z-[12] ${caseContent === "Innota" || "RevisionDojo" ? "text-white" : "text-black"}`}
          >
            {/* Close Directory{" "} */}
            <CiCompass1 className='w-[16px] h-auto' />

          </p>
        ) : (
          <p
            className={`text-[12px] z-[12] ${caseContent === "Innota" || "RevisionDojo" ? "text-white" : "text-black"}`}
          >
            <CiCompass1 className='w-[16px] h-auto' />
          </p>
        )}
        {/* <div className=" w-fit h-fit">
          {nav === true ? (
            <IoIosArrowDown
              className={`${caseContent === "Innota" ? "text-white" : "text-black"} text-[0.9rem] rotate-180 z[12]"`}
            />
          ) : (
            <IoIosArrowDown
              className={`${caseContent === "Innota" ? "text-white" : "text-black"} text-[0.9rem] z-[12]"`}
            />
          )}
        </div> */}
      </button>

      {
        isMobile && (
          <div
            className={`flex flex-col gap-[2px] transition-all ease-fastEase duration-[400ms] justify-start items-start bg-white w-[100%] border-[1px] p-[0.2rem] overflow-hidden
          ${nav === true ? "h-[14rem] opacity-[100%] z-[10] rounded-[5px] mt-[1rem]" : "h-[5vh] opacity-[0] z-[-10] rounded-[20px] mt-[0.5rem]"}
          ${caseContent === "Innota" ? "border-white" : "border-black/20"}
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
            ) :
              caseContent === "RevisionDojo" ? (
                <>
                  <NavigatorCell Case="Intro" Link="#RDIntro" />
                  <NavigatorCell Case="Problem" Link="#RDProblem" />
                  <NavigatorCell Case="Solution #1" Link="#Innota-Goal1" />
                  <NavigatorCell Case="Solution #2" Link="#Innota-Goal2" />
                  <NavigatorCell Case="Handoff" Link="#Innota-Handoff" />
                  <NavigatorCell Case="Reflection" Link="#Innota-Reflection" />
                </>
              ) :

                (
                  <>
                    <NavigatorCell Case="Intro" Link="#AxisIntro" />
                    <NavigatorCell Case="Vision" Link="#AxisVision" />
                    <NavigatorCell Case="Problem" Link="#AxisProblem" />
                    <NavigatorCell Case="Branding" Link="#AxisBrand" />
                    <NavigatorCell Case="Media" Link="#AxisMedia" />
                    <NavigatorCell Case="My Impact" Link="#AxisImpact" />
                  </>
                )}
          </div>
        )
      }
    </div >
  );
}

export default Navigator;
