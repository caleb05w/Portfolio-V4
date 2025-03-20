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
import { FaCircle } from "react-icons/fa";

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
          className={`flex flex-row justify-between xl:px-[1vw] lg:px-[2vw] px-[30px] h-[2rem] fixed w-full  z-[12] 
        ${caseOpen === true ? "top-[-5vh] duration-[400ms] ease-slowEase" : "top-[2vh] delay-[300ms] duration-[1100ms] ease-fastEase"}`}
        >
          <NavButton
            openNav={caseOpen}
            customScroll={true}
            customScrollDefault="Portfolio In Progress"
            customScrollActive="Curious? Check out the Github!"
            customScrollTarget={"https://github.com/caleb05w/Portfolio-V4"}
            customScrollDot={true}

            // Custom dropdown for nav buttons in case you need it
            // customDropDown={
            //   <div className="h-fill w-full mt-[-2rem] group-hover:mt-[-2rem] absolute z-[-10]">
            //     <a
            //       href="https://github.com/caleb05w/Portfolio-V4"
            //       target="_blank"
            //     >
            //       <div className="bg-white h-fit w-full px-[16px] py-[0px] opacity-[0%] rounded-full group-hover:opacity-[100%] mt-[1rem] group-hover:mt-[3rem] group-hover:py-[6px] duration-[400ms] ease-slowEase transition-all">
            //         <p className="text-[12px] border-transparent border text-black hover:border hover:border-b-black w-fit">
            //           Check out the Github here!{" "}
            //         </p>
            //       </div>
            //     </a>
            //   </div>
            // }
          />

          <div className="xl:flex lg:flex  md:flex hidden flex-row gap-[1rem]  ">
            <NavButton
              openNav={caseOpen}
              // link="/about"
              customScroll={true}
              customScrollDefault="About"
              customScrollActive="In Progress"
              customScrollDotSecondary={true}
            />
            <NavButton
              openNav={caseOpen}
              // openPrompt="Gallery"
              // closePrompt="Close Prompt"
              customScroll={true}
              customScrollDefault="Gallery"
              customScrollActive="Also In Progress"
              customScrollDotSecondary={true}
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

        <section className="flex flex-col lg:mx-[120px] mx-[20px] lg:py-gap-lg xl:py-gap-lg md:py-gap-md py-gap-sm lg:mt-[180px] mt-[60px] gap-[120px] lg:gap-[320px] items-center w-full px-[30px] lg:px-[120px]">
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
                styles={"opacity-[20%] bg-black"}
              />
            </div>
            <CaseContainer
              Title="Axis Consulting"
              Body1="Web Redesign"
              Body2="User Research"
              Case={
                "https://www.youtube.com/embed/Dl3muNlmm7o?si=-OR7BNPI1ZJlQn0b&autoplay=1&loop=1&playlist=Dl3muNlmm7o&cc_load_policy=1&modestbranding=1&rel=0&mute=1"
              }
              styles={"opacity-[15%] bg-white"}
            />
          </div>
        </section>
      </div>
      <Footer place="home" />
    </div>
  );
}

export default Page;
