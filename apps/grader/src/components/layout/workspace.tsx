import { Outlet } from "@tanstack/react-router";
import Header from "@/components/layout/header";

export default function WorkspaceLayout() {
  return (

    <section className="h-screen flex flex-col">
      <Header />
      <main className="flex-auto of-hidden bg-gray-50">
        <Outlet />
      </main>
    </section>
  );
}