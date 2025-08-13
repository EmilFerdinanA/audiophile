import { SeeProductButton } from "./SeeProduct";

export const Hero = () => {
  return (
    <div className="containers bg-[#191919]">
      <div className="background-hero h-[39.5rem] max-w-[1440px] w-full">
        <div className="containers lg:!items-start text-white flex-col gap-6 text-center lg:text-justify w-full md:w-[23.688rem]">
          <span className="overlines">NEW PRODUCT</span>
          <h1 className="!text-4xl md:!text-[3.5rem]">
            XX99 MARK II HEADPHONES
          </h1>
          <span className="opacity-75 mb-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <SeeProductButton />
        </div>
      </div>
    </div>
  );
};
