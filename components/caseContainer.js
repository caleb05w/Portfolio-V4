import React from "react";
import Video from "../components/video";

function CaseContainer({ Case, Title, Body1, Body2, styles }) {
  return (
    <div className="w-full lg:h-[70vh] min-h-[400px] h-[50vh] relative overflow-hidden">
      <div className="w-full h-full object-cover opacity-[100%]">
        {/* <Image 
              src={Case}
              alt="Case Study"
              width={900}
              height={900}
              className='w-full h-full object-cover brightness-[75%]'
            /> */}
        <div className="w-full h-full min-h-[80vh] object-cover">
          <Video placeholder={Case} styles={styles} />
        </div>
      </div>
      <div className="absolute top-0 flex flex-row gap-[20%] w-full pt-[4%] px-[2%] whitespace-nowrap z-[2] opacity-[100%] ">
        <h5 className="text-white">{Title}</h5>
        <div className="flex flex-col gap-[0px]">
          <h5>{Body1}</h5>
          <h5>{Body2}</h5>
        </div>
      </div>
    </div>
  );
}

export default CaseContainer;
