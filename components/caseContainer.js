import React from "react";
import SimpleVideo from "../components/SimpleVideo";
import LazyImage from "../components/LazyImage";
import LazyContainer from "../components/LazyContainer";

function CaseContainer({ Case, Title, Body1, Body2, styles, Img, priority = false }) {
  return (
    <LazyContainer
      className="lg:h-[70vh] min-h-[400px] h-[50vh] relative overflow-hidden w-full "
      priority={priority}
      rootMargin={priority ? '200px' : '150px'}
      threshold={0.1}
      loadingComponent={
        <div className="w-full h-full bg-gray-900 animate-pulse flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12  border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p className="text-white text-sm opacity-75">Loading {Title}...</p>
          </div>
        </div>
      }
    >
      {Img ? (
        <div className="w-full h-full object-cover opacity-[100%] ">
          <div className="w-full h-full min-h-[80vh] object-cover">
            <LazyImage
              src={Img}
              alt={`${Title} Case Study`}
              width={900}
              height={900}
              className="w-full h-full object-cover brightness-[75%]"
              priority={priority}
              placeholder="blur"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
        </div>
      ) : (
        <SimpleVideo
          placeholder={Case}
          brightness={styles}
          priority={priority}
          title={Title}
        />
      )}
      <div className="absolute top-0 flex flex-row gap-[16%] w-full pt-[4%] px-[5%] lg:px-[2%] whitespace-nowrap z-[2] opacity-[100%] ">
        <h5 className="text-white">{Title}</h5>
        <div className="flex flex-col gap-[4px]">
          <h5>{Body1}</h5>
          <h5>{Body2}</h5>
        </div>
      </div>
    </LazyContainer>
  );
}

export default CaseContainer;
