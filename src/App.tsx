import useDarkMode from "./hooks/useDarkMode";
import { cn } from "./lib/utils";
import Home from "@/pages/Home";

function App() {
  const { theme } = useDarkMode();
  return (
    <div className={cn("dark bg-background h-screen", theme)}>
      <Home />
    </div>
  );
}

export default App;
