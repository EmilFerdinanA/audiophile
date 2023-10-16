import { ContentDesktop } from "./Desktop/Content";
import { ContentMobile } from "./Mobile/Content";

export const Content = () => {
  const isMobile = window.innerWidth <= 1280;
  return <section>{isMobile ? <ContentMobile /> : <ContentDesktop />}</section>;
};
