import React from "react";

function TextBox({ header, body, body2, para }) {
  return (
    <div className="w-fill max-w-[100%] lg:max-w-[48vw]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem]">
        <h5 className="text-my-gray">{header}</h5>
        <h2>{body}</h2>
        <h2> {body2} </h2>
        <p>{para}</p>
      </div>
    </div>
  );
}

export default TextBox;
