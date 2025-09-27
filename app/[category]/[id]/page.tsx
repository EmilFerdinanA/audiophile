import { AlsoLike } from "@/components/AlsoLike";
import { Bringing } from "@/components/Bringing";
import { Category } from "@/components/Category";
import { DetailImage } from "@/components/DetailImage";
import { DetailProduct } from "@/components/DetailProduct";
import { Features } from "@/components/Features";
import { dataDetailProduct } from "@/public/data/detailProduct";

interface IProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: IProps) {
  const { id } = await params;
  const data = dataDetailProduct.find((e) => e.id === id)!;

  return (
    <main className="grid max-width base-p mx-auto gap-32 lg:gap-40 pb-32 lg:pb-40 pt-4 md:pt-8 lg:pt-20">
      <button className="text-[15px] opacity-50 lg:-mb-28 place-self-start">
        Go Back
      </button>

      <DetailProduct data={data} />
      <Features />
      <DetailImage />
      <AlsoLike />
      <Category />
      <Bringing />
    </main>
  );
}
