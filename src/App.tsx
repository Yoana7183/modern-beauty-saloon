import React from "react";
import { HomePage } from "../src/pages/Home";
import { Cosmetics } from "./pages/Cosmetics";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Hair } from "./pages/Hair";
import { Manicure } from "./pages/Manicure";
import { AboutPage } from "./pages/About";
import { BeautySaloon } from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BeautySaloon />,
    children: [
      {
        path: "/home",
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/cosmetics",
        element: <Cosmetics />,
      },
      {
        path: "/hair",
        element: <Hair />,
      },
      {
        path: "/manicure",
        element: <Manicure />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
