import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DessertProvider from "./contexts/Desserts.tsx";
import Layout from "./components/Layout/index.tsx";
import Home from "./pages/Home/index.tsx";
import DessertDetail from "./pages/DessertDetail/index.tsx";
import "./index.css";
import CategoryProvider from "./contexts/Category.tsx";

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
        element: <DessertDetail />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <CategoryProvider>
    <DessertProvider>
      <RouterProvider router={router} />
    </DessertProvider>
  </CategoryProvider>
);
