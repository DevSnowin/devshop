import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { UserProvider } from "./contexts/user.context";

import "./styles/index.scss";
import { ProductsProvider } from "./contexts/products.context";
import { BrowserRouter } from "react-router-dom";
import { CartProvider } from "./contexts/Cart.context";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <ProductsProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </ProductsProvider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
