import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home/Home.jsx";
import { Products } from "./pages/Products/Products.jsx";
import { ProductDetails } from "./pages/ProductDetails/ProductDetails.jsx";
import { LandingPage } from "./pages/LandingPage/LandingPage.jsx";
import { RootLayout } from "./pages/RootLayout/RootLayout.jsx";
import { Basket } from "./pages/Basket/Basket.jsx";
import { Favorites } from "./pages/Favorites/Favorites.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/products",
        children: [
          {
            index: true,
            element: <Products />,
          },
          {
            path: ":productId",
            element: <ProductDetails />,
          },
        ],
      },
      {
        path: "/landingpage",
        element: <LandingPage />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
