import React from "react";

function TextBox({ header, body, body2, para }) {
  return (
    <div className="w-fill max-w-[100%] xl:max-w-[48vw] lg:max-w-[100vw]">
      <div className="flex flex-col gap-[1rem] lg:gap-[2rem]">
        {header ? (
          <h5 className="text-my-gray">{header}</h5>
        ) : (
          <h5 className="hidden h-0"></h5>
        )}
        <h2>{body}</h2>
        {body2 ? <h2> {body2} </h2> : <h2 className="hidden h-0"></h2>}

        {para ? <p> {para} </p> : <p className="hidden h-0"></p>}
    </div>
    </div>
  );
}

export default TextBox;
