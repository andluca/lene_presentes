import { RouteObject } from 'react-router-dom';
import { AuthRoute } from './AuthRoute';
import ProductForm from '../pages/private/ProductForm/ProductForm';

export const privateRoutes: RouteObject[] = [
  {
    path: '/produtos/novo',
    element: (
      <AuthRoute>
        <ProductForm />
      </AuthRoute>
    ),
  },
];
