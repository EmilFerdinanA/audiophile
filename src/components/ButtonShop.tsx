import arrowRight from "@/assets/arrow-rigth.svg";
import { useNavigate } from "react-router-dom";

interface ButtonShopProps {
  to: string;
}

export const ButtonShop: React.FC<ButtonShopProps> = ({ to }) => {
  const navigate = useNavigate();
  const onCLick = () => {
    window.scrollTo({ top: 0 });
    navigate(to);
  };
  return (
    <button
      onClick={onCLick}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span className="text-sm opacity-50 font-bold group-hover:text-primary group-hover:opacity-100">
        SHOP
      </span>
      <img src={arrowRight} alt="arrow-right" />
    </button>
  );
};
