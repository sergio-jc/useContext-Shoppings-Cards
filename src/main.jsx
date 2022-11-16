import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ProductsContextProvider } from "./context/ProductsContextProvider";
import { TotalContextProvider } from "./context/TotalContextProvider";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TotalContextProvider>
      <ProductsContextProvider>
        <App />
      </ProductsContextProvider>
    </TotalContextProvider>
  </React.StrictMode>
);
