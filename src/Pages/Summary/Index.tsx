import { SummaryDesktop } from "./Desktop/Summary";
import { SummaryMobile } from "./Mobile/Summary";

export const Summary = () => {
  const isMobile = window.innerWidth <= 1280;
  return <div>{isMobile ? <SummaryMobile /> : <SummaryDesktop />}</div>;
};
