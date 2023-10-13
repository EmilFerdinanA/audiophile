import { ButtonSeeProduct } from "@/components/ButtonSeeProduct";

export const ZX7 = () => {
  return (
    <div className="bg-[url('@/assets/image-speaker-zx7-desktop.jpg')] bg-cover bg-right flex flex-col gap-8 justify-center px-24 rounded-lg h-80">
      <span className="text-3xl font-bold">ZX7 SPEAKER</span>
      <ButtonSeeProduct Background="bg-none" Border={true} Color="text-black" />
    </div>
  );
};
