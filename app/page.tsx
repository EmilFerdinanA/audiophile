import Category from "@/components/Category";
import { Bringing } from "@/components/Bringing";
import { Hero } from "@/components/Hero";
import YX1 from "@/components/YX1";
import ZX7 from "@/components/ZX7";
import ZX9 from "@/components/ZX9";

export default function Home() {
  return (
    <>
      <Hero />

      <main className="containers !flex-col pt-24 md:pt-36 lg:pt-52">
        <div className="w-full max-w-[1440px] base-p">
          <section className="containers !flex-col md:!flex-row gap-20 md:gap-2.5 lg:gap-8">
            <Category />
            <Category />
            <Category />
          </section>

          <ZX9 />
          <ZX7 />
          <YX1 />
          <Bringing />
        </div>
      </main>
    </>
  );
}
