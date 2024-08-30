import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { PropertiesPage } from "./pages/propertiesPage/PropertiesPage";
import "./index.css";
import Master from "./master/Master";
import { HomePage } from "./pages/homepage/HomePage";
import { SubLayout } from "./subLayout/SubLayout";
import { ContactPage } from "./pages/contactUsPage/ContactPage";
import { PropertiesDetailsPage } from "./pages/propertiesDetailsPage/PropertiesDetailsPage";

const router = createBrowserRouter([
  {
    element: <Master />,
    path: "/",
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        element: <SubLayout />,
        children: [
          {
            path: "/properties",
            element: <PropertiesPage />,
          },
          {
            path: "/contact-us",
            element: <ContactPage />,
          },
          {
            path: "/single-property",
            element: <PropertiesDetailsPage />,
          },
        ],
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
  </>
);
