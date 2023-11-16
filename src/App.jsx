import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AfterLogin from "./pages/AfterLogin";
import Profile from "./pages/Profile";
import ArticlesAfterLogin from "./pages/ArticlesAfterLogin";

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='' element={<HomePage />}></Route>
          <Route path='/AfterLogin' element={<AfterLogin />}></Route>
          <Route path='/Profile' element={<Profile />}></Route>
          <Route path='/ArticlesAfterLogin' element={<ArticlesAfterLogin />}></Route>



        </Routes>
      </div>
    </>
  );
}

export default App;
