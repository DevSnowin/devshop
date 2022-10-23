import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { useDispatch } from "react-redux";

import {
  createUserDocumentFromAuth,
  onAuthStateChangedListener,
} from "./utils/firebase/firebase.utils";
import { setCurrentUser } from "./store/user/user.action";

import AuthenticationPage from "./pages/AuthenticationPage/AuthenticationPage";
import Header from "./components/Header/Header";
import HomePage from "./pages/HomePage/HomePage";
import ErrorPage from "./pages/ErrorPage/404";
import CheckoutPage from "./pages/CheckoutPage/CheckoutPage";
import ShopPage from "./pages/ShopPage/ShopPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubcribe = onAuthStateChangedListener((user) => {
      // If user exists create a document for that user
      if (user) {
        createUserDocumentFromAuth(user);
      }

      // Set the user
      dispatch(setCurrentUser(user));
    });

    return unsubcribe;
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Routes>
      <Route path="/" element={<Header />}>
        <Route index element={<HomePage />} />
        <Route path="shop/*" element={<ShopPage />} />
        <Route path="/auth" element={<AuthenticationPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Routes>
  );
};

export default App;
