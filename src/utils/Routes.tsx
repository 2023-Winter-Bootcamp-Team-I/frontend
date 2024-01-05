import BackgroundTemplate from "@/components/BackgroundTemplate";
import MainPage from "@/pages/MainPage";
import SignUp from "@/pages/SignUp";
import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BackgroundTemplate />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/signup",
    element: <SignUp />,
  },
]);

export default router;
