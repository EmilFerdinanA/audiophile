import { Bringing } from "@/components/Bringing";
import { Category } from "@/components/Category";
import { Hero } from "@/components/Hero";
import YX1 from "@/components/YX1";
import ZX7 from "@/components/ZX7";
import ZX9 from "@/components/ZX9";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="containers !flex-col pt-24 md:pt-36 lg:pt-52 pb-32 md:pb-24 lg:pb-52">
        <div className="w-full max-w-[1440px] base-p">
          <Category />
          <ZX9 />
          <ZX7 />
          <YX1 />
          <Bringing />
        </div>
      </main>
    </>
  );
}
