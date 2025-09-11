import Image from "next/image";
import { SeeProductButton } from "./SeeProduct";
import ZX9Image from "@/public/assets/home/desktop/image-speaker-zx9.png";

export default function ZX9() {
  return (
    <div className="container-zx9 background-zx9 h-zx9 mt-32 py-14 lg:py-0 bg-primary rounded-lg">
      <Image
        src={ZX9Image}
        alt={"zx9"}
        className="w-44 md:w-56 lg:w-96 mb-10 lg:mb-0 lg:left-16 lg:relative"
      />

      <div className="containers !flex-col lg:!items-start gap-6 px-6 md:px-40 lg:px-0 lg:pl-56 lg:h-full lg:w-1/2 text-white text-center lg:text-left">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-5xl px-13 lg:px-0 lg:pr-5">
          ZX9 SPEAKER
        </h1>
        <p className="text-[15px]/6 opacity-75 md:mb-4 md:px-6 lg:px-0">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProductButton variant="tertiary" />
      </div>
    </div>
  );
}
