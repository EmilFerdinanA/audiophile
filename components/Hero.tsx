import { SeeProductButton } from "./SeeProduct";

export const Hero = () => {
  return (
    <div className="bg-[#191919]">
      <div className="containers background-hero h-[40rem] max-w-[1440px] base-p">
        <div className="containers flex-col text-white gap-4">
          <span className="opacity-50 tracking-[10px] text-sm">
            NEW PRODUCT
          </span>
          <h1 className="text-[2.25rem] font-bold leading-[2.5rem]">
            XX99 MARK II HEADPHONES
          </h1>
          <span className="opacity-75 mb-4 text-base p-4">
            Experience natural, lifelike audio and exceptional build quality
            made for the passionate music enthusiast.
          </span>
          <SeeProductButton />
        </div>
      </div>
    </div>
  );
};
