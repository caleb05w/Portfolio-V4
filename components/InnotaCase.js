"use client";
import React, { useEffect, useRef, useState } from "react";
import Video from "./video";
import TextBox from "./textBox";
import Image from "next/image";
import Navigator from "./navigator";
import Footer from "./footer";

function InnotaCase({ stylePlaceholder, caseOpen, styles }) {
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
        className={`w-full bg-black h-fit overflow-hidden absolute z-[20] transition-all`}
        // Apply dynamic animation classes
        //   caseOpen ? "ease-fastEase" : "animate-closeCase"
        style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.\
      >
        <div className="flex flex-col gap-my-lg justify-center w-full lg:gap-gap-lg md:gap-gap-md gap-gap-sm">
          <section className="gap-lg">
            <div className="xl:mx-gutter-xl lg:mx-gutter-lg mx-gutter-sm">
              <h1 className="text-white"> Innota </h1>
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
            <div className="w-[100%] h-[80vh] mt-[5vh]">
              <Video
                placeholder={
                  "https://www.youtube.com/embed/w8R3G3Anpjo?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=w8R3G3Anpjo"
                }
                brightness={"100%"}
              />
            </div>
          </section>
          <section
            className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm"
            id="Innota-Intro"
          >
            <TextBox
              header="The Introduction"
              body="Innota Technology is an educational startup gamifying the way students learn through flashcards and mind maps. As the sole product designer, I was tasked with rebuilding the web identity in preparation for the products official launch."
            ></TextBox>
            {/* <p>Scrolling down: {isScrollingDown ? "Yes" : "No"}</p> */}
          </section>

          {/* 2 large images */}
          <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <Image
              src="/images/Img1.png" // Replace with your image path
              alt="The website showcase"
              width={999} // Set the width
              height={900} // Set the height
              className="w-[65%] nextImg"
            />
            <Image
              src="/images/Img2.png" // Replace with your image path
              alt="Pro Plan component"
              width={579} // Set the width
              height={900} // Set the height
              className="w-[35%] nextImg"
            />
          </section>
          <div id="Innota-Problem" className="h-0"></div>

          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <TextBox
              header="The Problem"
              body="Despite website engagement, the web app had 0 DAU, and users weren’t being converted from leads to sales."
            ></TextBox>
          </section>

          {/* 1 Large landscapped image */}
          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <Image
              src="/images/Img3.png"
              alt="Pro Plan component"
              width={1608} // Set the width
              height={900} // Set the height
              className="w-[100%] nextImg"
            />
          </section>

          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
            <TextBox
              header="Solving the issue"
              body="Spearheading a User Research Campaign"
            />
          </section>

          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm  overflow-hidden">
            <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col justify-end w-full xl:gap-[10%] lg:gap-[10%] gap-[3rem] items-end">
              <p className="xl:max-w-[30%] lg:max-w-[50%] max-w-[100%]">
                To find out where the user drop offs were happening, I launched
                a 2 week UXR campaign to gauge pain points, and better
                understand the users. I primarily did outreach on Discord,
                Slack, and in person.
              </p>
              <Image
                src="/images/UXR.png"
                alt="Results from the UXR campaign"
                width={971} // Set the width
                height={430} // Set the height
                className="xl:max-w-[60%] lg:max-w-[50%] max-w-[100%] nextImg"
              />
            </div>
          </section>

          {/* Part 1 */}
          <section className="lg:mt-[10vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
            <div id="Innota-Goal1" className="h-0"></div>
            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                header="Goal #1"
                body="An Ambitious Web  Redesign"
                para="Users didn’t trust the old website. Poor design looks unprofessional and lacks credibility. It became of paramount importance that a new identity was rolled out."
              />
            </section>

            {/* 1 Large image with 2 smaller images flex rowed's underneath */}
            <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <section className="containerBody">
                <Image
                  src="/images/Img4.png"
                  alt="Laptop with Innota's home page open on a wooden desk"
                  width={1608} // Set the width
                  height={900} // Set the height
                  className="w-[100%] nextImg"
                />
              </section>

              <div className="container-2-img">
                <Image
                  src="/images/Img5.png" // Replace with your image path
                  alt="Showcase of some of Innota's components"
                  width={580} // Set the width
                  height={900} // Set the height
                  className="w-[40%] nextImg"
                />
                <Image
                  src="/images/Img6.png" // Replace with your image path
                  alt="Mobile view of app Q&A Page"
                  width={998} // Set the width
                  height={900} // Set the height
                  className="w-[60%] nextImg"
                />
              </div>
            </section>

            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                header="My Design Rationale"
                body="Onsite elements were remolded into digestable chunks."
                body2="A simple black and white colour palette made interactions clear as night and day."
              />
            </section>

            <section className="flex flex-col gap-img-gap-lg xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <div className="container-2-img">
                <Image
                  src="/images/Img7.png" // Replace with your image path
                  alt="Analysis of Q&A component"
                  width={875} // Set the width
                  height={900} // Set the height
                  className="nextImg w-[55%]"
                />
                <Image
                  src="/images/Img8.png" // Replace with your image path
                  alt="Analysis of Blog component"
                  width={713} // Set the width
                  height={900} // Set the height
                  className="nextImg w-[45%]"
                />
              </div>
              <section className="containerBody">
                <Image
                  src="/images/Img9.png"
                  alt="Comparison of legacy Value proposition and refined value proposition"
                  width={1608} // Set the width
                  height={900} // Set the height
                  className="nextImg w-[100%]"
                />
              </section>
              <div className="xl:w-[30%] lg:w-[60%] w-[100%]">
                <p>
                  Inspired by other popular AI agents (ChatGPT, Perplexity,
                  Claude ect..) I developed a new concise, clean and
                  minimalistic interface.
                </p>
              </div>
            </section>
          </section>

          {/* Part 2 */}
          <section className="lg:mt-[10vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
            <div id="Innota-Goal2" className="h-0"></div>
            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                header="Goal #2"
                body="Fixing the Onboarding Journey"
                para="Users needed to complete the onboarding sign up process in order to gain access to the web app. Insights from the UXR campaign indicated that we lost 80% of the users during sign up."
              />
            </section>

            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <Image
                src="/images/Img10.png"
                alt="Visualization of where users are lost"
                width={1608} // Set the width
                height={900} // Set the height
                className="w-[100%] nextImg"
              />
            </section>

            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                body="The previous webpage didn’t showcase the product — users had no idea what they were signing up for — leading to distrust before even making it to the web app."
                body2="My solution: I brought the product to the user."
              />
            </section>

            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm flex xl:flex-row lg:flex-row flex-col xl:gap-[2%] lg:gap-[2%] gap-[20px] min-h-[50vh]">
              <div className="xl:w-[80%] lg:w-[80%] w-[100%] xl:h-auto lg:h-auto h-[50vh]">
                <Video
                  placeholder={
                    "https://www.youtube.com/embed/K_SK4KghuUU?si=7qleFwhHEnKWct_2&autoplay=1&mute=1&loop=1&playlist=K_SK4KghuUU&modestbranding=1&rel=0&fs=1"
                  }
                  brightness={"100%"}
                />
              </div>
              <div className="lg:w-[21%] xl:w-[21%] w-fill h-fit">
                <p>
                  I added a live demo on the landing page to highlight its
                  functions upfront. This gave users a much better understanding
                  of the web app, reducing distrust.
                </p>
              </div>
            </section>

            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <TextBox
                body="The highest point of friction in the onboarding process was the email confirmation. Users assumed the unbranded emails from Innota were scams."
                body2="I designed and coded custom emails to foster credibility and product authenticity."
              />
            </section>

            <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
              <div className="flex flex-col gap-[20px]">
                <Image
                  src="/images/Img11.png"
                  alt="Comparison of old email templates to the new one"
                  width={1608} // Set the width
                  height={900} // Set the height
                  className="w-[100%] nextImg"
                />
                <Image
                  src="/images/Img12.png"
                  alt="The new improved user journey"
                  width={1608} // Set the width
                  height={900} // Set the height
                  className="w-[100%] nextImg"
                />
              </div>
            </section>

            {/* Part 3 */}

            {/* Part 2 */}
            <section className="lg:mt-[10vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
              <div id="Innota-Handoff" className="h-0"></div>
              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <TextBox
                  header="The Handoff"
                  body="As the only designer, I had to make sure that my work could be scaled & integrated seamlessly by a team that could barely use Figma."
                  para="One of the early concerns the executives had was about the websites scalability -- how to update it when I left. I handed off a design system so they could build and update existing components easily."
                />
              </section>

              <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <Image
                  src="/images/Img13.png" // Replace with your image path
                  alt="Showcase of the component system"
                  width={580} // Set the width
                  height={900} // Set the height
                  className="w-[35%] nextImg"
                />
                <Image
                  src="/images/Img14.png" // Replace with your image path
                  alt="Breaking down an individual component and its anatomy"
                  width={998} // Set the width
                  height={900} // Set the height
                  className="w-[65%] nextImg"
                />
              </section>

              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
                <TextBox body="Next, I handed a prototype off to the development team to help them map interactions." />
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

                <Image
                  src="/images/proto.png"
                  alt="Prototype video"
                  width={1608} // Set the width
                  height={900} // Set the height
                  className="w-[100%] nextImg"
                />
              </section>

              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm w-fit">
                <TextBox
                  header="The Handoff"
                  body="After 5 weeks, my time with Innota was over. My handoff included:"
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
              </section>

              <section className="container-2-img xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm ">
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
              </section>
            </section>

            <section className="lg:mt-[10vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
              <div id="Innota-Reflection" className="h-0"></div>
              <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm w-fit ">
                <TextBox
                  header="The Reflection"
                  body="Being the sole product designer meant that I had to learn how to make alot of decisions on my own."
                />
                <div className=" flex flex-col gap-[40px] mt-[40px] w-fill max-w-[100%] xl:max-w-[48vw] lg:max-w-[100vw]">
                  <div className="flex flex-col gap-[10px]">
                    <h5 className="text-my-gray">
                      {" "}
                      Importance of data driven insights
                    </h5>
                    <p>
                      Learning to lean on the numbers helped me understand
                      consensus on pain points -- and also justify my designs in
                      weekly standups.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <h5 className="text-my-gray"> Moderating my ideas</h5>
                    <p>
                      Given the teams tiny size, I had to learn how to
                      understand which solutions could realistically be
                      implemented.
                    </p>
                  </div>

                  <div className="flex flex-col gap-[10px]">
                    <h5 className="text-my-gray">
                      {" "}
                      Importance of data driven insights
                    </h5>
                    <p>
                      Learning to lean on the numbers helped me understand
                      consensus on pain points -- and also justify my designs in
                      weekly standups.
                    </p>
                  </div>
                </div>
              </section>
            </section>
            <div className="w-[100%] h-[80vh] mt-[5vh] xl:px-gutter-xl lg:px-gutter-lg md:px-gutter-md px-gutter-sm ">
              <Video
                placeholder={
                  "https://www.youtube.com/embed/Otu-EEEURys?autoplay=1&loop=1&mute=1&modestbranding=1&controls=0&playlist=Otu-EEEURys"
                }
                brightness={"100%"}
              />
            </div>
          </section>
          <Footer place="case" />
        </div>
      </div>
    </div>
  );
}

export default InnotaCase;
