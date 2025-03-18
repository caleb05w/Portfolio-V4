"use client";

// TO DO

// * Fix the prootype video and the live demo on Innota
// * route about page properly
// * Fix the nav bar

import React, { useState } from "react";
import Demo from "../../components/demo";
import CaseContainer from "../../components/caseContainer";
import Footer from "../../components/footer";
import TestCase from "../../components/testCase";
import Navigator from "../../components/navigator";
import NavButton from "../../components/navButton";

function Page() {
  //scrolls to top of page for case studies
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Adds smooth scrolling
    });
  };

  // Handles what the case looks like when opened vs closed
  const open = {
    top: "10vh",
    height: "fit-content",
    transform: "scale(1)",
    opacity: "1",
    transition: "all 1100ms cubic-bezier(0.62, 0.61, 0.12, 1)",
    zIndex: "10",
  };
  const close = {
    top: "15vh",
    transform: "scale(0.9)",
    opacity: "0",
    transition: "all 800ms cubic-bezier(0.62, 0.61, 0.02, 1)",
    zIndex: "-10",
  };
  //Handles opening and closing
  const [caseHeight, setCaseHeight] = useState(close);
  const [caseOpen, setCaseOpen] = useState(false);
  return (
    <div className="relative">
      {/* Nav bars for test cases */}
      <div className=" ">
        {/* Case Studies */}
        <section
          className={`flex flex-row-reverse justify-between xl:px-[1vw] lg:px-[2vw] px-gutter-sm h-[2rem] fixed w-full  z-[12] 
        ${caseOpen === false ? "top-[-5vh] duration-[400ms] ease-slowEase" : "top-[2vh] delay-[700ms] duration-[1100ms] ease-fastEase"}`}
        >
          <Navigator openNav={caseOpen} />

          {/* top-[-5vh]
        top-[2.5vh] */}
          <div
            className={`flex left-[3vw] h-fit w-fit z-[11] 
        ${caseOpen === false ? " opacity-[40%] duration-[400ms] ease-slowEase scale-[90%]" : " opacity-[100%] delay-[700ms] duration-[1100ms] ease-fastEase scale-[100%]"}
          `}
          >
            <button
              className="rounded-full px-[16px] py-[5px] bg-white/30 backdrop-blur-sm text-white hover:border-white hover:border-[1px] hover:bg-white/0 hover:text-black ease-in-out duration-[200ms] transition-all border-[1px] border-transparent hover:cursor-pointer"
              onClick={() => {
                setCaseHeight(close);
                setCaseOpen(false);
              }}
            >
              <h6 className="text-[12px]">Close Case</h6>
            </button>
          </div>
        </section>
        {/* Home Page */}
        <section
          className={`flex flex-row justify-between xl:px-[1vw] lg:px-[2vw] px-gutter-sm h-[2rem] fixed w-full  z-[12] 
        ${caseOpen === true ? "top-[-5vh] duration-[400ms] ease-slowEase" : "top-[2vh] delay-[300ms] duration-[1100ms] ease-fastEase"}`}
        >
          <NavButton
            openNav={caseOpen}
            openPrompt="about"
            closePrompt="about"
          />
          <div className="flex flex-row gap-[1rem] ">
            <NavButton
              openNav={caseOpen}
              openPrompt="About"
              closePrompt="Close Prompt"
              link="/about"
            />
            <NavButton
              openNav={caseOpen}
              openPrompt="Gallery"
              closePrompt="Close Prompt"
            />
          </div>
        </section>
      </div>
      {/* <section className="fixed z-[100]">
        <button
          className="text-white bg-red-500"
          onClick={() => {
            setCaseHeight(close);
            setCaseOpen(false);
          }}
        >
          Close Case
        </button>

        <button
          className="text-white bg-green-500"
          onClick={() => {
            setCaseHeight(open);
            setCaseOpen(true);
            scrollToTop();
          }}
        >
          Open Case
        </button>
      </section> */}
      {/* centers the testcase always, and makes sure it is contained */}
      <div
        className={` w-[100vw] h-[100vh] fixed overflow-scroll
          ${caseOpen === true ? "z-[9]" : "z-[0]"}`}
      >
        <TestCase stylePlaceholder={caseHeight} caseOpen={caseOpen} />
      </div>
      <div
        className={`w-[100vw] h-fit flex flex-col justify-center items-center bg-black transition-all ease-slowEase relative
          
          ${
            caseOpen === true
              ? "opacity-[10%] scale-[95%] top-[10vh] duration-[400ms]"
              : "opacity-[100%] top-[0vh] duration-[700ms]"
            //   "animate-BGcloseCase"
            // : "animate-BGopenCase"
          }
          `}
      >
        {/* <section className="lg:px-[120px] px-[20px] w-full">
          <Navbar />
        </section> */}

        <section className="flex flex-col lg:mx-[120px] mx-[20px] py-[120px] lg:mt-[180px] mt-[60px] gap-[120px] lg:gap-[320px] items-center w-full px-[30px] lg:px-[120px]">
          <section className="">
            <Demo />
          </section>
          <div className="flex flex-col lg:flex-row gap-[10px] w-full">
            <div
              className=" w-[100%] h-[100%] hover:cursor-pointer "
              onClick={() => {
                setCaseHeight(open);
                setCaseOpen(true);
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
              />
            </div>
            <CaseContainer
              Title="Axis Consulting"
              Body1="Web Redesign"
              Body2="User Research"
              Case={
                "https://www.youtube.com/embed/Dl3muNlmm7o?si=-OR7BNPI1ZJlQn0b&autoplay=1&loop=1&playlist=Dl3muNlmm7o&cc_load_policy=1&modestbranding=1&rel=0&mute=1"
              }
            />
          </div>
        </section>
      </div>
      <Footer place="home" />
    </div>
  );
}

export default Page;
