"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  /** threshold 0–1: how much of element must be visible before animating */
  threshold?: number;
}

/**
 * SEO-safe scroll reveal: content is fully visible in server-rendered HTML.
 * After hydration, the element becomes invisible and animates in when it
 * enters the viewport. Google's crawler sees all content in the initial HTML.
 */
export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.12,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // Respect user's motion preferences
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Apply initial hidden state only after JS hydrates (not server-side)
    el.style.opacity = "0";
    el.style.transform = "translateY(1.5rem)";
    el.style.transition = `opacity 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms, transform 0.75s cubic-bezier(0.16,1,0.3,1) ${delay}ms`;

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translateY(0)";
          obs.disconnect();
        }
      },
      { threshold },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [delay, threshold]);

  return (
    <div ref={ref} className={cn(className)}>
      {children}
    </div>
  );
}
