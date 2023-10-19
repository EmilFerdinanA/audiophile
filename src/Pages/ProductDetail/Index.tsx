import { Category } from "@/components/Category/Index";
import { Bringing } from "@/components/Bringing/Index";

import { Features } from "./Features/Index";
import { Product } from "./Product/Index";
import { Image } from "./Image/Index";
import { AlsoLike } from "./AlsoLike/Index";

export const ProductDetail = () => {
  return (
    <div>
      <Product />
      <Features />
      <Image />
      <AlsoLike />
      <Category />
      <Bringing />
    </div>
  );
};
