import { useRoutes, RouteObject } from 'react-router-dom'

import Home from '@/features/misc'
import Products from '@/features/products'

const commonRoutes: RouteObject[] = [{ path: '/', element: <Home /> }]

const routes: RouteObject[] = [
  { path: '/products', element: <Products /> },
  // { path: '/products/add', element: <AddProductForm /> },
  // { path: '/products/:id/edit', element: <EditProductForm /> },
]

export const AppRoutes = () => {
  return useRoutes([...routes, ...commonRoutes])
}
