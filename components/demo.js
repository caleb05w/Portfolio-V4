"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import sun1 from "../public/images/1.gif";
import sun2 from "../public/images/2.gif";
import sun3 from "../public/images/3.gif";
import sun4 from "../public/images/4.gif";

function Demo() {
  const [toggle, setToggle] = useState(false);
  const [placeholder, setPlaceholder] = useState(1);
  const imageMap = {
    1: sun1,
    2: sun2,
    3: sun1,
    4: sun2,
  };

  const currentImage = imageMap[placeholder];
  const intervalRef = useRef(null);
  const containerRef = useRef(null);

  // Detect if the screen is mobile or desktop
  const isMobile = useRef(false);

  useEffect(() => {
    // Initial screen width check
    if (window.innerWidth <= 768) {
      isMobile.current = true;
    } else {
      isMobile.current = false;
    }

    // Update on window resize
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        isMobile.current = true;
      } else {
        isMobile.current = false;
      }
    };
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // This function handles the image swapping and container toggling
  const changeImage = () => {
    setToggle(false); // Close the image container
    setTimeout(() => {
      setPlaceholder((prev) => (prev % 4) + 1); // Change the image
      setToggle(true); // Reopen with the new image
    }, 500); // Delay of 500ms before reopening the image
  };

  useEffect(() => {
    // Set interval to change image every 5 seconds
    intervalRef.current = setInterval(changeImage, 5000);

    // Cleanup the interval on unmount
    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);

  useEffect(() => {
    // Start with opening the first image container
    setToggle(true);
  }, []);

  return (
    <div className="flex flex-col gap-[40px] text-[#A0A0A0]" ref={containerRef}>
      <h4>Hey! I’m Caleb — Currently @Metalab</h4>

      {/* Conditionally Render Desktop or Mobile Layout */}
      {isMobile.current ? (
        // Mobile layout
        <div className="w-fit h-fit flex flex-col items-start justify-start gap-[0.5rem]">
          {/* Container for the image with toggle transition */}
          <div
            className={`transition-all ease-in-out duration-[500ms] overflow-hidden ${
              toggle ? "w-[128px] h-[128px]" : "w-0 h-[128px]"
            } transform ${toggle ? "scale-110" : "scale-0"} transform-origin-center`}
          >
            <div className="w-fit h-fit">
              <div className="w-[110px] h-[110px] rounded-[5px] overflow-hidden">
                <Image
                  src={currentImage}
                  alt="Sunset"
                  width={128}
                  height={128}
                  className="w-fit h-fit"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[2rem]">
            <div className="flex flex-col gap-[5px] text-[#A0A0A0]">
              <h4>Hey! I’m Caleb </h4>
              <h4>Currently @Metalab</h4>
            </div>
            <div className="flex flex-col gap-[5px]">
              <h1>Designer by Day,</h1>
              <h1>Developer by Night.</h1>
            </div>
          </div>
        </div>
      ) : (
        // Desktop layout
        <div className="w-fit h-fit flex justify-center items-center">
          <div className="h-[128px] flex flex-col items-center justify-center">
            <h1>Designer by Day</h1>
          </div>

          {/* Container for the image with toggle transition */}
          <div
            className={`transition-all ease-in-out duration-[500ms] overflow-hidden object-cover ${
              toggle
                ? "w-[6.5vw] h-[6.5vw] mx-[30px] min-w-[70px] min-h-[70px]"
                : "w-0 h-0 mx-[20px] min-w-[0px] min-h-[0px]"
            } transform ${toggle ? "scale-110" : "scale-0"} transform-origin-center`}
          >
            <div className="w-fit h-fit">
              <div className="min-w-[70px] min-h-[70px] w-[6.5vw] h-[6.5vw] object-cover rounded-[5px] overflow-hidden">
                <Image
                  src={currentImage}
                  alt="Sunset"
                  width={128}
                  height={128}
                  className="w-fill h-[100%] object-cover"
                />
              </div>
            </div>
          </div>

          <div className="h-[128px] flex flex-col justify-center items-center">
            <h1>Dev by Night.</h1>
          </div>
        </div>
      )}
    </div>
  );
}

export default Demo;
