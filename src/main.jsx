import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App, { loader as AppLoader } from "./App.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorPage from "./routes/ErrorPage.jsx";
import Section3 from "./sections/Section3.jsx";
import Checkout from "./routes/Checkout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    loader: AppLoader,
    children: [
      {
        path: "menu",
        element: <Section3 />,
      },
      {
        path: "checkout",
        element: <Checkout />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
