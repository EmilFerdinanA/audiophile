import { SeeProductButton } from "./SeeProduct";

export const Hero = () => {
  return (
    <div className="bg-[#191919] containers">
      {/* Container */}
      <div className="containers background-hero h-[36rem] md:h-[45rem] max-w-[1440px] base-p w-full lg:!justify-start">
        {/* Content */}
        <div className="containers lg:!items-start flex-col text-white text-center lg:text-left gap-4 md:w-96">
          <span className="opacity-50 tracking-[10px] text-sm md:mb-2">
            NEW PRODUCT
          </span>
          <h1 className="text-[2.25rem] md:text-[3.5rem] font-bold leading-[2.5rem] md:leading-[3.5rem] mb-2">
            XX99 MARK II HEADPHONES
          </h1>
          <span className="opacity-75 mb-4 md:mb-6 md:text-sm px-4 md:px-5 lg:p-0 lg:pr-10">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <SeeProductButton />
        </div>
      </div>
    </div>
  );
};
