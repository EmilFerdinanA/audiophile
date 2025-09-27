import { ICategory } from "@/interface/category";
import { ProductCard } from "./ProductCard";

interface IProps {
  data: ICategory[];
}

export default function Product({ data }: IProps) {
  return (
    <section className="grid gap-32 lg:gap-40">
      {data?.map((e, index) => (
        <ProductCard key={e.id} data={e} index={index} />
      ))}
    </section>
  );
}
