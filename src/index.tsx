/*

React entrypoint

*/

import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home/home";
import Portal from "./pages/portal/portal";
import "font-awesome/css/font-awesome.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Contribute from "./pages/contribute/contribute";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement,
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/portal",
    element: <Portal />,
  },
  {
    path: "/contribute",
    element: <Contribute />,
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
