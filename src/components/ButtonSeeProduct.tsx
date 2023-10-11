import React from "react";

type ButtonSeeProductProps = {
  Class: string;
};

const ButtonSeeProduct: React.FC<ButtonSeeProductProps> = ({ Class }) => {
  return (
    <div
      className={`w-40 h-12 text-senary font-bold bg-primary flex justify-center items-center ${Class}`}
    >
      SEE PRODUCT
    </div>
  );
};

export default ButtonSeeProduct;
