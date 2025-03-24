"use client";
import React, { useEffect, useRef, useState } from "react";
import Video from "./video";
import TextBox from "./textBox";
import Image from "next/image";
import Footer from "./footer";

function AxisCase({ stylePlaceholder, caseOpen, styles }) {
  const startRef = useRef(null);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [lastScrollPosition, setLastScrollPosition] = useState(0);
  const containerRef = useRef(null);
  const [localCase, setLocalCase] = useState(caseOpen);

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
    <div ref={startRef} className="scroll-smooth">
      {/* //Navigator component */}
      {/* <Navigator openNav={caseOpen} /> */}
      {/* Navbar */}

      <div
        className={`w-full bg-white h-fit overflow-hidden absolute z-[20] transition-all`}
        // Apply dynamic animation classes
        //   caseOpen ? "ease-fastEase" : "animate-closeCase"
        style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.\
      >
        <div className="flex flex-col gap-my-lg justify-center w-full lg:gap-gap-lg md:gap-gap-md gap-gap-sm">
          <section className="gap-lg">
            <div className="xl:mx-gutter-xl lg:mx-gutter-lg mx-gutter-sm">
              <h1 className="text-black"> Axis Consulting </h1>
              <div className="flex flex-row justify-between w-[100%] mt-[20vh]">
                <h5 className="text-my-gray"> 2024 </h5>
                <div className="flex flex-row justify-between xl:w-[30%] lg:w-[50%] w-[70%]">
                  <div className="flex flex-col gap-[2px] w-full h-full">
                    <h5 className="text-my-gray"> Project </h5>
                    <h5 className="text-black"> Ongoing </h5>
                    <h5 className="text-black"> Art Direction</h5>
                    <h5 className="text-black"> Branding </h5>
                  </div>
                  <div className="flex flex-col gap-[2px] w-full h-full">
                    <h5 className="text-my-gray"> Team</h5>
                    <h5 className="text-black"> 1 Design Director (Me) </h5>
                    <h5 className="text-black"> 2 Visual Designers </h5>
                    <h5 className="text-black"> 1 Visual Media</h5>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[100%] h-[80vh] mt-[5vh]">
              <Video
                placeholder={
                  "https://www.youtube.com/embed/vM9dsLqdgRI?autoplay=1&mute=1&loop=1&playlist=vM9dsLqdgRI&controls=1&modestbranding=1"
                }
                brightness={"100%"}
              />
            </div>
          </section>
          <section
            className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm"
            id="AxisIntro"
          >
            <TextBox
              header="The Introduction"
              body="Axis Consulting, a pro bono consulting club at Simon Fraser University, needed a bold rebrand to reignite engagement. As the Design Director, I developed a striking visual identity to inspire and captivate its audience."
              color="black"
            ></TextBox>
            {/* <p>Scrolling down: {isScrollingDown ? "Yes" : "No"}</p> */}
          </section>

          {/* 2 large images */}
          <section className=" flex flex-col gap-[20px] xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <div className="w-[100%] xl:h-[80vh] lg:h-[80vh] md:h-[60vh] h-[40vh] ">
              <Video
                placeholder={
                  "https://www.youtube.com/embed/1Y5oL4GVUpo?autoplay=1&mute=1&loop=1&playlist=1Y5oL4GVUpo&controls=1&modestbranding=1"
                }
                brightness={"100%"}
              />
            </div>
            <div className="container-2-img">
              <Image
                src="/images/Axis1.png" // Replace with your image path
                alt="The website showcase"
                width={999} // Set the width
                height={900} // Set the height
                className="w-[65%] nextImg"
              />
              <Image
                src="/images/Axis2.png" // Replace with your image path
                alt="Gif from motion graphic"
                width={579} // Set the width
                height={900} // Set the height
                className="w-[35%] nextImg"
              />
            </div>
          </section>

          <section
            className="w-full flex flex-row justify-center text-center my-[80px]"
            id="AxisVision"
          >
            <div className="xl:max-w-[50vw] lg:max-w-[50vw] md:max-w-[75vw] w-[100vw]">
              <h5 className="text-my-gray">The Vision</h5>
              <h2 className="text-black">
                Craft a brand to inspire awe and reignite engagement in a dying
                audience.
              </h2>
            </div>
          </section>

          <div id="Innota-Problem" className="h-0"></div>

          <section
            className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm"
            id="AxisMarketingCampaign"
          >
            <TextBox
              header="Pillar 1"
              body="Dominating our media presence"
              color="black"
            ></TextBox>
          </section>

          {/* 1 Large landscapped image */}
          <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <Image
              src="/images/Axis3.png"
              alt="Pro Plan component"
              width={1608} // Set the width
              height={900} // Set the height
              className="w-[100%] nextImg"
            />
            <div className="xl:w-[30%] lg:w-[60%] w-[100%] flex flex-col gap-[2rem] h-fill justify-end  items-baseline">
              <p className="text-black">
                Competing against 15+ other SFU clubs, for events, participants,
                and hiring, new users needed an immediate way to identify our
                content.
              </p>
              <p className="text-black">
                Axis Consulting&apos;s primary engagement for events and
                projects was through Instagram. The pitch-black canvas, paired
                with delicate splashes of blue, became the signature visual
                identity that defined the brand.
              </p>
            </div>
          </section>

          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm mt-[5rem]">
            <TextBox
              header="Pillar 2"
              body="Reimaging Axis across a dynamic plane"
              color="black"
              id="AxisMotionReel"
            />
          </section>

          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm flex xl:flex-row lg:flex-row flex-col xl:gap-[2%] lg:gap-[2%] gap-[20px] min-h-[50vh]">
            <div className="xl:w-[100%] lg:w-[100%] w-[100%]  xl:h-[80vh] lg:h-[80vh] md:h-[60vh] h-[40vh]">
              <Video
                placeholder={
                  "https://www.youtube.com/embed/ecyOBWauVDM?autoplay=1&mute=1&loop=1&playlist=ecyOBWauVDM&controls=1&modestbranding=1"
                }
                brightness={"100%"}
              />
            </div>
            <div className="xl:w-[30%] lg:w-[60%] w-[100%] flex flex-col gap-[2rem] h-fill justify-end  items-baseline">
              <p className="text-black">
                Graphics were great, but failed to encapsulate any emotion.
              </p>
              <p className="text-black">
                We sought to engage students on a more immersive and emotional
                level. The motion graphic provided a fluid and compelling
                approach, captivating the audience and reinforced Axis&apos;s
                brand identity in a way static images never could. 
              </p>
            </div>
          </section>

          <section
            className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm mt-[5rem]"
            id="AxisWebsite"
          >
            <TextBox
              header="pillar 3"
              body="Establishing a legacy on the web"
              color="black"
            />
          </section>

          <section className=" flex flex-col gap-[20px] xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <div className="w-[100%] max-h-[900px] ">
              <Image
                src="/images/Axis4.png" // Replace with your image path
                alt="The website landing page"
                width={999} // Set the width
                height={900} // Set the height
                className="w-[100%] nextImg"
              />
            </div>
            <div className="container-2-img">
              <Image
                src="/images/Axis5.png" // Replace with your image path
                alt="Mobiule responsive view of the website"
                width={999} // Set the width
                height={900} // Set the height
                className="w-[35%] nextImg"
              />
              <Image
                src="/images/Axis6.png" // Replace with your image path
                alt="Some of the Axis Consulting teams featured on the website"
                width={579} // Set the width
                height={900} // Set the height
                className="w-[65%] nextImg"
              />
            </div>
          </section>

          <section
            className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm mt-[5rem]"
            id="AxisBrand"
          >
            <TextBox
              header="Pillar 2"
              body="Building a Brand to Inspire"
              color="black"
            />
          </section>

          <section className=" flex flex-col gap-[20px] xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <div className="container-2-img">
              <Image
                src="/images/Axis7.png" // Replace with your image path
                alt="Inspiration for color"
                width={999} // Set the width
                height={900} // Set the height
                className="w-[45%] nextImg"
              />
              <Image
                src="/images/Axis8.png" // Replace with your image path
                alt="Our typography"
                width={579} // Set the width
                height={900} // Set the height
                className="w-[55%] nextImg"
              />
            </div>
            <div className="w-[100%] max-h-[900px] flex xl:flex-row lg:flex-row md:flex-row flex-col gap-[20px]">
              <Image
                src="/images/Axis9.png" // Replace with your image path
                alt="Axis stickers and lanyards from our annual Revolve Consulting Conference Pillar Event"
                width={999} // Set the width
                height={900} // Set the height
                className="w-[100%] nextImg"
              />
              <div className="xl:w-[30%] lg:w-[60%] w-[100%] flex flex-col gap-[2rem] h-fill justify-end  items-baseline">
                <p className="text-black">
                  We aimed to break away from the notion of consulting as a
                  rigid, corporate process.
                </p>
                <p className="text-black">
                  Instead, we framed it as a creative avenue for
                  problem-solving, leading to the theme: &quot;Invoke Awe&quot;
                  -- inspired by stars in the night sky.
                </p>
              </div>
            </div>
          </section>

          <section
            className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm"
            id="AxisImpact"
          >
            <TextBox body="My Impact" color="black" />
          </section>

          <section className=" flex flex-col gap-[20px] xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <div className="container-2-img">
              <Image
                src="/images/Axis10.png" // Replace with your image path
                alt="Inspiration for color"
                width={999} // Set the width
                height={900} // Set the height
                className="w-[60%] h-full object-cover nextImg"
              />
              <Image
                src="/images/Axis11.png" // Replace with your image path
                alt="Our typography"
                width={579} // Set the width
                height={900} // Set the height
                className="w-[60%] h-full object-cover nextImg"
              />
              <div className="xl:w-[30%] lg:w-[60%] w-[100%] flex flex-col gap-[2rem] h-fill justify-end  items-baseline">
                <p className="text-black">
                  The July rebrand was a success—LinkedIn impressions rose 500%,
                  Instagram reach grew 101%, and applications increased 40%,
                  earning praise from both the team and alumni.
                </p>
              </div>
            </div>
          </section>

          <Footer place="case" color="black" />
        </div>
      </div>
    </div>
  );
}

export default AxisCase;
