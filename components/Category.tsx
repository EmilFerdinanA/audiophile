import { dataCategorySection } from "@/public/data/categorySection";
import { CategoryCard } from "./CategoryCard";

export const Category = () => {
  return (
    <section className="grid grid-cols-3 gap-y-20 md:gap-2.5 lg:gap-8">
      {dataCategorySection.map((e) => (
        <CategoryCard key={e.id} title={e.title} images={e.images} />
      ))}
    </section>
  );
};
