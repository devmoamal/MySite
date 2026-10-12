import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import useDarkMode from "@/hooks/useDarkMode";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { theme } = useDarkMode();

  return (
    <div className={`min-h-screen flex flex-col bg-background text-foreground antialiased ${theme}`}>
      <Navbar />
      <main className="flex-1 max-w-[760px] w-full mx-auto px-4 sm:px-6 pt-4 sm:pt-6">
        <Outlet />
      </main>
    </div>
  );
}
