"use client";
import React, { useState, useEffect } from "react";
import { FaCircle } from "react-icons/fa";


function NavButton({
  openNav,
  openPrompt,
  closePrompt,
  link,
  customPrompt,
  customDropDown,
  customScroll,
  customScrollDefault,
  customScrollActive,
  customScrollTarget,
  customScrollDot,
  customScrollDotSecondary,
}) {
  const [nav, setNav] = useState(true);

  useEffect(() => {
    if (openNav == true) {
      setNav(false);
    }
  }, [openNav]);

  return (
    <div
      className={`z-[11] flex flex-col transition-all h-fit relative
    ${openNav == true ? "opacity-[40%] duration-[400ms] ease-slowEase scale-[90%]" : "opacity-[100%] delay-[700ms] duration-[1100ms] ease-fastEase scale-[100%]"}`}
    >
      <div className="group h-fit w-fit">
        <button
          className={` w-fit border-[1px] h-fit  max-h-[1.8rem]  overflow-hidden flex flex-row gap-[7px] items-center rounded-[5px] px-[16px] py-[24px] bg-white/30 backdrop-blur-sm text-white hover:border-white hover:border-[1px] hover:text-black ease-in-out duration-[200ms] transition-all border-transparent hover:cursor-pointer
        ${nav === true ? "bg-white/30 text-white rounded-[10px]" : "bg-white/30 backdrop-filter rounded-[120px]"}`}
        // onClick={() => setNav(!nav)}
        >
          {/* {nav === true ? (
          <p className="text-[12px]">{openPrompt} </p>
        ) : (
          <p className="text-[12px]">{closePrompt}</p>
        )} */}

          {customScroll === true ? (
            <div className=" w-fit h-fit">
              <div className=" px-[0px]">
                <div
                  className={`group flex flex-row  justify-start
                    ${customScrollDot === true ? "gap-[7px]" : "gap-[0px]"} `}
                >
                  <div className="h-fill flex flex-col items-center justify-center">
                    {customScrollDot === true ? (
                      <FaCircle className=" h-[11px] w-fit group-hover:text-white text-yellow-400 transition-all ease-fastEase duration-[500ms]" />
                    ) : (
                      <FaCircle className=" h-0 w-0 " />
                    )}

                    {/* Only show circle on active scroll */}
                    {customScrollDotSecondary === true ? (
                      <FaCircle className="h-[0px] mr-[0px] w-fit  group-hover:h-[11px] group-hover:mr-[7px] text-yellow-400 transition-all ease-fastEase duration-[400ms] delay-[0ms]" />
                    ) : (
                      <FaCircle className=" h-0 w-0 " />
                    )}
                  </div>
                  <div className="flex flex-col mt-[28px] gap-[10px] group-hover:mt-[-26px] duration-[400ms] ease-fastEase ">
                    <p className="text-[12px] max-w-[180px] text-nowrap opacity-[100%] group-hover:opacity-[0%] group-hover:max-w-[50px] duration-[450ms] ease-fastEase transition-all ">
                      {customScrollDefault}
                    </p>
                    <a
                      href={customScrollTarget}
                      target="_blank"
                      className="w-full"
                    >
                      <p className="text-[12px] max-w-[10px] text-nowrap opacity-[100%] group-hover:opacity-[100%] group-hover:max-w-[180px] duration-[450ms] ease-fastEase transition-all hover:border-b border-white">
                        {customScrollActive}
                      </p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <a href={link}>
              <p className="text-[12px]"> {openPrompt} </p>
            </a>
          )}
        </button>
        {customDropDown}
      </div>
    </div>
  );
}

export default NavButton;
