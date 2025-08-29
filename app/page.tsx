import Category from "@/components/Category";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <main className="containers pt-24 md:pt-36 lg:pt-52">
        <section className="containers base-p max-w-[1440px] w-full !flex-col md:!flex-row gap-20 md:gap-2.5 lg:gap-8">
          <Category />
          <Category />
          <Category />
        </section>
      </main>
      <Footer />
    </>
  );
}
