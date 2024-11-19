import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import LandingPage from './pages/LandingPage/LandingPage';
import ProblemPage from './pages/ProblemPage/ProblemPage';
import StatementEditorPage from './pages/StatementEditorPage/StatementEditorPage';
import ErrorPage from './pages/ErrorPage/ErrorPage';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <LandingPage />,
      },
      {
        path: '/problems/:id',
        element: <ProblemPage />,
        children: [
          {
            path: 'statements',
            element: <StatementEditorPage />,
          },
        ],
      },
      {
        path: '*', // undefined path
        element: <ErrorPage />,
      },
    ],
  },
]);

export default router;
