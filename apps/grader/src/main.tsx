import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// eslint-disable-next-line import/no-unresolved
import "virtual:uno.css";
import { routeTree } from "./routeTree.gen";

const router = createRouter({
  basepath: "/grader",
  routeTree,
  context: {
    auth: undefined!
  }
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const rootElement = document.getElementById("root")!;
if (!rootElement.innerHTML) {
  const root = createRoot(rootElement);
  root.render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}