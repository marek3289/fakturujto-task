import { useRoutes, RouteObject } from 'react-router-dom'

import Home from '@/features/misc'

const commonRoutes: RouteObject[] = [{ path: '/', element: <Home /> }]

const routes: RouteObject[] = []

export const AppRoutes = () => {
  return useRoutes([...routes, ...commonRoutes])
}
