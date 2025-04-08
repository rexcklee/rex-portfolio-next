"use client";

import { ReactNode, useEffect, useState } from "react";

type MouseTrackerBackgroundProps = {
  children: ReactNode;
  color: string;
  size: string;
};

export default function MouseTrackerBackground({
  children,
  color,
  size,
}: MouseTrackerBackgroundProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollOffset, setScrollOffset] = useState(0); // for re-rendering on scroll

  const handleMouseMove = (e: MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", () => setScrollOffset(window.scrollY));

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", () =>
        setScrollOffset(window.scrollY)
      );
    };
  }, []);

  const backgroundStyle = {
    background: `radial-gradient(circle at ${mousePosition.x}px ${
      mousePosition.y + scrollOffset
    }px, ${color}, transparent ${size})`,
    minHeight: "100vh",
    width: "100%",
    transition: "background 0.1s ease",
  };

  return <div style={backgroundStyle}>{children}</div>;
}
