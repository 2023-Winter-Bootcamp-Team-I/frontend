import BackgroundTemplate from '@/components/BackgroundTemplate';
import CreateInfoPage from '@/pages/CreateInfoPage';
import MainPage from '@/pages/MainPage';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: '/',
    element: <BackgroundTemplate />,
    children: [
      {
        path: '',
        element: <MainPage />,
      },
    ],
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/createinfopage',
    element: <CreateInfoPage />,
  },
  // {
  //     path: "*",
  //     element: <NotfoundPage />,
  // },
]);

export default router;
