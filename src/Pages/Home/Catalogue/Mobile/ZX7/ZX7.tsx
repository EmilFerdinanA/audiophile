import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const ZX7 = () => {
  return (
    <div className="bg-[url('@/assets/image-speaker-zx7-mobile.jpg')] sm:bg-[url('@/assets/image-speaker-zx7-tablet.jpg')] bg-cover bg-right flex flex-col gap-8 justify-center px-6 sm:px-16 rounded-lg h-52 sm:h-80">
      <span className="text-3xl font-bold">ZX7 SPEAKER</span>
      <ButtonSeeProduct Background="bg-none" Border={true} Color="text-black" />
    </div>
  );
};
