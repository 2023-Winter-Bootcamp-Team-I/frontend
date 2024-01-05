import { Outlet } from "react-router-dom";
import { RecoilRoot } from "recoil";
import BackgroundTemplate from "./components/BackgroundTemplate";
import CreateInfoPage from "./pages/CreateInfoPage";
function App() {
  return (
    <>
      <RecoilRoot>
        <BackgroundTemplate />
        <CreateInfoPage />
        <Outlet />
      </RecoilRoot>
    </>
  );
}

export default App;
