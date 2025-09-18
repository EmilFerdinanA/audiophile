interface IProps {
  labelHero: string;
}

export const Hero2 = ({ labelHero }: IProps) => {
  return (
    <section className="bg-[#191919] containers text-white h-28 md:h-60">
      <h1 className="text-[28px] md:text-[40px] font-bold tracking-[2px] uppercase">
        {labelHero}
      </h1>
    </section>
  );
};
