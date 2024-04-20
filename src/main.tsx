import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store.ts";
import { ErrorBoundary } from "./ErrorBoundary.tsx";
import { LinearProgress } from "@mui/material";
import { AuthCallback } from "./auth/AuthCallback";
import { StatefulAuthProvider } from "./auth/StatefulAuthProvider";
import { Profile } from "./features/Profile/Profile";
import { AuthenticatedGuard } from "./auth/AuthenticatedGuard";
import { Protected } from "./features/Protected/Protected";

const Home = lazy(() => import("./features/Home/Home.tsx"));
const Movies = lazy(() => import("./features/Movies/Movies.tsx"));
const Extra = lazy(() => import("./features/Extra/Extra.tsx"));
const About = lazy(() => import("./features/About/About.tsx"));

function AppEntrypoint() {
  return (
    <StatefulAuthProvider>
      <Provider store={store}>
        <ErrorBoundary>
          <App />
        </ErrorBoundary>
      </Provider>
    </StatefulAuthProvider>
  );
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppEntrypoint />,
      children: [
        {
          path: "/",
          element: (
            <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
              <Home />
            </Suspense>
          ),
        },
        {
          path: "movies",
          element: (
            <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
              <Movies />
            </Suspense>
          ),
        },
        {
          path: "extra",
          element: (
            <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
              <Extra />
            </Suspense>
          ),
        },
        {
          path: "about",
          element: (
            <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
              <About />
            </Suspense>
          ),
        },
        {
          path: "profile",
          element: <AuthenticatedGuard component={Profile} />,
        },
        {
          path: "protected",
          element: <AuthenticatedGuard component={Protected} />,
        },
        {
          path: "callback",
          element: <AuthCallback />,
        },
      ],
    },
  ],
  { basename: "/movies-db" }
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
