"use client";

import React, { useState } from "react";
import Demo from "../../../components/demo";
import CaseContainer from "../../../components/caseContainer";
import Navbar from "../../../components/navbar";
import TestCase from "../../../components/testCase";

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
    top: "25vh",
    transform: "scale(0.9)",
    opacity: "0",
    transition: "all 600ms cubic-bezier(0.62, 0.61, 0.02, 1)",
    zIndex: "-10",
  };
  //Handles opening and closing
  const [caseHeight, setCaseHeight] = useState(close);
  const [caseOpen, setCaseOpen] = useState(false);
  return (
    <div className="relative">
      <section className="fixed z-[100]">
        <button
          className="text-white bg-red-500"
          onClick={() => {
            setCaseHeight(close);
            setCaseOpen(false);
            scrollToTop();
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
      </section>
      <TestCase stylePlaceholder={caseHeight} caseOpen={caseOpen} />
      <div
        className={`w-[100vw] h-fit flex flex-col justify-center items-center bg-black transition-all ease-slowEase relative
          
          ${
            caseOpen === true
              ? "opacity-[10%] scale-[95%] top-[10vh] duration-[400ms]"
              : "opacity-[100%] top-[0vh] duration-[600ms]"
            //   "animate-BGcloseCase"
            // : "animate-BGopenCase"
          }
          `}
      >
        <section className="lg:px-[120px] px-[20px] w-full">
          <Navbar />
        </section>

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
                "https://www.youtube.com/embed/IaIF-HaLqXM?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=IaIF-HaLqXM"
              }
            />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Page;
