"use client";

import { useState, useEffect } from "react";

type Breakpoint = "sm" | "md" | "lg" | "xl" | "2xl";

interface ScreenSize {
  width: number;
  height: number;
  lessThan: (breakpoint: Breakpoint) => boolean;
  greaterThan: (breakpoint: Breakpoint) => boolean;
}

export function useScreenSize(): ScreenSize {
  const [windowSize, setWindowSize] = useState<{
    width: number;
    height: number;
  }>({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    function handleResize(): void {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const breakpoints: Record<Breakpoint, number> = {
    sm: 640,
    md: 768,
    lg: 1024,
    xl: 1280,
    "2xl": 1536,
  };

  return {
    width: windowSize.width,
    height: windowSize.height,
    lessThan: (breakpoint: Breakpoint) => {
      return windowSize.width < breakpoints[breakpoint];
    },
    greaterThan: (breakpoint: Breakpoint) => {
      return windowSize.width >= breakpoints[breakpoint];
    },
  };
}
