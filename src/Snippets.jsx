const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/products",
    children: [
      {
        index: true,
        component: <Products />,
      },
      {
        path: ":productId",
        component: <ProductDetails />,
      },
    ],
  },
  {
    path: "/basket",
    element: <Basket />,
  },
  {
    path: "/landingpage",
    element: <LandingPage />,
  },
]);
