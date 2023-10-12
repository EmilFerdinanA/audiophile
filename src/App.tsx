import { Fragment } from "react";
import { FooterMobile } from "@/components/Footer/Mobile/Footer";
import { Footer } from "@/components/Footer/Desktop/Footer";

const App = () => {
  const isMobile = window.innerWidth <= 1024;
  return <Fragment>{isMobile ? <FooterMobile /> : <Footer />}</Fragment>;
};

export default App;
