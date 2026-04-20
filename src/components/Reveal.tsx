import { useEffect, useRef, useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Animation = "fade-up" | "fade-in" | "slide-in-left" | "slide-in-right" | "scale-in";

interface RevealProps {
  children: ReactNode;
  animation?: Animation;
  delay?: number; // ms
  className?: string;
  threshold?: number;
  once?: boolean;
}

const Reveal = ({
  children,
  animation = "fade-up",
  delay = 0,
  className,
  threshold = 0.15,
  once = true,
}: RevealProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          if (once) observer.unobserve(entry.target);
        } else if (!once) {
          setVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold, once]);

  const animClass = {
    "fade-up": "animate-fade-up",
    "fade-in": "animate-fade-in",
    "slide-in-left": "animate-slide-in-left",
    "slide-in-right": "animate-slide-in-right",
    "scale-in": "animate-scale-in",
  }[animation];

  return (
    <div
      ref={ref}
      className={cn(visible ? animClass : "opacity-0", className)}
      style={visible && delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default Reveal;
