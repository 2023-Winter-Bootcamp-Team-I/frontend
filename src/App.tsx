import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import BackgroundTemplate from "./components/BackgroundTemplate";


function App() {

  return (
    <>
      <RecoilRoot>
          <BackgroundTemplate/>
          <Outlet/>
      </RecoilRoot>
    </>
  )
}

export default App
