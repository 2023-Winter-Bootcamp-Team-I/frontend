import CreateInfoPage from '@/pages/CreateInfoPage';
import App from '@/App';
import MainPage from '@/pages/MainPage';
import SignUp from '@/pages/SignUp';
import { createBrowserRouter } from 'react-router-dom';
import CreateBookPage from '@/pages/CreateBookPage';
import StoryChoiceModal from '@/pages/StoryChoiceModal';

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
        path: 'createinfopage',
        element: <CreateInfoPage />,
      },
      {
        path: 'createbookpage',
        element: <CreateBookPage />,
      },
      {
        path: 'storychoicemodal',
        element: <StoryChoiceModal />,
      },
    ],
  },
  // {
  //     path: "*",
  //     element: <NotfoundPage />,
  // },
]);

export default router;
