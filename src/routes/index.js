import { lazy, Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

/* Components */
import Loading from '../components/Loading';

/* Loadable */
const Loadable = (Component) => (props) =>
  (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );

const Home = Loadable(lazy(() => import('../pages/home')));
const About = Loadable(lazy(() => import('../pages/about')));
const Posts = Loadable(lazy(() => import('../pages/posts')));
const NotFound = Loadable(lazy(() => import('../pages/404')));

export default function Router() {
  return useRoutes([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'about',
      element: <About />,
    },
    {
      path: 'posts',
      element: <Posts />,
    },
    {
      path: '404',
      element: <NotFound />,
    },
    { path: '*', element: <Navigate to="/404" /> },
  ]);
}
