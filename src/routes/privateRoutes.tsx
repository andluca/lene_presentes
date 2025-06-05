import { RouteObject } from "react-router-dom";
import ProductForm from "../pages/private/ProductForm/ProductForm";

export const privateRoutes: RouteObject[] = [
  {
    path: "/produtos/novo",
    element: <ProductForm />,
  },
];
