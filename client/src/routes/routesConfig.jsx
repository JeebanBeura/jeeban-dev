import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

export const mainRoutes = [
  { path: "/", name: "Home", element: <Home /> },
];

export const fallbackRoute = {
  path: "*",
  element: <NotFound />,
};
