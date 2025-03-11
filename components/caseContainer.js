import React from "react";
import Video from "../components/video";

function CaseContainer({ Case, Title, Body1, Body2 }) {
  return (
    <div className="w-full lg:h-[70vh] min-h-[400px] h-[50vh] relative overflow-hidden">
      <div className="w-full h-full object-cover">
        {/* <Image 
              src={Case}
              alt="Case Study"
              width={900}
              height={900}
              className='w-full h-full object-cover brightness-[75%]'
            /> */}
        <div className="w-full h-full min-h-[80vh] object-cover brightness-[75%]">
          <Video placeholder={Case} brightness={"75%"} />
        </div>
      </div>
      <div className="absolute top-0 flex flex-row gap-[20%] w-full pt-[4%] px-[2%] whitespace-nowrap">
        <h5>{Title}</h5>
        <div className="flex flex-col gap-[0px]">
          <h5>{Body1}</h5>
          <h5>{Body2}</h5>
        </div>
      </div>
    </div>
  );
}

export default CaseContainer;
