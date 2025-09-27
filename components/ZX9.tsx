import Image from "next/image";
import { SeeProductButton } from "./SeeProduct";
import ZX9Image from "@/public/assets/home/desktop/image-speaker-zx9.png";

export default function ZX9() {
  return (
    <div className="background-zx9 mt-32 py-14 md:py-16 lg:py-0 lg:pt-24 px-6 md:px-44 lg:px-24 rounded-lg grid lg:place-content-end grid-cols-2 gap-8 md:gap-16">
      <div className="col-span-2 lg:col-span-1 justify-self-center lg:justify-self-end">
        <Image src={ZX9Image} alt={"zx9"} className="w-44 md:w-56 lg:w-96" />
      </div>

      <div className="text-white text-center lg:text-left col-span-2 lg:col-span-1 grid place-items-center lg:place-items-start lg:place-content-start gap-6 lg:ml-20">
        <h1 className="font-bold text-4xl md:text-6xl lg:text-5xl leading-10 md:leading-14">
          ZX9
          <br />
          SPEAKER
        </h1>

        <p className="text-[15px]/6 opacity-75 md:mb-4">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>

        <SeeProductButton variant="tertiary" />
      </div>
    </div>
  );
}
