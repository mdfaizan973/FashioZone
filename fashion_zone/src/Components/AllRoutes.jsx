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
export default function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/mens" element={<Mens />}></Route>
        <Route path="/womens" element={<Womens />}></Route>
        <Route path="/details/:id" element={<ProDetails />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
    </div>
  );
}
