import { Bringing } from "@/components/Bringing";
import { Category } from "@/components/Category";
import { Hero } from "@/components/Hero";
import YX1 from "@/components/YX1";
import ZX7 from "@/components/ZX7";
import ZX9 from "@/components/ZX9";

export default function Home() {
  return (
    <main>
      <Hero />
      {/* Wrapper */}
      <div className="containers !flex-col pt-24 pb-32 md:pt-36 md:pb-24 lg:py-52">
        {/* Content */}
        <div className="max-width base-p">
          <Category />
          <ZX9 />
          <ZX7 />
          <YX1 />
          <Bringing />
        </div>
      </div>
    </main>
  );
}
