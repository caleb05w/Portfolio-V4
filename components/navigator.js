"use client";
// 1702
import React, { useState, useEffect } from "react";
import { IoIosArrowDown } from "react-icons/io";
import NavigatorCell from "./navigatorCell";

function Navigator({ openNav, navAppear }) {
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
        className={` w-full h-fit flex flex-row gap-[7px] items-center rounded-full px-[16px] py-[5px] bg-white/30 backdrop-blur-sm text-white hover:border-white hover:border-[1px] hover:bg-white/0 hover:text-black ease-in-out duration-[200ms] transition-all border-[1px] border-transparent hover:cursor-pointer
            ${nav === true ? "bg-white/50 text-white rounded-[10px]" : "bg-white/30 backdrop-filter rounded-[120px]"}`}
        onClick={() => setNav(!nav)}
      >
        {nav === true ? (
          <p className="text-[12px]">Close Directory </p>
        ) : (
          <p className="text-[12px]">Case Directory</p>
        )}
        <div className=" w-fit h-fit">
          {nav === true ? (
            <IoIosArrowDown className="text-white text-[0.9rem] rotate-180" />
          ) : (
            <IoIosArrowDown className="text-white text-[0.9rem]" />
          )}
        </div>
      </button>

      <div
        className={`flex flex-col gap-[2px] transition-all ease-fastEase duration-[400ms] justify-start items-start bg-white w-[100%] border-2 border-white p-[0.2rem] overflow-hidden
        ${nav === true ? "h-[14rem] opacity-[100%] z-[10] rounded-[10px] mt-[1rem]" : "h-[5vh] opacity-[0] z-[-10] rounded-[20px] mt-[0.5rem]"}`}
      >
        <NavigatorCell Case="Intro" Link="#Innota-Intro" />
        <NavigatorCell Case="Problem" Link="#Innota-Problem" />
        <NavigatorCell Case="Solution #1" Link="#Innota-Goal1" />
        <NavigatorCell Case="Solution #2" Link="#Innota-Goal2" />
        <NavigatorCell Case="Handoff" Link="#Innota-Handoff" />
        <NavigatorCell Case="Reflection" Link="#Innota-Reflection" />
      </div>
    </div>
  );
}

export default Navigator;
