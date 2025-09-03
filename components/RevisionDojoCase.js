"use client";
import React, { useEffect, useRef, useState } from "react";
import Video from "./video";
import TextBox from "./textBox";
import TextBoxWide from "./textBoxWide";
import Image from "next/image";
import Navigator from "./navigator";
import Footer from "./footer";
import "../src/app/globals.css";
import { useCase } from "../src/app/caseContext";
import Navcell from "./navcell"

function RevisionDojoCase({ stylePlaceholder, styles }) {
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


      {isMobile === false && <div className={` fixed flex flex-row justify-end right-[0] z-[900]`}>
        <button onClick={() => setNav(!nav)} className={`cursor-pointer ${nav ? "w-[100vw] h-[100vh]" : "w-[0vw] h-[0vh]"}`}></button>

        <div className={`h-[100vh] relative right-[0] ease-fastEase duration-[1100ms] transition-all bg-zinc-950 ${nav ? "w-[20vw] min-w-[20rem]" : "w-[0vw] min-w-[0rem] "}`}>

          <div className='flex flex-col  justify-between h-[100%] py-[32px] px-[32px]'>
            <div className="flex flex-col gap-[24px]">
              <h2 className='text-my-gray text-[20px]'> About the Company</h2>
              <h5>RevisionDojo is the fastest growing edtech startup, supporting over 300,000 users studying IB. Since the product was rapidly expanding into SAT, we needed a central pillar to ground our expansion for new and current users alike.</h5>
            </div>

            <div className="flex flex-col gap-[24px]">
              <h2 className='text-my-gray text-[20px]'> My Role</h2>
              <h5>As the sole product designer, I developed a scalable visual identity that made room for gamified growth.</h5>
            </div>


            <div className="flex flex-col gap-[32px]">
              <h2 className='text-my-gray text-[20px]' >Project Directory</h2>
              <div className='flex flex-col gap-[2px]'>
                <Navcell Name="Intro" Link="#RDIntro" Number="01" />
                <Navcell Name="Problem" Link="#RDProblem" Number="02" />
                <Navcell Name="Illustration Approach" Link="#RDGoal1" Number="03" />
                <Navcell Name="Driving User Retention" Link="#RDGoal2" Number="04" />
                <Navcell Name="Reflection" Link="#Innota-Reflection" Number="06" />
              </div>
            </div>

          </div>
        </div >

      </div >
      }

      <div
        className={`w-full bg-black h-fit overflow-hidden absolute z-[20] transition-all`}
        // Apply dynamic animation classes
        //   caseOpen ? "ease-fastEase" : "animate-closeCase"
        style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.\
      >
        <div className="flex flex-row  w-[100vw]">
          <div className={`flex flex-col gap-my-lg justify-center lg:gap-gap-lg md:gap-gap-md gap-gap-sm  ease-fastEase duration-[1100ms] transition-all ${nav && !isMobile ? "w-[80vw] blur-sm brightness-[60%]" : "w-[100vw]"}`}>
            <section className="gap-lg">
              <div className="xl:mx-gutter-xl lg:mx-gutter-lg mx-gutter-sm">
                <h1 className="text-white"> RevisionDojo </h1>
                <div className="flex flex-row justify-between w-[100%] mt-[20vh]">
                  <h5 className="text-my-gray"> 2024 </h5>
                  <div className="flex flex-row justify-between xl:w-[30%] lg:w-[50%] w-[70%]">
                    <div className="flex flex-col gap-[2px] w-full h-full">
                      <h5 className="text-my-gray"> Project </h5>
                      <h5> 5 Weeks </h5>
                      <h5> Web & Mobile </h5>
                      <h5> Vision Project </h5>
                    </div>
                    <div className="flex flex-col gap-[2px] w-full h-full">
                      <h5 className="text-my-gray"> Team</h5>
                      <h5> 1 Designer (Me) </h5>
                      <h5> 1 Front end </h5>
                      <h5> 3 Backend </h5>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[100%] h-[80vh] mt-[5vh] overflow-hidden">
                <section className="">

                </section>
                <Video
                  placeholder={
                    "https://www.youtube.com/embed/Hm-B_KlY6bw?autoplay=1&mute=1&playsinline=1&loop=1&controls=0&playlist=Hm-B_KlY6bw&rel=0&modestbranding=1"
                  }
                  brightness={"100%"}
                />
              </div>
            </section>
            <section
              className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm"
              id="RDIntro"
            >
              <h3 className='text-my-gray text-[20px]'> **Disclaimer: This Case Study is still WIP, apologies for any rough mockups.</h3>
              <TextBoxWide
                header="The Introduction"
                body="RevisionDojo is the fastest growing edtech startup, supporting over 300,000 users studying IB. Since the product was rapidly expanding into SAT, we needed a central pillar to ground our expansion for new and current users alike."
              ></TextBoxWide>

              <TextBoxWide
                header="The Introduction"
                body="As the sole product designer, I developed a scalable visual identity that made room for gamified growth."
              ></TextBoxWide>
              {/* <p>Scrolling down: {isScrollingDown ? "Yes" : "No"}</p> */}
            </section>


            {/* 1 Large image with 2 smaller images flex rowed's underneath */}
            <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              {/* <div className="w-[100%] h-[80vh] mt-[5vh] rounded-[64px] overflow-hidden ">
                <Video
                  placeholder=
                  "https://www.youtube.com/embed/FduaH_kDzQQ?autoplay=1&mute=1&loop=1&controls=0&playlist=FduaH_kDzQQ"
                  brightness={"100%"}
                />
              </div> */}
              <Image
                src="/images/RD1.svg" // Replace with your image path
                alt="Showcase of some of Innota's components"
                width={580} // Set the width
                height={900} // Set the height
                className="w-[100%] lg:h-full min-h-[50vh] nextImg rounded-[64px]"
              />
              <div className="container-2-img">
                <Image
                  src="/images/RD1.png" // Replace with your image path
                  alt="Showcase of some of Innota's components"
                  width={580} // Set the width
                  height={900} // Set the height
                  className="w-[50%] h-[50vh] lg:h-full min-h-[50vh] nextImg rounded-[64px] overflow-hidden"
                />
                <Image
                  src="/images/RD2.svg" // Replace with your image path
                  alt="Showcase of some of Innota's components"
                  width={580} // Set the width
                  height={900} // Set the height
                  className="w-[50%] h-[50vh] nextImg rounded-[64px] overflow-hidden"
                />
                {/* <div className="w-[50%] h-[80vh] mt-[5vh] rounded-[64px] overflow-hidden ">
                  <Video
                    placeholder=
                    "https://www.youtube.com/embed/Gq5k4x0tjvo?autoplay=1&mute=1&loop=1&controls=0&playlist=Gq5k4x0tjvo"
                    brightness={"100%"}
                  />
                </div> */}
              </div>
            </section>
            <div id="RDProblem" className="h-0"></div>
            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                header="The Problem"
                body="Despite rolling out a waves of new features, half of the incoming new users consistently dropped off within the first week."
              ></TextBox>
            </section>
            {/* 1 Large landscapped image */}
            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <Image
                src="/images/RD4.png"
                alt="Pro Plan component"
                width={1608} // Set the width
                height={900} // Set the height
                className="w-[100%] nextImg rounded-[64px]"
              />
            </section>
            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                body="Analyzing Internal Feedback revealed that Users dropped off because of 2 main reasons:"
              />
            </section>
            <section className="flex xl:flex-row lg:flex-row flex-col gap-[20px] xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <Image
                src="/images/RD66.png"
                alt="Results from our 2 week UXR Campaign"
                width={1204} // Set the width
                height={900} // Set the height
                className="xl:w-[75%] lg:w-[75%] w-[100%] nextImg rounded-[64px] overflow-hidden"
              />
              <div className="xl:w-[25%] lg:w-[25%] w-[100%] flex flex-col gap-[2rem] h-fill justify-end items-baseline">
                <p className="text-white">
                  The team monitored user activity, took feedback calls, and interacted with the user base to learn what was working, and what wasn’t.
                </p>
              </div>
            </section>
            {/* <section
              className="w-fill flex flex-row xl:justify-center lg:justify-center md:justify-center text-start xl:text-center lg:text-center md:text-center my-[120px] mx-gutter-sm xl:mx-0 lg:mx-0"
              id="AxisVision"
            >
              <div className="xl:max-w-[50vw] lg:max-w-[50vw] w-[fill] xl:my-[5rem]">
                <h5 className="text-my-gray">The Conclusion</h5>
                <h2 className="text-white">
                  Users didn’t trust the product due to poor design choices.
                </h2>
              </div>
            </section> */}
            {/* Part 1 */}
            <section
              className=" flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm "
              id="RDGoal1"
            >
              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <TextBox
                  header="Addressing issues with First Time User Experience:"
                  body="I used an illustration - driven approach to make interactions more intuitive."

                />
              </section>

              <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <div className="container-2-img">
                  <Image
                    src="/images/RD65.png" // Replace with your image path
                    alt="Showcase of some of Innota's components"
                    width={580} // Set the width
                    height={900} // Set the height
                    className="w-[50%] nextImg rounded-[64px]"
                  />
                  <Image
                    src="/images/RD7.png" // Replace with your image path
                    alt="Mobile view of app Q&A Page"
                    width={998} // Set the width
                    height={900} // Set the height
                    className="w-[50%] nextImg rounded-[64px] overflow-hidden"
                  />
                </div>
                <section className="containerBody">
                  <Image
                    src="/images/RD88.png"
                    alt="Laptop with Innota's home page open on a wooden desk"
                    width={1608} // Set the width
                    height={900} // Set the height
                    className="w-[100%] nextImg rounded-[64px] lg:min-h-full min-h-[50vh]"
                  />
                </section>

              </section>

              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <TextBox
                  header="My Design Rationale"
                  body="Drawing with vectors allowed me to reuse components from previous illustrations so I could ship features faster."
                />
              </section>

              <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <div className="container-2-img">
                  <Image
                    src="/images/RD9.png" // Replace with your image path
                    alt="Analysis of Q&A component"
                    width={875} // Set the width
                    height={900} // Set the height
                    className="nextImg w-[50%] rounded-[64px] overflow-hidden"
                  />
                  <Image
                    src="/images/RD10.png" // Replace with your image path
                    alt="Analysis of Blog component"
                    width={713} // Set the width
                    height={900} // Set the height
                    className="nextImg w-[50%] rounded-[64px] overflow-hidden"
                  />
                </div>
                <div className="container-2-img">
                  <Image
                    src="/images/RD11.svg" // Replace with your image path
                    alt="Showcase of some of Innota's components"
                    width={580} // Set the width
                    height={900} // Set the height
                    className="w-[65%] nextImg rounded-[64px]"
                  />
                  <Image
                    src="/images/RD112.png" // Replace with your image path
                    alt="Mobile view of app Q&A Page"
                    width={998} // Set the width
                    height={900} // Set the height
                    className="w-[35%] nextImg rounded-[64px] overflow-hidden"
                  />
                </div>
              </section>
              <section className="flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
                <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                  <TextBox
                    header="To differentiate from our illustration heavy approach:"
                    body="Motion was used to spotlighted milestones making achievements feel rewarding."
                  />
                </section>

                {/* 2 large images */}
                <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                  <div className="xl:w-[80%] lg:w-[100%] w-[100%]  xl:h-[60vh] lg:h-[60vh] md:h-[60vh] h-[60vh] rounded-[64px] overflow-hidden">
                    <Video
                      placeholder={"https://www.youtube.com/embed/Pg8OAwx3u2M?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&playlist=Pg8OAwx3u2M"
                      }
                      brightness={"100%"}
                    />
                  </div>
                  <div className="xl:w-[80%] lg:w-[100%] w-[100%]  xl:h-[60vh] lg:h-[60vh] md:h-[60vh] h-[40vh] rounded-[64px] overflow-hidden">
                    <Video
                      placeholder={
                        "https://www.youtube.com/embed/q5EHOE6XLMY?autoplay=1&mute=1&loop=1&controls=0&modestbranding=1&rel=0&playlist=q5EHOE6XLMY"
                      }
                      brightness={"100%"}
                    />
                  </div>
                </section>
              </section>
              {/* Part 2 */}


              <section id="RDGoal2" className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <TextBox
                  body="The illustrations I made built the foundation for new features like avatars and multiplayer, which engaged user retention."
                />
              </section>

              {/* 1 Large image with 2 smaller images flex rowed's underneath */}
              <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <section className="containerBody">
                  <Image
                    src="/images/RD15.png"
                    alt="Laptop with Innota's home page open on a wooden desk"
                    width={1608} // Set the width
                    height={900} // Set the height
                    className="w-[100%] nextImg overflow-hidden rounded-[64px] lg:min-h-full min-h-[50vh]"
                  />
                </section>

                <div className="container-2-img max-h-[60vh]">
                  <Image
                    src="/images/RD1516.png" // Replace with your image path
                    alt="Showcase of some of Innota's components"
                    width={580} // Set the width
                    height={600} // Set the height
                    className="w-[50%] nextImg overflow-hidden rounded-[64px]"
                  />
                  <Image
                    src="/images/RD16new.png" // Replace with your image path
                    alt="Mobile view of app Q&A Page"
                    width={998} // Set the width
                    height={600} // Set the height
                    className="w-[50%] nextImg overflow-hidden rounded-[64px]"
                  />
                </div>
              </section>

              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <TextBox
                  body2="An avatar system helped foster a sense of product ownership for users."
                />
              </section>

              <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <div className="container-2-img h-[full] lg:max-h-[60vh]">
                  <Image
                    src="/images/RD17.png" // Replace with your image path
                    alt="Mobile view of app Q&A Page"
                    width={998} // Set the width
                    height={800} // Set the height
                    className="w-[70%] lg:h-full min-h-[50vh] nextImg overflow-hidden rounded-[64px]"
                  />
                  <Image
                    src="/images/RD18.png" // Replace with your image path
                    alt="Showcase of some of Innota's components"
                    width={580} // Set the width
                    height={600} // Set the height
                    className="w-[30%] min-h-[20vh] nextImg overflow-hidden rounded-[64px]"
                  />

                </div>
                <section className="containerBody">
                  <Image
                    src="/images/RD19.png"
                    alt="Laptop with Innota's home page open on a wooden desk"
                    width={1608} // Set the width
                    height={900} // Set the height
                    className="lg:min-h-full min-h-[50vh] w-[100%] nextImg overflow-hidden rounded-[64px]"
                  />
                </section>
              </section>

              <section className=" flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
                <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                  <TextBox
                    body="Benchmarks such as achievements, streaks, and ranks helped build user retention."
                  />
                </section>

                <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                  <Image
                    src="/images/RD20.png" // Replace with your image path
                    alt="Showcase of the component system"
                    width={580} // Set the width
                    height={900} // Set the height
                    className="w-[35%] nextImg rounded-[64px] overflow-hidden"
                  />
                  <Image
                    src="/images/RD21.png" // Replace with your image path
                    alt="Breaking down an individual component and its anatomy"
                    width={998} // Set the width
                    height={900} // Set the height
                    className="w-[65%] nextImg rounded-[64px] overflow-hidden"
                  />
                </section>

                <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                  <TextBox body="And that’s a wrap (for now). The product is still scaling, and new features are still being built. "
                    body2="The illustrations have become a core pillar to the product identity, and synonymous with theç brand language, which I co authored. " />
                </section>

                <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                  {/* <div className="xl:w-[80%] lg:w-[80%] w-[100%] xl:h-auto lg:h-auto h-[50vh]">
                  <Video
                    placeholder={
                      "https://www.youtube.com/embed/lhfgqkCaHc0?si=pnDNXC7tzlso1ukB&autoplay=1&mute=1&loop=1&playlist=lhfgqkCaHc0&modestbranding=1&rel=0&fs=1"
                    }
                    brightness={"100%"}
                  />
                </div> */}
                  <section className="containerBody">
                    <Image
                      src="/images/RDend.png"
                      alt="Laptop with Innota's home page open on a wooden desk"
                      width={1608} // Set the width
                      height={900} // Set the height
                      className="w-[100%] nextImg overflow-hidden rounded-[64px]"
                    />
                  </section>


                </section>

                {/* <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm w-fit">
                  <TextBox
                    header="The Handoff"
                    body="At the end of my 4 months I'd shipped:"
                  />
                  <div className="flex flex-col gap-[4vh] mt-[8vh]">
                    <div className="border-b border-white h-[1px]] w-[100%]n opacity-[60%]"></div>
                    <h2 className="text-white">
                      A Figma file loaded with the redesign
                    </h2>
                    <div className="border-b border-white h-[1px]] w-[100%]n opacity-[60%]"></div>
                    <h2 className="text-white">
                      Fully prototyped mockup & Design system.
                    </h2>
                    <div className="border-b border-white h-[1px]] w-[100%]n opacity-[60%]"></div>
                    <h2 className="text-white">7x Custom Email Templates</h2>
                  </div>
                </section> */}

                {/* <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm ">
                  <Image
                    src="/images/Img16.png" // Replace with your image path
                    alt="Close up photo of the blog page"
                    width={879} // Set the width
                    height={900} // Set the height
                    className="w-[60%] nextImg"
                  />
                  <Image
                    src="/images/Img17.png" // Replace with your image path
                    alt="Hand holding app"
                    width={717} // Set the width
                    height={900} // Set the height
                    className="w-[40%] nextImg"
                  />
                </section> */}
              </section>

              <section className=" flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
                <div id="Innota-Reflection" className="h-0"></div>
                <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm w-fit ">
                  <TextBox
                    body="Key Learnings"
                  />
                  <div className=" flex xl:flex-row lg:flex-row flex-col gap-[40px] mt-[80px] w-fill max-w-[100%] xl:max-w-[60vw] lg:max-w-[100vw]">
                    <div className="flex flex-col gap-[15px] w-full">
                      <p className="text-my-gray">
                        {" "}
                        Speak Up!!!
                      </p>
                      <p>
                        Pitch your ideas during meetings, be excited and passionate about them and stand your ground.
                        Coming from a design perspective allowed me to advocate for user centric solutions in our standups and take more ownership on feature development.
                      </p>
                    </div>

                    <div className="flex flex-col gap-[15px] w-full">
                      <p className="text-my-gray"> Take Risks</p>
                      <p>
                        Despite never taking an animation or character design course, I saw an opportunity to bring the brand to life and seized it. I initially joined as a Design Engineer but quickly pivoted and now lead product and illustration.
                      </p>
                    </div>
                  </div>
                </section>
              </section>
              <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <Image
                  src="/images/RDR1.png" // Replace with your image path
                  alt="Showcase of the component system"
                  width={580} // Set the width
                  height={900} // Set the height
                  className="w-[33.3%] nextImg rounded-[64px] overflow-hidden"
                />
                <Image
                  src="/images/RDR2.png" // Replace with your image path
                  alt="Breaking down an individual component and its anatomy"
                  width={998} // Set the width
                  height={900} // Set the height
                  className="w-[33.3%] nextImg rounded-[64px] overflow-hidden"
                />
                <Image
                  src="/images/RDR3.png" // Replace with your image path
                  alt="Breaking down an individual component and its anatomy"
                  width={998} // Set the width
                  height={900} // Set the height
                  className="w-[33.3%] nextImg rounded-[64px] overflow-hidden"
                />
              </section>

            </section>
            <Footer place="case" />
          </div>
        </div>
      </div>
    </div >
  );
}

export default RevisionDojoCase;
