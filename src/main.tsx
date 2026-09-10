import "./style.css";
import { createRoot } from "react-dom/client";
import { App } from "./App";

createRoot(document.querySelector<HTMLDivElement>("#app")!).render(
  <App />,
);