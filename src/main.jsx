import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { ItemsContextProvider } from "./contexts/itemsContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ItemsContextProvider>
      <App />
    </ItemsContextProvider>
  </React.StrictMode>
);
