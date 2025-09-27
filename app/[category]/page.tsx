import { Bringing } from "@/components/Bringing";
import { Category } from "@/components/Category";
import { Hero2 } from "@/components/Hero2";
import Product from "@/components/Product";
import { dataCategory } from "@/public/data/category";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function page({ params }: IProps) {
  const { category } = await params;
  const data = dataCategory.find((e) => e.category === category);

  return (
    <main>
      <Hero2 labelHero={data?.category || ""} />

      <div className="pt-16 md:pt-32 lg:pt-40 pb-32 lg:pb-40">
        <div className="max-width base-p mx-auto grid gap-32">
          <Product data={data?.data ?? []} />
          <Category />
          <Bringing />
        </div>
      </div>
    </main>
  );
}
