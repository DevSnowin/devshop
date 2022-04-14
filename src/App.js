import React from "react";
import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/ShopPage/Shop";
import ErrorPage from "./pages/ErrorPage/404";
import Authentication from "./pages/AuthenticationPage/Authentication";
import Checkout from "./pages/CheckoutPage/Checkout";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Header />}>
        <Route index element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/auth' element={<Authentication />} />
        <Route path='/checkout' element={<Checkout />} />
        <Route path='*' element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
