import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import BackgroundTemplate from "./components/BackgroundTemplate";
import SignUp from "./pages/SignUp";

function App() {
  return (
    <>
      <RecoilRoot>
        <BackgroundTemplate />
        <SignUp />
        <Outlet />
      </RecoilRoot>
    </>
  );
}

export default App;
