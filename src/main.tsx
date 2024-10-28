import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DessertProvider from "./contexts/Desserts.tsx";
import Layout from "./components/Layout/index.tsx";
import Home from "./pages/Home/index.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "categories/:categoryId",
        element: "",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <DessertProvider>
    <RouterProvider router={router} />
  </DessertProvider>
);
