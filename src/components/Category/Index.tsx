import { CategoryDesktop } from "./Desktop/Category";
import { CategoryMobile } from "./Mobile/Category";

export const Category = () => {
  const isMobile = window.innerWidth <= 1280;
  return (
    <section className="px-6 sm:px-10 xl:px-40 mb-24 xl:mb-48">
      {isMobile ? <CategoryMobile /> : <CategoryDesktop />}
    </section>
  );
};
