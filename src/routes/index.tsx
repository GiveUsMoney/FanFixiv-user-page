import { HomePage, NotFoundPage } from '@src/pages';
import TwitterLoginRedirectionPage from '@src/pages/twitter/login';
import { createBrowserRouter, RouteObject } from 'react-router-dom';

const routes: RouteObject[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
  {
    path: '/twitter/login',
    element: <TwitterLoginRedirectionPage />,
  },
];

export const router = createBrowserRouter(routes, {
  basename: process.env.REACT_APP_PUBLIC_URL,
});
