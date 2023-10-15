import { Category } from "@/Pages/Category/Index";
import { Home } from "@/Pages/Home/Index";
import { Root } from "@/Pages/Root";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "category", element: <Category /> },
    ],
  },
]);
