"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import carousel1 from "../public/videos/carousel1.gif";
import carousel2 from "../public/videos/carousel2.gif";
import carousel3 from "../public/videos/carousel3.gif";
import carousel4 from "../public/videos/carousel4.gif";
import carousel5 from "../public/videos/carousel5.gif";
import carousel6 from "../public/videos/carousel6.gif";

function Demo() {
  const [toggle, setToggle] = useState(false);
  const [placeholder, setPlaceholder] = useState(1);
  const imageMap = {
    1: carousel1,
    2: carousel2,
    3: carousel3,
    4: carousel4,
    5: carousel5,
    6: carousel6,
  };

  const currentImage = imageMap[placeholder];
  const intervalRef = useRef(null);
  const containerRef = useRef(null);
  const isMobile = useRef(
    typeof window !== "undefined" && window.innerWidth <= 768
  );

  useEffect(() => {
    const handleResize = () => {
      isMobile.current = window.innerWidth <= 768;
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const changeImage = () => {
    setToggle(false);
    setTimeout(() => {
      setPlaceholder((prev) => (prev % 6) + 1);
      setToggle(true);
    }, 500);
  };

  useEffect(() => {
    intervalRef.current = setInterval(changeImage, 5000);
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => setToggle(true), []);

  return (
    <div className="flex flex-col" ref={containerRef}>
      {isMobile.current ? (
        <div className="w-fit h-fit flex flex-col items-start justify-start gap-[0.5rem] overflow-hidden">
          <div
            className={`transition-all ease-fastEase duration-[500ms] overflow-hidden object-cover rounded-[10px] ${toggle
              ? "w-[120px] h-[120px] my-[10px] min-w-[70px] min-h-[70px]"
              : "w-[120px] h-[120px] my-[10px] min-w-[20px] min-h-[70px] rounded-[1rem]"
              } transform ${toggle ? "scale-[100%]" : "scale-[30%]"} transform-origin-center flex justify-center items-center`}
          >
            <div className="w-full h-full p-[10px]">
              <div
                className={`h-[100%] w-[100%] transition-all ease-fastEase duration-[400ms] rounded-[10px]
                  ${toggle ? "bg-transparent" : "bg-white"}`}
              >
                <div className="w-full h-[100%] rounded-[5px] overflow-hidden">
                  <Image
                    src={currentImage}
                    alt="Display"
                    width={128}
                    height={128}
                    className={`absolute top-0 left-0 w-[10rem] h-[10rem] min-w-full min-h-full object-cover transition-all ease-fastEase duration-[400ms]
                      ${toggle ? "opacity-[100%]" : "opacity-[0%]"}`}
                    priority
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem]">
            {/* <div className="flex flex-col gap-[5px] text-[#A0A0A0] opacity-[100%]">
              <h4>Hey! I’m Caleb </h4>
              <h4>Currently @RevisionDojo (YC F24), Prev Metalab</h4>
            </div> */}
            <div className="flex flex-col gap-[5px]">
              <h1>Designer by Day,</h1>
              <h1>Developer by Night.</h1>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col text-my-gray lg:gap-[40px] xl:gap-[40px] gap-[20px] pt-[12rem]">
          {/* <div className='flex flex-col gap-[8px]'>
            <h4 className='text-my-gray'>Hey! I’m Caleb </h4 >
            <h5 className='text-my-gray' >Currently @RevisionDojo (YC F24), Prev Metalab</h5>
          </div> */}
          <div className="w-fit h-fit flex justify-center items-center">
            <div className="h-[128px] flex flex-col items-center justify-center">
              <h1>Designer by Day</h1>
            </div>

            <div
              className={`transition-all ease-fastEase duration-[500ms] overflow-hidden object-cover  ${toggle
                ? "w-[6.5vw] h-[6.5vw] mx-[3vw] min-w-[70px] min-h-[70px] rounded-[0.4vw]"
                : "w-[10px] h-[10px] mx-[2vw] min-w-[20px] min-h-[20px] rounded-[0.2vw]"
                } transform ${toggle ? "scale-110" : "scale-100"} transform-origin-center flex justify-center items-center`}
            >
              <div className="w-fit h-fit">
                <div
                  className={`h-[10rem] w-[10rem] transition-all ease-fastEase duration-[400ms]
                  ${toggle ? "bg-transparent" : "bg-white"}`}
                >
                  <div className="min-w-[70px] min-h-[70px] w-[6.5vw] h-[6.5vw] object-cover rounded-[5px] overflow-hidden">
                    <Image
                      src={currentImage}
                      alt="Display"
                      width={128}
                      height={128}
                      className={`absolute top-0 left-0 w-[10rem] h-[10rem] min-w-full min-h-full object-cover transition-all ease-fastEase duration-[400ms]
                        ${toggle ? "opacity-[100%]" : "opacity-[0%]"}`}
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="h-[128px] flex flex-col justify-center items-center">
              <h1>Dev by Night.</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Demo;
