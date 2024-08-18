import { createBrowserRouter, RouteObject } from "react-router-dom";
import Home from "../pages/Home/Home";
import Perfume from "../pages/Perfume/Perfume";
import Lotion from "../pages/Lotion/Lotion";
import Basket from "../pages/Basket/Basket";


const routes: RouteObject[] = [
  {
    path: "/",
    element: <Home />, 
  },
  {
    path: "/perfume",
    element: <Perfume />,
  },
  {
    path: "/lotion",
    element: <Lotion />,
  },
  {
    path: "/basket",
    element: <Basket />,
  }
];

export const router = createBrowserRouter(routes);
