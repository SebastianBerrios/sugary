import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PageHeader from "./components/PageHeader/index.tsx";
import "./index.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PageHeader />,
    children: [
      {
        path: "categories/:categoryId",
        element: "",
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
