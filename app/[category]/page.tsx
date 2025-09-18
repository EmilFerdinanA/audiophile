import { Hero2 } from "@/components/Hero2";

interface IProps {
  params: Promise<{ category: string }>;
}

export default async function Category({ params }: IProps) {
  const labelHero = (await params).category;

  return (
    <>
      <Hero2 labelHero={labelHero} />
    </>
  );
}
