import React from "react";

function navigatorCell({ Case, Link }) {
  return (
    <a
      className="px-[14px] bg-bg-white/30 hover:bg-black/10 hover:cursor-pointer w-[100%] rounded-[8px] py-[0.3rem] text-left"
      href={Link}
    >
      <h6 className=" text-black "> {Case} </h6>
    </a>
  );
}

export default navigatorCell;
