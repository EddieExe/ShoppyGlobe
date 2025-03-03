import React from "react";
import { Provider } from "react-redux";
import store from "./redux/store"; // ✅ Correct import
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/global.css";
import "./styles/Header.css";
import { CartProvider } from "./components/CartContext"; // ✅ Import CartProvider

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}> {/* ✅ Redux Provider wrapping everything */}
      <CartProvider> {/* ✅ Cart context */}
        <App />
      </CartProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
