import { useParams } from "react-router-dom";

export const Hero = () => {
  const param = useParams();
  return (
    <section className="bg-[#1a1a1a] text-senary font-bold text-3xl h-24 sm:h-64 flex justify-center items-center">
      <span className="text-3xl sm:text-5xl font-bold">
        {param.category?.toLocaleUpperCase()}
      </span>
    </section>
  );
};
