import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homePage";

function App() {
  return (
    <>
      <div className='container'>
        <Routes>
          <Route path='' element={<HomePage />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
