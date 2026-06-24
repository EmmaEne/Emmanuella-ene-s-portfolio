"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface LineAccentProps {
  direction?: "horizontal" | "vertical";
  className?: string;
  delay?: number;
  color?: "burgundy" | "gold" | "divider";
}

const colorMap = {
  burgundy: "bg-burgundy",
  gold: "bg-gold",
  divider: "bg-divider",
};

export function LineAccent({
  direction = "horizontal",
  className = "",
  delay = 0,
  color = "burgundy",
}: LineAccentProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  const isHorizontal = direction === "horizontal";

  return (
    <motion.div
      ref={ref}
      className={`${colorMap[color]} ${isHorizontal ? "h-[1px]" : "w-[1px]"} ${className}`}
      initial={{ scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }}
      animate={
        isInView
          ? { scaleX: 1, scaleY: 1 }
          : { scaleX: isHorizontal ? 0 : 1, scaleY: isHorizontal ? 1 : 0 }
      }
      transition={{
        duration: 1.2,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      style={{ transformOrigin: isHorizontal ? "left center" : "top center" }}
    />
  );
}
