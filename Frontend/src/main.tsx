import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App/App.tsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "./main.css";
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
