import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.scss";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import About from "./features/About/About.tsx";
import Movies from "./features/Movies/Movies.tsx";
import { Provider } from "react-redux";
import store from "./store.ts";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <Provider store={store}>
          <App />;
        </Provider>
      ),
      children: [
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
