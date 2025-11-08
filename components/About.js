"use client";
import React, { useEffect, useRef, useState } from "react";
import "../src/app/globals.css";
import { useCase } from "../src/app/caseContext";
import AboutText from "./aboutText";
import Footer from "./footer";
import Image from "next/image"


function About({ stylePlaceholder, styles }) {
  const { caseOpen, isMobile } = useCase();
  const { nav, setNav } = useCase();
  const startRef = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const containerRef = useRef(null);

  useEffect(() => {
    // Ensure containerRef.current is not null
    if (containerRef.current) {
      const handleScroll = () => {
        const currentScrollPosition = containerRef.current.scrollTop;

        // Check if the user is scrolling down or up
        if (currentScrollPosition > lastScrollPosition) {
          setIsScrollingDown(true);
        } else {
          setIsScrollingDown(false);
        }

        // Update the last scroll position
        setLastScrollPosition(currentScrollPosition);
      };

      const container = containerRef.current;

      // Add the scroll event listener to the container
      container.addEventListener("scroll", handleScroll);

      // Clean up the event listener when the component unmounts
      return () => {
        container.removeEventListener("scroll", handleScroll);
      };
    }
  }, [lastScrollPosition]); // Depend on lastScrollPosition to check if the scroll position

  const handleScrollToStart = () => {
    if (startRef.current) {
      startRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    if (!caseOpen) {
      handleScrollToStart();
    }
  }, [caseOpen]); // This effect runs when caseOpen changes

  return (
    <div ref={startRef} className="scrollable">




      <div
        className={`w-full bg-black h-fit overflow-hidden absolute z-[20] transition-all`}
        // Apply dynamic animation classes
        //   caseOpen ? "ease-fastEase" : "animate-closeCase"
        style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.\
      >
        <div className="flex flex-row w-[100vw] ">
          <div className={` flex flex-col items-center gap-my-lg justify-center lg:gap-gap-lg md:gap-gap-md gap-gap-sm  ease-fastEase duration-[1100ms] transition-all ${nav && !isMobile ? "w-[80vw] blur-sm brightness-[60%]" : "w-[100vw]"}`}>

            <section className='lg:w-[60vw] md:w-[80vw] w-[full] xl:mx-gutter-xl lg:mx-gutter-lg mx-gutter-sm'>
              <section className=" flex flex-col lg:gap-[180px] md:gap-gap-md gap-[60px]">
                <div className='flex flex-col gap-[80px]'>
                  <Image
                    src="/images/caleb.png" // Replace with your image pat

                    alt="A picture of me and my best friend"
                    width={200} // Set the width
                    height={200} // Set the height
                    className="max-w-[180px] h-fit nextImg"
                  />
                  <section className='flex lg:flex-row flex-col lg:gap-[120px] gap-[40px]'>
                    <h6 className='min-w-[115px]'>About Me</h6>
                    <div className='max-w-[450px] flex flex-col gap-[20px]'>
                      <p className='text-[16px] text-my-gray'>
                        Roblox? 2000 Hours. Front End? Self taught. Trackpad warrior? Since 2014.
                      </p>

                      <p className='text-[16px] text-my-gray'>
                        An excessively in-excessive product designer, I thrive building products from conception to creation. A go getter who believes the best way to learn is through hands on experience, you can find me tinkering on Figma, messing with Claude, or building with NextJS.
                      </p>



                    </div>
                  </section>
                </div>

                <section className='w-full h-fit flex flex-col gap-[80px]'>
                  <div className='flex lg:flex-row md:flex-row flex-col justify-between items-center align-middle w-full h-fit'>
                    <div className='flex flex-row lg:gap-[120px] justify-between lg:justify-normal w-full'>
                      <h6 className='lg:min-w-[115px] min-w-[20px]'>Experiences</h6>
                      <h6 className='text-my-gray text-nowrap'>Where I’ve been.</h6>
                    </div>
                    {/* <div className='bg-my-gray lg:w-[8px] lg:h-[8px] md:w-[8px] md:h-[8px] w-0 h-0 rounded-sm'> </div> */}
                    {/* <h6 className='text-my-gray'> -- </h6> */}
                  </div>

                  <div className=' flex lg:flex-row flex-col w-full h-fit'>
                    <div className=' min-w-[235px]'></div>
                    <div className='flex flex-col gap-[32px] w-full'>
                      <AboutText Company="RevisionDojo (YC24)" Year="2025" Title="Design Engineer Intern" />
                      <AboutText Company="Metalab" Year="2025" Title="Product Design Intern" />
                      <AboutText Company="Second Savour" Year="2024" Title="FrontEnd Engineer Intern" />
                      <AboutText Company="InnotaAI" Year="2024" Title="Product Design Intern" />
                    </div>
                  </div>
                </section>

                <section className='w-full h-fit flex flex-col gap-[80px]'>
                  <div className='flex lg:flex-row md:flex-row flex-col justify-between w-full h-fit'>
                    <div className='flex flex-row lg:gap-[120px] justify-between lg:justify-normal w-full'>
                      <h6 className='lg:min-w-[115px] min-w-[20px]'>Education</h6>
                      <h6 className='text-my-gray text-nowrap'>What I&apos;ve Learned.</h6>
                    </div>
                    {/* <div className='bg-my-gray lg:w-[8px] lg:h-[8px] md:w-[8px] md:h-[8px] w-0 h-0 rounded-sm'> </div> */}
                  </div>

                  <div className=' flex lg:flex-row flex-col w-full h-fit'>
                    <div className=' min-w-[235px]'></div>
                    <div className='flex flex-col gap-[32px] w-full'>
                      <AboutText Company="Simon Fraser University" Year="2022" Title="School of Interactive Arts & Technology" />
                    </div>
                  </div>
                </section>


                {/* leadership experience, took it out because the design is hard to look at. */}
                {/* <section className='w-full h-fit flex flex-col gap-[80px]'>
                  <div className='flex flex-row justify-between w-full h-fit'>
                    <div className='flex flex-row gap-[120px]'>
                       <h6 className='lg:min-w-[115px] min-w-[20px]'>Leadership Experience</h6>
                      <h6 className='text-my-gray'>Where I've led</h6>
                    </div>
                  </div>

                  <div className=' flex flex-row w-full h-fit'>
                    <div className=' min-w-[235px]'></div>
                    <div className='flex flex-col gap-[32px] w-full'>
                      <AboutText Company="Interactive Arts & Technology Student Union" Year="2025" Title="President" />
                      <AboutText Company="SFU Axis Consulting" Year="2025" Title="Director of Design" />
                      <AboutText Company="Enactus SFU" Year="2024" Title="Director of Media Production" />
                      <AboutText Company="Canadianized Asian Community" Year="2024" Title="Director of Community" />
                    </div>
                  </div>
                </section> */}


                <section className='w-full h-fit flex flex-col gap-[80px]'>
                  <div className='flex lg:flex-row md:flex-row flex-col justify-between w-full h-fit'>
                    <div className='flex flex-row lg:gap-[120px] justify-between lg:justify-normal w-full'>
                      <h6 className='lg:min-w-[115px] min-w-[20px]'>Thesis</h6>
                      <h6 className='text-my-gray text-nowrap'>Who I am</h6>
                    </div>
                    {/* <div className='bg-my-gray lg:w-[8px] lg:h-[8px] md:w-[8px] md:h-[8px] w-0 h-0 rounded-sm'> </div> */}
                  </div>

                  <div className=' flex lg:flex-row flex-col w-full h-fit'>
                    <div className=' min-w-[235px]'></div>
                    <div className='flex flex-col gap-[32px] w-full'>
                      {/* <p className='text-[16px] max-w-[450px] text-my-gray'>
                        Roblox? 2000 Hours. Front End? Self taught. Trackpad warrior? Hell yeah.
                      </p> */}

                      <p className='text-[16px] max-w-[450px] text-my-gray'> I’m a product designer focused on the intersection between design and business. With 3x hackathon wins under my belt, I’m proficient in both front end & design -- specializing in producing quick streamlined interfaces under short periods of time. </p>

                      <p className='text-[16px] max-w-[450px] text-my-gray'> Currently I’m pursuing a Beedle School of Business and Interactive Arts & Technologies joint major at SFU, concentrating in design & development for web + mobile, and interactive design. </p>

                      <p className='text-[16px] max-w-[450px] text-my-gray'> My go to tech stack for design is the Adobe Suite & Figma -- for bringing these designs to life I use Tailwind & ReactJS with a bit of FramerMotion -- and for project management I’m proficient in Hubspot, Microsoft Suite, and Notion. </p>


                      <p className='text-[16px] max-w-[450px] text-my-gray'>
                        When I’m not designing the next flow on Figma, or try to catch everyyyy edge case, you can find me collecting Lego Cars, grinding out Roblox, trying to dev my own game.
                      </p>
                    </div>
                  </div>
                </section>
              </section>
              <Footer place="about" />
            </section>

          </div >
        </div >

      </div >
    </div >
  );
}

export default About;
