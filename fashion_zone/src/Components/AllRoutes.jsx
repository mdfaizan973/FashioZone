import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./../Pages/Home";
import Mens from "./../Pages/Mens";
import Womens from "./../Pages/Womens";
import ProDetails from "./../Pages/ProDetails";
import Cart from "./../Pages/Cart";
import Checkout from "./../Pages/Checkout";
import SignIn from "./../Pages/SignIn";
import SignUp from "./../Pages/SignUp";
import PageNotFound from "../Pages/PageNotFound";
import Admin from "../Pages/Admin";
import Faizan from "../Pages/Admin/Faizan";
import WebUser from "../Pages/Admin/WebUser";
import TotalPro from "../Pages/Admin/TotalPro";
import EditData from "./../Pages/Admin/EditData";
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/details/:id" element={<ProDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/adminpanel" element={<Admin />}></Route>
        <Route path="/faizan" element={<Faizan />}></Route>
        <Route path="/adminuser" element={<WebUser />}></Route>
        <Route path="/allprod" element={<TotalPro />}></Route>
        <Route path="/edit/:id" element={<EditData />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}
