import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
import ZX9Image from "@/assets/image-speaker-zx9-tablet.png";

export const ZX9 = () => {
  return (
    <section className="bg-primary bg-[url('@/assets/pattern-circles.svg')] bg-cover sm:bg-auto bg-[center_bottom_7.5rem] sm:bg-[center_bottom_4rem] bg-no-repeat flex flex-col gap-6 items-center justify-center px-6 py-14 rounded-lg text-senary">
      <img className="w-1/2 sm:w-1/4" src={ZX9Image} alt="zx9" />
      <span className="text-center text-4xl sm:text-6xl font-bold">
        ZX9 <br />
        SPEAKER
      </span>
      <p className="font-medium opacity-75 text-center sm:mb-4 sm:w-1/2">
        Upgrade to premium speakers that are phenomenally built to deliver truly
        remarkable sound.
      </p>
      <ButtonSeeProduct Background="bg-septenary" />
    </section>
  );
};
