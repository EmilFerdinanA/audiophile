import { createBrowserRouter } from "react-router-dom";

import { CategoryPage } from "@/Pages/Category/Index";
import { HomePage } from "@/Pages/Home/Index";
import { Root } from "@/Pages/Root";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ":category", element: <CategoryPage /> },
    ],
  },
]);
