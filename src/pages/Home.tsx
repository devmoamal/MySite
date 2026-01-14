import { cn } from "@/lib/utils";
import About from "@/sections/Home/About";
import OpenSourceProjects from "@/sections/Home/OpenSourceProjects";
import SaasProjects from "@/sections/Home/SaasProjects";

type HomeProps = {
  className?: string;
};

function Home({ className }: HomeProps) {
  return (
    <div
      className={cn(
        "relative",
        "overflow-hidden bg-background items-center justify-center",
        "px-[10%] sm:px-[15%] md:px-[20%] lg:px-[25%]",
        className
      )}
    >
      {/* About section */}
      <About />
      {/* SaaS projects section */}
      <SaasProjects />
      {/* Open source projects section */}
      <OpenSourceProjects />
    </div>
  );
}

export default Home;
