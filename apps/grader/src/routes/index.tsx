import { createFileRoute } from "@tanstack/react-router";
import { clsx } from "clsx";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main>
      <h1 className={clsx("c-black")}> Grader </h1>
    </main>
  );
}