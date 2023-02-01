import React from "react";
import { useRoutes } from "react-router-dom";
import { FullLayout } from "./layouts/Full.layout";

// Guards
import { FULL_ROUTES } from "./shared/routes/Full.routing";

export const App = () => {
  const element = useRoutes([
    {
        path: "/",
        element: <FullLayout />,
        children: FULL_ROUTES
    }
  ]);
  return element;
};

export default App;
