import App from '@/App';
import FrontCoverPage from '@/pages/FrontCoverPage';
import MainPage from '@/pages/MainPage';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
      {
        path: 'signup',
        element: <SignUp />,
      },
      {
        path: 'frontcover',
        element: <FrontCoverPage />,
      },
    ],
  },
  // {
  //     path: "*",
  //     element: <NotfoundPage />,
  // },
]);

export default router;
