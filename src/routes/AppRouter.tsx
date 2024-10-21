import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
// layouts
import MainLayout from "@layouts/MainLayout";
// Pages
import AboutAs from "@pages/AboutAs";
import Products from "@pages/Products";
import Error from "@pages/Error";
import Home from "@pages/Home";
import Categories from "@pages/Categories";
import AdminLayout from "@layouts/AdminLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Navigate replace to={"home"} />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/categories",
        element: <Categories />,
      },
      {
        path: "/about-us",
        element: <AboutAs />,
      },
      {
        path: "/products/:prefix",
        element: <Products />,
        loader: ({ params }) => {
          if (
            typeof params.prefix !== "string" ||
            !/^[a-z]+$/i.test(params.prefix)
          ) {
            throw new Response("Bad Request", {
              statusText: "Category not found",
              status: 400,
            });
          }
          return true;
        },
      },
    ],
  },
  {
    path: "/admin",
    element: <AdminLayout />,
    children: [
      {
        index: true,
        element: <Navigate replace to={"ProductsManagement"} />,
      },
      {
        path: "Dashboard",
        element: <Navigate replace to={"Dashboard"} />,
      },
      {
        path: "ProductsManagement",
        children: [
          {
            index: true,
            element: <Navigate replace to={"AllProducts"} />,
          },
          {
            path: "all-products",
            element: <p>All Products</p>,
          },
          {
            path: ":id",
            element: <p>All Products</p>,
          },
        ],
      },
    ],
  },
]);

export default function AppRouter() {
  return <RouterProvider router={router}></RouterProvider>;
}
