import React from "react";
import Video from "../components/video";
import Image from "next/image";

function CaseContainer({ Case, Title, Body1, Body2, styles, Img }) {
  return (
    <div className="lg:h-[70vh] min-h-[400px] h-[50vh] relative overflow-hidden w-full">
      <div className="w-full h-full object-cover opacity-[100%]">

        <div className="w-full h-full min-h-[80vh] object-cover">
          {Img ? (
            <Image
              src={Img}
              alt="Case Study"
              width={900}
              height={900}
              className="w-full h-full object-cover brightness-[75%]"
            />
          ) : (
            <Video placeholder={Case} styles={styles} />
          )}
        </div>
      </div>
      <div className="absolute top-0 flex flex-row gap-[16%] w-full pt-[4%] px-[2%] whitespace-nowrap z-[2] opacity-[100%] ">
        <h5 className="text-white">{Title}</h5>
        <div className="flex flex-col gap-[4px]">
          <h5>{Body1}</h5>
          <h5>{Body2}</h5>
        </div>
      </div>
    </div>
  );
}

export default CaseContainer;
