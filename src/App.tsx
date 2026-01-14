import Footer from "./components/layout/Footer";
import Navbar from "./components/layout/Navbar";
import useDarkMode from "./hooks/useDarkMode";
import { cn } from "./lib/utils";
import Home from "@/pages/Home";
function App() {
  const { theme } = useDarkMode();

  return (
    <div className={cn(theme)}>
      <Navbar />
      <div className={cn("bg-background h-screen mt-8", theme)}>
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
