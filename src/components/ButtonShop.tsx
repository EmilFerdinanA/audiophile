import arrowRight from "@/assets/arrow-rigth.svg";

export const ButtonShop = () => {
  return (
    <div className="flex items-center gap-3 cursor-pointer group">
      <span className="text-sm opacity-50 font-bold group-hover:text-primary group-hover:opacity-100">
        SHOP
      </span>
      <img src={arrowRight} alt="arrow-right" />
    </div>
  );
};
