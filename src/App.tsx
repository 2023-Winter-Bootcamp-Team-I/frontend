import { RouterProvider } from "react-router-dom";
import { RecoilRoot } from "recoil";
import router from './utils/Routes';


function App() {

  return (
    <>
      <RecoilRoot>
          <RouterProvider router={router} />
      </RecoilRoot>
    </>
  )
}

export default App
