
import { RouteObject } from 'react-router-dom';
import Home from '../pages/public/Home/Home';
import Perfume from '../pages/public/Perfume/Perfume';
import Lotion from '../pages/public/Lotion/Lotion';
import Basket from '../pages/public/Basket/Basket';
import Login from '../pages/public/Login/Login';

export const publicRoutes: RouteObject[] = [
  { path: '/', element: <Home /> },
  { path: '/perfume', element: <Perfume /> },
  { path: '/hidratante', element: <Lotion /> },
  { path: '/basket', element: <Basket /> },
  { path: '/login', element: <Login /> },
];
