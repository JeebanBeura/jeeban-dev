import { Routes, Route, BrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import { mainRoutes, fallbackRoute } from "./routesConfig";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          {mainRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.element}
            />
          ))}
        </Route>

        <Route
          path={fallbackRoute.path}
          element={fallbackRoute.element}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
