import { AlsoLike } from "@/components/AlsoLike";
import { Bringing } from "@/components/Bringing";
import { Category } from "@/components/Category";
import { DetailImage } from "@/components/DetailImage";

interface IProps {
  params: Promise<{ id: string }>;
}

export default async function page({ params }: IProps) {
  const { id } = await params;
  console.log(id);
  return (
    <main className="containers">
      <div className="flex-1 flex gap-32 lg:gap-40 flex-col max-width base-p pb-32 lg:pb-40 pt-4 md:pt-8 lg:pt-20">
        <button className="text-[15px] opacity-50 self-start">Go Back</button>
        <DetailImage />
        <AlsoLike />
        <Category />
        <Bringing />
      </div>
    </main>
  );
}
