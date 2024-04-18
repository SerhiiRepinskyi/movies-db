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

const Home = lazy(() => import("./features/Home/Home.tsx"));
const Movies = lazy(() => import("./features/Movies/Movies.tsx"));
const About = lazy(() => import("./features/About/About.tsx"));

function AppEntrypoint() {
  return (
    <Provider store={store}>
      <ErrorBoundary>
        <App />
      </ErrorBoundary>
    </Provider>
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
          path: "about",
          element: (
            <Suspense fallback={<LinearProgress sx={{ mt: 1 }} />}>
              <About />
            </Suspense>
          ),
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

