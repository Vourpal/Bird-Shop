import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from "./Layout/error-page";
import RootLayout from "./Layout/RootLayout";
import CartLayout from "./Layout/CartLayout";

// React-Router layout
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route path="pets" />
        <Route path="cages" />
        <Route path="food" />
        <Route path="toys" />
      </Route>
      <Route path="/cart" element={<CartLayout />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// <Route path="dashboard" element={<Dashboard />} />
