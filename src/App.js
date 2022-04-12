import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import Home from "./pages/HomePage/Home";
import Shop from "./pages/ShopPage/Shop";
import SignIn from "./pages/SignIn/SignIn";
import ErrorPage from "./pages/ErrorPage/404";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />}>
          <Route index element={<Home />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/sign-in' element={<SignIn />} />
          <Route path='*' element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
