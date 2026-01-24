import { Outlet, createRootRoute } from "@tanstack/react-router";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import useDarkMode from "@/hooks/useDarkMode";
import { cn } from "@/lib/utils";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const { theme } = useDarkMode();

  console.log(location.pathname);

  if (location.pathname.includes("/policy")) {
    return (
      <>
        <Navbar />
        <Outlet />
      </>
    );
  }

  return (
    <>
      <div className={cn(theme)}>
        <Navbar />
        <div className={cn("bg-background h-screen mt-8", theme)}>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>
  );
}
