import React from "react";
import { useRoutes } from "react-router-dom";
import { ContentLayout } from "./layouts/Content.layout";
import { FullLayout } from "./layouts/Full.layout";
import { AuthGuard }  from "./shared/guards/AuthGuard";
import { CONTENT_ROUTES } from "./shared/routes/content.routing";

// Guards
import { FULL_ROUTES } from "./shared/routes/Full.routing";
import { PageGuard } from "./shared/guards/PageGuard";

export const App = () => {
  const element = useRoutes([
    // {
    //   path: "/auth/*",
    //   element: <PageGuard element={ContentLayout} />,
    //   children: CONTENT_ROUTES
    // }, 
    {
        path: "/",
        // element: <AuthGuard element={FullLayout} />,
        element: <FullLayout />,
        children: FULL_ROUTES
    }
  ]);
  return element;
};

export default App;
