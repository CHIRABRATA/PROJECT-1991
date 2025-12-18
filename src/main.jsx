import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";

import MainLayout from "./layout/MainLayout.jsx";

import Landing from "./pages/Landing.jsx";
import Degrees from "./pages/Degrees.jsx";
import Courses from "./pages/Courses.jsx";
import Years from "./pages/Years.jsx";
import Resources from "./pages/Resources.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Instructors from "./pages/Instructors.jsx";
import Feedback from "./pages/Feedback.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/degrees", element: <Degrees /> },
      { path: "/courses", element: <Courses /> },
      { path: "/years", element: <Years /> },
      { path: "/resources", element: <Resources /> },
      { path: "/auth", element: <AuthPage /> },
      { path: "/instructors", element: <Instructors /> },
      { path: "/feedback", element: <Feedback /> }
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
