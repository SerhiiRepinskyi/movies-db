import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Movies from "./features/Movies/Movies.tsx";
import About from "./features/About/About.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";
import Home from "./features/Home/Home.tsx";

function AppEntrypoint() {
  return (
    <Provider store={store}>
      <App />
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
          element: <Home />,
        },
        {
          path: "movies",
          element: <Movies />,
        },
        {
          path: "about",
          element: <About />,
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
