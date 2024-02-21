import { useRoutes, RouteObject } from 'react-router-dom'

import Home from '@/features/misc'
import { Products, ProductDetails, AddProduct } from '@/features/products'

const commonRoutes: RouteObject[] = [{ path: '/', element: <Home /> }]

const routes: RouteObject[] = [
  { path: '/products', element: <Products /> },
  { path: '/products/:slug', element: <ProductDetails /> },
  { path: '/products/add', element: <AddProduct /> },
  // { path: '/products/:id/edit', element: <EditProductForm /> },
]

export const AppRoutes = () => {
  return useRoutes([...routes, ...commonRoutes])
}
