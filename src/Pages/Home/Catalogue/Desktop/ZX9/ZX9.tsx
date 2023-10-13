import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";
import ZX9Image from "@/assets/image-speaker-zx9-desktop.png";

export const ZX9 = () => {
  return (
    <section className="bg-primary bg-[url('@/assets/pattern-circles.svg')] bg-[top_left_-13rem] 2xl:bg-[top_left_-5.5rem] bg-no-repeat flex gap-8 rounded-lg text-senary pt-36 h-[625px]">
      <div className="w-1/2 flex justify-center items-end">
        <img className="w-[80%] 2xl:w-3/5" src={ZX9Image} alt="zx9" />
      </div>

      <div className="w-1/2 flex flex-col gap-6 px-24">
        <span className="text-6xl font-bold">
          ZX9 <br />
          SPEAKER
        </span>
        <p className="font-medium opacity-75 mb-4 2xl:w-7/12">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <ButtonSeeProduct Background="bg-septenary" />
      </div>
    </section>
  );
};
