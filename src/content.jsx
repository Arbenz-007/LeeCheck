import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";


// 1. Create container
const container = document.createElement("div");
container.id = "leetcode-helper-root";
document.body.appendChild(container);

// 2. Mount React
createRoot(container).render(<App />);
