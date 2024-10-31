import { cn } from "@/lib/utils";
import AnimatedGridPattern from "@/components/ui/animated-grid-pattern";

export function AnimatedGridPatternDemo() {
  return (
    <div className="relative flex h-screen w-full items-center justify-center overflow-hidden rounded-lg border bg-background p-20 md:shadow-xl">
  
      <AnimatedGridPattern
        numSquares={200}
        maxOpacity={1}
        width={40}
        height={40}
        duration={1}
        repeatDelay={0.5}
        className={cn(
          "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
          "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12",
        )}
      />
    </div>
  );
}