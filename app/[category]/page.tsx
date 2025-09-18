import { Bringing } from "@/components/Bringing";
import Category from "@/components/Category";
import { Hero2 } from "@/components/Hero2";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function page({ params }: IProps) {
  const labelHero = (await params).category;

  return (
    <main>
      <Hero2 labelHero={labelHero} />

      <div className="containers !flex-col pt-16 md:pt-32 lg:pt-40 pb-32 lg:pb-40">
        <div className="w-full max-w-[1440px] base-p flex flex-col gap-32">
          <section className="containers !flex-col md:!flex-row gap-20 md:gap-2.5 lg:gap-8">
            <Category />
            <Category />
            <Category />
          </section>

          <Bringing />
        </div>
      </div>
    </main>
  );
}
