"use client";
import React, { useState, useEffect } from "react";

function NavButton({ openNav, openPrompt, closePrompt, link }) {
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
      <button
        className={` w-full h-fit flex flex-row gap-[7px] items-center rounded-full px-[16px] py-[5px] bg-white/30 backdrop-blur-sm text-white hover:border-white hover:border-[1px] hover:bg-white/0 hover:text-black ease-in-out duration-[200ms] transition-all border-[1px] border-transparent hover:cursor-pointer
        ${nav === true ? "bg-white/30 text-white rounded-[10px]" : "bg-white/30 backdrop-filter rounded-[120px]"}`}
        // onClick={() => setNav(!nav)}
      >
        {/* {nav === true ? (
          <p className="text-[12px]">{openPrompt} </p>
        ) : (
          <p className="text-[12px]">{closePrompt}</p>
        )} */}
        <a href={link}>
          <p className="text-[12px]"> {openPrompt} </p>
        </a>
      </button>
    </div>
  );
}

export default NavButton;
