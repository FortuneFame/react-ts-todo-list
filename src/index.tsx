import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';

import Home from './pages/Home/Home';
import Start from './pages/Start/Start';
import Todos from './pages/Todos/Todos';

import TaskList from './pages/TaskList/TaskList';


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
        path: '/start',
        element: <Start />,
      },
        {
        path: '/task-list',
        element: <TaskList />,
      },
        {
        path:"/todos",
        element: <Todos />,
      },
      //    {
      //   path: '/add-user',
      //   element: <AddUser />,
      // },
      //    {
      //   path: '/settings',
      //   element: <Settings />,
      // },
      //    {
      //   path: '/about',
      //   element: <About />,
      // },
    ]
  }
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
 <RouterProvider router={router} />
);

