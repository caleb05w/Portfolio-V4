"use client";
import React from "react";

function Footer({ place, color }) {
  const copyEmail = () => {
    // Define the email to copy
    const email = "caleb05w@gmail.com";

    // Create a temporary textarea element to copy the email
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);

    // Select and copy the text
    textArea.select();
    document.execCommand("copy");

    // Remove the temporary textarea
    document.body.removeChild(textArea);

    // Show an alert
    window.alert("Email copied to clipboard :D");
  };

  return (
    <div
      className={`relative bottom-[10] pb-[2vh] ${place === "home"
        ? "xl:mx-[7rem] lg:mx-[7rem] mx-[2rem]"
        : place === "about"
          ? "lg:max-w-[60vw] md:max-w-[80vw] max-w-[full] mx-auto mt-[12rem] mb-[2rem]"
          : "xl:px-gutter-xl lg:px-gutter-lg md:px-gutter-md px-gutter-sm"
        }`}
    >
      {color === "black" ? (
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-between text-black gap-[5px]">
          <h3 className='lg:mt-[0] mt-[2rem]'>Designed on Figma, Built on NextJS</h3>
          <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col xl:justify-end lg:justify-end md:justify-end xl:items-end lg:items-end md:items-end items-start text-white xl:w-[50%] lg:w-[50%] w-[100%] gap-[4%]">
            <button onClick={() => copyEmail()}>
              <h3 className="hover:border-b-[1px] border-b-[1px] border-b-white hover:border-b-black text-black">
                Email
              </h3>
            </button>
            <a href="https://www.linkedin.com/in/caleb-wu-/" target="_blank">
              <h3 className="hover:border-b-[1px] border-b-[1px] text-black border-b-white hover:border-b-black">
                Linkedin
              </h3>
            </a>
            <a href="https://github.com/caleb05w" target="_blank">
              <h3 className="hover:border-b-[1px] border-b-[1px] text-black border-b-white hover:border-b-black">
                Github{" "}
              </h3>
            </a>
            <a href="/Caleb_Wu_Resume.pdf" download target="_blank">
              <h3 className="hover:border-b-[1px] border-b-[1px] text-black border-b-white hover:border-b-black">
                Resume{" "}
              </h3>
            </a>
          </div>
        </div>
      ) : (
        <div className="flex xl:flex-row lg:flex-row md:flex-row flex-col-reverse justify-between text-white gap-[5px]">
          <h3 className='lg:mt-[0] mt-[2rem]'>Designed on Figma, Built on NextJS</h3>
          <div className="flex lg:flex-row xl:flex-row md:flex-row flex-col xl:justify-end lg:justify-end md:justify-end xl:items-end lg:items-end md:items-end items-start text-white xl:w-[50%] lg:w-[50%] w-[100%] gap-[4%]">
            <button onClick={() => copyEmail()}>
              <h3 className="hover:border-b-[1px] border-b-[1px] border-b-black hover:border-b-white">
                Email
              </h3>
            </button>
            <a href="https://www.linkedin.com/in/caleb-wu-/" target="_blank">
              <h3 className="hover:border-b-[1px] border-b-[1px] border-b-black hover:border-b-white">
                Linkedin
              </h3>
            </a>
            <a href="https://github.com/caleb05w" target="_blank">
              <h3 className="hover:border-b-[1px] border-b-[1px] border-b-black hover:border-b-white">
                Github{" "}
              </h3>
            </a>
            <a href="/Caleb_Wu_Resume.pdf" download target="_blank">
              <h3 className="hover:border-b-[1px] border-b-[1px] border-b-black hover:border-b-white">
                Resume{" "}
              </h3>
            </a>

          </div>
        </div>
      )}
    </div>
  );
}

export default Footer;
