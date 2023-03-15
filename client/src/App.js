//import react router-router-dom for routing
import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import "./app.scss";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";

const Home = lazy(() => import("./Pages/Home/Home"));
const Product = lazy(() => import("./Pages/Product/Product"));
const Products = lazy(() => import("./Pages/Products/Products"));
const Login = lazy(() => import("./Pages/Login/Login"));
const SignUp = lazy(() => import("./Pages/SignUp/SignUp"));

//create a layout to contain and maintain the flow a website
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Suspense>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/products/:id",
        element: <Products />,
      },
      {
        path: "/product/:id",
        element: <Product />,
      },
    ],
  },
  {
    path: "/login",
    element: (
      <Suspense>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/signup",
    element: (
      <Suspense>
        <SignUp />
      </Suspense>
    ),
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
