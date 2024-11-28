import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Toastprovider from "./Toastprovider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Toastprovider />
    <App />
  </StrictMode>
);
