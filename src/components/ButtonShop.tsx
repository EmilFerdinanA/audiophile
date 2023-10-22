import arrowRight from "@/assets/arrow-rigth.svg";
import { ScroolToTop } from "@/Utils/ScrollToTop";
import { Link } from "react-router-dom";
interface ButtonShopProps {
  to: string;
}

export const ButtonShop: React.FC<ButtonShopProps> = ({ to }) => {
  return (
    <Link
      to={to}
      onClick={ScroolToTop}
      className="flex items-center gap-3 cursor-pointer group"
    >
      <span className="text-sm opacity-50 font-bold group-hover:text-primary group-hover:opacity-100">
        SHOP
      </span>
      <img src={arrowRight} alt="arrow-right" />
    </Link>
  );
};
