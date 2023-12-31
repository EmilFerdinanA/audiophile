interface ButtonSeeProductProps {
  Background?: string;
  Color?: string;
  Border?: boolean;
}

export const ButtonSeeProduct: React.FC<ButtonSeeProductProps> = ({
  Background = "bg-primary",
  Color = "text-senary",
  Border = false,
}) => {
  return (
    <div
      className={`w-40 text-sm h-12 font-bold flex justify-center items-center mt-3 cursor-pointer ${
        Border ? "border border-septenary" : ""
      } ${Background} ${Color}`}
    >
      SEE PRODUCT
    </div>
  );
};
