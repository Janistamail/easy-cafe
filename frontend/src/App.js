import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LayoutComp from "./components/userComp/layout/LayoutComp";
import HomeDetail from "./components/userComp/homeDetail/HomeDetail";
import EditProduct from "./components/userComp/editDetail/editProduct";
import axios from "axios";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
          <Route path="/:pageCat" element={<HomeDetail />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
      <hr />
    </div>
  );
}

function NoMatch() {
  return (
    <>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </>
  );
}

export default App;
