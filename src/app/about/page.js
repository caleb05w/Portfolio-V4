import React from "react";
import Footer from "../../../components/footer";

function page({ stylePlaceholder }) {
  return (
    <div
      className={`w-[63%] bg-black h-fit overflow-hidden absolute z-[20] transition-all`}
      // Apply dynamic animation classes
      //   caseOpen ? "ease-fastEase" : "animate-closeCase"
      style={stylePlaceholder} // Pass dynamic styles for position, scale, etc.\
    >
      <div className="flex flex-col gap-my-lg justify-center w-full lg:gap-gap-lg md:gap-gap-md gap-gap-sm lg:mt-[180px] mt-[60px]">
        <section className="gap-lg">
          <div className="xl:mx-gutter-xl lg:mx-gutter-lg mx-gutter-sm flex flex-col gap-[40px]">
            <h1 className="text-white"> Hey! I'm Caleb.</h1>
            <p>
              I’m a product designer focused on the intersection between design
              and business. With 3x hackathon wins under my belt, I’m proficient
              in both front end & design -- specializing in producing quick
              streamlined interfaces under short periods of time.
            </p>

            {/* footer */}
            <div className="w-full opacity-70">
              <div className="flex flex-row gap-[2rem] text-white">
                <h3>Word</h3>

                <a
                  href="https://www.linkedin.com/in/caleb-wu-/"
                  target="_blank"
                >
                  <h3 className="hover:border-b-[1px] border-b-[1px] border-b-black hover:border-b-white">
                    Linkedin
                  </h3>
                </a>
                <a href="https://github.com/caleb05w" target="_blank">
                  <h3 className="hover:border-b-[1px] border-b-[1px] border-b-black hover:border-b-white">
                    Github{" "}
                  </h3>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default page;
