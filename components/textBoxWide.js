import React from "react";

function TextBoxWide({ header, body, body2, para, color }) {
  return (
    <div className="w-fill max-w-[100%] xl:max-w-[60vw] lg:max-w-[50vw]">
      <div className="flex flex-col gap-[1rem] lg:gap-[1rem]">
        {header ? <h5 className="text-black">{header}</h5> : ""}
        {color === "black" ? (
          <h2 className=" text-black">{body}</h2>
        ) : (
          <h2 className="text-white">{body}</h2>
        )}
        {body2 ? <h2> {body2} </h2> : <h2 className="hidden h-0"></h2>}
        {para ? <p> {para} </p> : <p className="hidden h-0"></p>}
      </div>
    </div>
  );
}

export default TextBoxWide;
