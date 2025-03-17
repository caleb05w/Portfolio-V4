"use client";
import React from "react";

function Footer({ place }) {
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
      className={`relative bottom-[10] pb-[10vh]
    ${place === "home" ? "mx-[7rem]" : "xl:px-gutter-xl lg:px-gutter-lg md:px-gutter-md px-gutter-sm"}`}
    >
      <div className="flex flex-row justify-between text-white">
        <h3>Designed on Figma, Coded on Cursor</h3>
        <div className="flex flex-row justify-end text-white w-[50%] items-end gap-[2%]">
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
        </div>
      </div>
    </div>
  );
}

export default Footer;
