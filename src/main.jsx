import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom"; // ✅ Changed from BrowserRouter
import App from "./App.jsx";
import "./index.css"; // Optional: your global styles or Tailwind CSS entry

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
);



// "This was the original configuration file for the Vite React project. However, to support server-side deployment, we've updated the file accordingly."


/* import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import "./index.css"; // Optional: your global styles or Tailwind CSS entry

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
); */
