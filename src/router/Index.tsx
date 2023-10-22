import { createBrowserRouter } from "react-router-dom";

import { CategoryPage } from "@/Pages/Category/Index";
import { HomePage } from "@/Pages/Home/Index";
import { Root } from "@/Pages/Root";
import { ProductDetail } from "@/Pages/ProductDetail/Index";
import { Checkout } from "@/Pages/Checkout/Index";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: ":category",
        element: <CategoryPage />,
      },
      {
        path: "detail/:product",
        element: <ProductDetail />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);
