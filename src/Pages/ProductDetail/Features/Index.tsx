import { FeaturesDesktop } from "./Desktop/Features";
import { FeaturesMobile } from "./Mobile/Features";

export const Features = () => {
  const isMobile = window.innerWidth <= 1280;
  return <div>{isMobile ? <FeaturesMobile /> : <FeaturesDesktop />}</div>;
};
