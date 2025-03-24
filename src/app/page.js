"use client";
import React, { useState, useEffect, useMemo } from "react";
import Demo from "../../components/demo";
import CaseContainer from "../../components/caseContainer";
import Footer from "../../components/footer";
import TestCase from "../../components/InnotaCase";
import Navigator from "../../components/navigator";
import NavButton from "../../components/navButton";
import InnotaCase from "../../components/InnotaCase";
import AxisCase from "../../components/AxisCase";

function Page() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  // Memoize `open` and `close` objects to prevent them from changing on each render
  const open = useMemo(
    () => ({
      padding: "10rem 0 0 0",
      transform: "scale(1)",
      opacity: "1",
      // transition: "transform 500ms ease, opacity 500ms ease", // Faster and smoother transition
      transition: "all 1100ms cubic-bezier(0.62, 0.61, 0.12, 1)",
      zIndex: "10",
    }),
    []
  );

  const close = useMemo(
    () => ({
      padding: "15rem 0 0 0",
      transform: "scale(0.9)",
      opacity: "0",
      // transition: "transform 500ms ease, opacity 500ms ease", // Faster and smoother transition
      transition: "all 800ms cubic-bezier(0.62, 0.61, 0.02, 1)",
      zIndex: "-10",
    }),
    []
  );

  const [caseHeight, setCaseHeight] = useState(close);
  const [caseOpen, setCaseOpen] = useState(false);
  const [caseContent, setCaseContent] = useState("empty");

  // Use effect to update the case based on content change
  useEffect(() => {
    if (caseContent !== "empty") {
      setCaseHeight(open);
      setCaseOpen(true);
    } else {
      setCaseHeight(close);
      setCaseOpen(false);
    }
  }, [caseContent, open, close]); // Trigger whenever caseContent changes

  return (
    <div className="relative">
      {/* Case Studies Section */}
      <section
        className={`flex flex-row-reverse justify-between xl:px-[1vw] lg:px-[2vw] px-gutter-sm h-[2rem] fixed w-full z-[12] 
          ${caseOpen === false ? "top-[-5vh] duration-[400ms] ease-slowEase" : "top-[2vh] delay-[700ms] duration-[500ms] ease-fastEase"}`}
      >
        <Navigator openNav={caseOpen} caseContent={caseContent} />
        <div
          className={`flex left-[3vw] h-fit w-fit z-[11] 
            ${caseOpen === false ? " opacity-[40%] duration-[400ms] ease-slowEase scale-[90%]" : " opacity-[100%] delay-[700ms] duration-[500ms] ease-fastEase scale-[100%]"}
          `}
        >
          <button
            className={`rounded-full px-[16px] py-[5px]  backdrop-blur-sm   hover:bg-white/0 hover:text-black ease-in-out duration-[200ms] transition-all border-[1px]  hover:cursor-pointer
              ${caseContent === "Innota" ? "bg-white/30 hover:border-white text-white hover:border-[1px] border-transparent" : "border-[1px] border-black hover:bg-black/20 text-black"}`}
            onClick={() => {
              setCaseHeight(close);
              setCaseOpen(false);
              setCaseContent("empty");
            }}
          >
            <h6
              className={`text-[12px] z-[12] ${caseContent === "Innota" ? "text-white" : "text-black"}`}
            >
              Close Case
            </h6>
          </button>
        </div>
      </section>

      {/* Home Page Section */}
      <section
        className={`flex flex-row justify-between xl:px-[1vw] lg:px-[2vw] px-[30px] h-[2rem] fixed w-full z-[12]  transition-all 
          ${caseOpen === true ? "top-[-5vh] duration-[400ms] ease-slowEase" : "top-[2vh] delay-[300ms] duration-[500ms] ease-fastEase"}`}
      >
        <NavButton
          openNav={caseOpen}
          customScroll={true}
          customScrollDefault={"Portfolio Still in Progress"}
          customScrollActive="Curious? Check out the Github!"
          customScrollTarget={"https://github.com/caleb05w/Portfolio-V4"}
          customScrollDot={true}
        />
        <NavButton
          openNav={caseOpen}
          openPrompt="Gallery"
          closePrompt="Close Prompt"
          // openPrompt="Gallery"
          // closePrompt="Close Prompt"
          customScroll={true}
          customScrollDefault="About"
          customScrollActive="Also In Progress"
          customScrollDotSecondary={true}
        />
      </section>

      {/* Centered Test Case */}
      <div
        className={`w-[100vw] h-[100vh] fixed overflow-scroll
          ${caseOpen === true ? "z-[9]" : "z-[0]"}`}
      >
        {caseContent === "Axis" ? (
          <AxisCase stylePlaceholder={caseHeight} caseOpen={caseOpen} />
        ) : (
          <InnotaCase stylePlaceholder={caseHeight} caseOpen={caseOpen} />
        )}
      </div>

      {/* Background Overlay Transition */}
      <div
        className={`w-[100vw] h-fit flex flex-col justify-center items-center bg-black transition-all ease-slowEase relative
          ${
            caseOpen === true
              ? "opacity-[10%] scale-[95%] top-[10vh] duration-[400ms]"
              : "opacity-[100%] top-[0vh] duration-[500ms]"
          }
          
        `}
      >
        <section className="flex flex-col lg:mx-[120px] mx-[20px] lg:py-gap-lg xl:py-gap-lg md:py-gap-md py-gap-sm lg:mt-[180px] mt-[60px] gap-[120px] lg:gap-[320px] items-center w-full px-[30px] lg:px-[120px]">
          <section className="">
            <Demo />
          </section>
          <div className="flex flex-col lg:flex-row gap-[10px] w-full">
            <div
              className="w-[100%] h-[100%] hover:cursor-pointer"
              onClick={() => {
                setCaseContent("Innota");
                scrollToTop();
              }}
            >
              <CaseContainer
                Title="Innota Technologies"
                Body1="Web Redesign"
                Body2="User Research"
                Case={
                  "https://www.youtube.com/embed/w8R3G3Anpjo?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=w8R3G3Anpjo"
                }
                styles={"opacity-[20%] bg-black"}
              />
            </div>
            <div
              className="w-[100%] h-[100%] hover:cursor-pointer"
              onClick={() => {
                setCaseContent("Axis");
                scrollToTop();
              }}
            >
              <CaseContainer
                Title="Axis Consulting"
                Body1="Branding"
                Body2="Visual Design"
                Case={
                  "https://www.youtube.com/embed/1Y5oL4GVUpo?autoplay=1&mute=1&loop=1&playlist=1Y5oL4GVUpo&controls=1&modestbranding=1"
                }
                styles={"opacity-[15%] bg-white"}
              />
            </div>
          </div>
        </section>
      </div>

      <Footer place="home" />
    </div>
  );
}

export default Page;
