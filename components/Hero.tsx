import { SeeProductButton } from "./SeeProduct";

export const Hero = () => {
  return (
    <div className="bg-[#191919]">
      {/* Container */}
      <div className="containers background-hero h-[36rem] md:h-[43rem] max-w-[1440px] base-p">
        {/* Content */}
        <div className="containers flex-col text-white text-center gap-4 md:w-96">
          <span className="opacity-50 tracking-[10px] text-sm">
            NEW PRODUCT
          </span>
          <h1 className="text-[2.25rem] md:text-[3.5rem] font-bold leading-[2.5rem] md:leading-[3.5rem]">
            XX99 MARK II HEADPHONES
          </h1>
          <span className="opacity-75 mb-4 md:text-sm p-4 md:p-5">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <SeeProductButton />
        </div>
      </div>
    </div>
  );
};
