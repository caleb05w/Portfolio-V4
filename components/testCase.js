"use client";
import React from "react";
import Video from "./video";
import TextBox from "./textBox";
import Image from "next/image";

function TestCase({ stylePlaceholder, caseOpen }) {
  return (
    <div
      className={`w-full bg-black h-fit overflow-hidden absolute z-[20] transition-all `}
      // Apply dynamic animation classes
      //   caseOpen ? "ease-fastEase" : "animate-closeCase"
      style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.
    >
      <div className="flex flex-col gap-my-lg justify-center w-full lg:gap-gap-lg md:gap-gap-md gap-gap-sm">
        <section className="gap-lg">
          <div className="lg:mx-gutter-lg mx-gutter-sm">
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
        <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm">
          <TextBox
            header="The Introduction"
            body="Innota Technology is an educational startup gamifying the way students learn through flashcards and mind maps. As the sole product designer, I was tasked with rebuilding the web identity in preparation for the products official launch."
          ></TextBox>
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

        {/* Part 1 */}
        <section className="lg:mt-[30vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
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
                Inspired by other popular AI agents (ChatGPT, Perplexity, Claude
                ect..) I developed a new concise, clean and minimalistic
                interface.
              </p>
            </div>
          </section>
        </section>

        {/* Part 2 */}
        <section className="lg:mt-[30vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
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

          <section className="containerBody xl:mx-gutter-xl lg:mx-gutter-lg md:mx-gutter-md mx-gutter-sm border-2 border-white flex xl:flex-row lg:flex-row flex-row xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm">
            <div className="w-[80%] h-[50vh] border-2 border-red-800">
              <Video
                placeholder={
                  "https://www.youtube.com/embed/w8R3G3Anpjo?autoplay=1&controls=0&modestbranding=1&rel=0&mute=1&loop=1&playlist=w8R3G3Anpjo"
                }
                brightness={"100%"}
              />
              {/* <div className="w-[20%]">
                <p>
                  I added a live demo on the landing page to highlight its
                  functions upfront. This gave users a much better understanding
                  of the web app, reducing distrust.
                </p>
              </div> */}
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
          <section className="lg:mt-[30vh] flex flex-col xl:gap-gap-xl lg:gap-gap-lg md:gap-gap-md gap-gap-sm ">
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
          </section>
        </section>
      </div>
    </div>
  );
}

export default TestCase;
