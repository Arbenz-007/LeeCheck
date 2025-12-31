import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import tailwindCss from "./index.css?inline";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";

const host = document.createElement("div");
host.id = "leet-ext-root";
document.body.appendChild(host);

const shadowRoot = host.attachShadow({ mode: "open" });

const style = document.createElement("style");
style.textContent = tailwindCss;
shadowRoot.appendChild(style);

const mountPoint = document.createElement("div");
shadowRoot.appendChild(mountPoint);

createRoot(mountPoint).render(<Provider store={appStore}>
    <App />
  </Provider>);
