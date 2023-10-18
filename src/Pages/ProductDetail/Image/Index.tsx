import { ImageDesktop } from "./Desktop/Image";
import { ImageMobile } from "./Mobile/Image";

export const Image = () => {
  const isMobile = window.innerWidth <= 1280;
  return <div>{isMobile ? <ImageMobile /> : <ImageDesktop />}</div>;
};
