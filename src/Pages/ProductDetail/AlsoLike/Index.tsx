import { AlsoLikeDesktop } from "./Desktop/AlsoLike";
import { AlsoLikeMobile } from "./Mobile/AlsoLike";

export const AlsoLike = () => {
  const isMobile = window.innerWidth <= 1280;
  return <div>{isMobile ? <AlsoLikeMobile /> : <AlsoLikeDesktop />}</div>;
};
