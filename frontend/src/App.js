import logo from "./logo.svg";
import "./App.css";
import React, { useState,useEffect} from 'react';
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import Product from "./pages/Product";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import { BrowserRouter, Route, Routes , Navigate   , Router} from "react-router-dom";
import Layout from "./components/Layout";
import Success from "./pages/Success";
import { useSelector } from "react-redux";



function App() {

  const user = useSelector((state) => state.user.currentUser);
  console.log(user);

  return (
    <BrowserRouter>
    <Routes>
    <Route>

          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/products/:category" element={<ProductList />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/success" element={<Success />} />

          {/* <Route path="/login">{user ? <Navigate  to="/" /> : <Login />}</Route> */}
          <Route  path="/login" element={ user ? ( <Home /> ) : ( <Login />)} />


          <Route path="/register" element={<Register />} />


 </Route>
 </Routes>
 </BrowserRouter >
  );
}

export default App;
