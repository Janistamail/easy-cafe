import "./App.css";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import LayoutComp from "./components/layout/LayoutComp";
import HomeDetail from "./components/userComp/homeDetail/HomeDetail";
// import EditProduct from "./components/userComp/editDetail/editProduct";
import HomeDetailBatender from "./components/batenderComp/homeDetailBatenders/HomeDetailBatender";
import BartenderDetail from "./components/batenderComp/homeDetail/BartenderDetail";
import AuthenContext from "./AuthenContext";
import axios from "axios";
import SuccessDetail from "./components/batenderComp/successDetail/SuccessDetail";
import AddProduct from "./components/adminComp/Product/AddProduct";
import AddCategory from "./components/adminComp/category/AddCategory";
import HomeAdminDetail from "./components/adminComp/HomeAdminDetail/HomeAdminDetail"
import Start from "./components/login/Start";
import CartDetail from "./components/userComp/cartDetail/CartDetail";
import EditProduct from "./components/adminComp/EditProduct/EditProduct";
import EditCategory from "./components/adminComp/EditCategory/EditCategory";
import EditAnyCategory from "./components/adminComp/EditCategory/EditAnyCategory";
import UserProfile from "./components/userComp/profile/UserProfile";
import EditUserCart from "./components/userComp/cartDetail/EditUserCart";

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  return (
    <div>
      <Routes>
        <Route path="/" element={<LayoutComp />}>
        <Route index element={<Start />} />
{/* ------------------------------------Customer----------------------------------- */}
          <Route path="/:pageCat" element={<HomeDetail />} />
          <Route index path="/cart" element={<CartDetail />} />
          <Route path="/editUserCart" element={<EditUserCart />} />
          <Route index path="/userprofile" element={<UserProfile/>} />
{/* ------------------------------------Bartender----------------------------------- */}
          <Route path="/bartender" element={<BartenderDetail />} />
          <Route path="/bartender/success" element={<SuccessDetail />} />
{/* ------------------------------------Admin----------------------------------- */}
          <Route path="/admin/:pageCat" element={<HomeAdminDetail />} />
          <Route path="/admin/addProduct" element={<AddProduct />} />
          <Route path="/admin/editProduct/:ProductId" element={<EditProduct/>} />
          {/* <Route path="/editProduct" element={<EditProduct/>} /> */}
          <Route path="/admin/addCategory" element={<AddCategory />} />
          <Route path="/admin/editCategory" element={<EditCategory />} />
          <Route path="/admin/editAnyCategory/:pageCat" element={<EditAnyCategory/>} />
{/* ------------------------------------NoMatch----------------------------------- */}
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
