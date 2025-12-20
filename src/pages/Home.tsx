import Text from "@/components/common/Text";
import FlickeringGrid from "@/components/FlickeringGrid";
import { cn } from "@/lib/utils";

type HomeProps = {
  className?: string;
};

function Home({ className }: HomeProps) {
  return (
    <div
      className={cn(
        "relative h-screen w-screen overflow-hidden bg-black",
        className
      )}
    >
      <div className="absolute inset-0 z-0 p-3">
        <FlickeringGrid />
      </div>

      <div className="relative z-10 flex h-full w-full items-center justify-center p-4">
        <Text className="text-white text-5xl font-bold tracking-tighter opacity-75">
          s o o o o o o n
        </Text>
      </div>
    </div>
  );
}

export default Home;
