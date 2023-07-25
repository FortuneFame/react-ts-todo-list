import { lazy, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';
import App from './App';
import LoaderPage from './pages/LoaderPage';

const Home = lazy(() => import('./pages/Home'));
const Start = lazy(() => import('./pages/Start'));
const Todos = lazy(() => import('./pages/Todos'));
const TaskList = lazy(() => import('./pages/Todos/TaskList'));
const HomeWorkTaskPage = lazy(() => import('./pages/Todos/HomeWorkTaskPage'));
const FreelanceTaskPage = lazy(() => import('./pages/Todos/FreelanceTaskPage'));
const OfficeTaskPage = lazy(() => import('./pages/Todos/OfficeTaskPage'));
const UserList = lazy(() => import('./pages/UserList'));
const UserDetails = lazy(() => import('./pages/UserList/UserDetails'));
const Comments = lazy(() => import('./pages/Reviews'));
const CommentSingle = lazy(() => import('./pages/Reviews/CommentSingle'));
const NotFound = lazy(() => import('./pages/Page404'));

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: 'start',
        element: <Start />,
      },
      {
        path: 'task-list',
        element: <TaskList />,
      },
      {
        path: "todos",
        element: <Todos />,
        children: [
          {
            path: 'home-work',
            element: <HomeWorkTaskPage />,
          },
          {
            path: 'freelance',
            element: <FreelanceTaskPage />,
          },
          {
            path: 'office',
            element: <OfficeTaskPage />,
          },
        ]
      },
      {
        path: "users",
        element: <UserList />,
      },
      {
        path: 'user/:userId',
        element: <UserDetails />,
      },
    
      {
        path: "reviews",
        element: <Comments />,
      },
      {
        path: "reviews/:id",
        element: <CommentSingle />,
      },
      {
        path: "*",
        element: <NotFound />,
      }
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <Suspense fallback={<LoaderPage />}>
      <RouterProvider router={router} />
  </Suspense>
);

