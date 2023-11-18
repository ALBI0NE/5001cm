import { Route, Routes } from "react-router-dom";
import PermissionChecker from "./components/PermissionChecker";
import HomePage from "./pages/HomePage";
import Portal from "./pages/Portal";
import Profile from "./pages/Profile";
import ArticlesAfterLogin from "./pages/ArticlesAfterLogin";
import Classes from "./pages/Classes";
import Games from "./pages/Games";
import Assignments from "./pages/Assignments";
import AdminPortals from "./pages/AdminPortals";
import ListOfUsers from "./pages/ListOfUsers";

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='' element={<HomePage />}></Route>
          <Route path='/Portal' element={<Portal />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route
            path='/ArticlesAfterLogin'
            element={<ArticlesAfterLogin />}
          ></Route>
          <Route path='/classes' element={<Classes />}></Route>
          <Route path='/games' element={<Games />}></Route>
          <Route path='/due' element={<Assignments />}></Route>
          <Route
            path='/adminPortal'
            element={
              <PermissionChecker
                element={AdminPortals}
                allowedRoles={["4", "3"]}
              />
            }
          />
          <Route
            path='/assignUsers'
            element={
              <PermissionChecker
                element={ListOfUsers}
                allowedRoles={["4", "3"]}
              />
            }
          />
        </Routes>
      </div>
    </>
  );
}

export default App;
