import Image from "next/image";
import { SeeProductButton } from "./SeeProduct";
import ZX9Image from "@/public/assets/home/desktop/image-speaker-zx9.png";

export default function ZX9() {
  return (
    <div className="containers !flex-col mt-32 h-[600px] md:h-[720px] py-14 bg-[#D87D4A] rounded-lg text-white text-center background-zx9">
      <Image src={ZX9Image} alt={"zx9"} className="w-44 md:w-56 mb-10" />

      <div className="containers !flex-col gap-6 px-6 md:px-40">
        <h1 className="font-bold text-4xl md:text-6xl px-13">ZX9 SPEAKER</h1>
        <p className="text-[15px]/6 opacity-75 md:mb-4 md:px-6">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProductButton variant="tertiary" />
      </div>
    </div>
  );
}
