import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import Todos from './pages/Todos/Todos';
import TaskList from './pages/Todos/TaskList/TaskList';
import HomeWorkTaskPage from './pages/Todos/HomeWorkTaskPage/HomeWorkTaskPage';
import FreelanceTaskPage from './pages/Todos/FreelanceTaskPage/FreelanceTaskPage';
import OfficeTaskPage from './pages/Todos/OfficeTaskPage/OfficeTaskPage';

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
          // {
//         path: "/user",
//         element: <UserList />,
//         children: [
//           {
//             path: ':userId/tasks',
//             element: <UserTasks />,
//           },
//           {
//             path: ':userId',
//             element: <UserDetails />,
//           },
        ]
      },
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <RouterProvider router={router} />
);

