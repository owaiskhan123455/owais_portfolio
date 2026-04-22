// components/ui/CustomCursor.tsx
"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const [hoverType, setHoverType] = useState<"link" | "card" | null>(null);
  const [isClicking, setIsClicking] = useState(false);
  const cursorX = useMotionValue(0);
  const cursorY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 300 };
  const outerX = useSpring(cursorX, springConfig);
  const outerY = useSpring(cursorY, springConfig);
  const innerX = useSpring(cursorX, { damping: 40, stiffness: 500 });
  const innerY = useSpring(cursorY, { damping: 40, stiffness: 500 });
  const rafRef = useRef<number>();

  // Compute scale based on state
  const getOuterScale = () => {
    if (isClicking) return 0.8;
    if (isHovering) return hoverType === "card" ? 2.5 : 1.5;
    return 1;
  };

  const getInnerScale = () => (isClicking ? 1.5 : 1);

  useEffect(() => {
    const checkTouch = () => {
      setIsTouchDevice(
        "ontouchstart" in window ||
          navigator.maxTouchPoints > 0 ||
          (navigator as any).msMaxTouchPoints > 0
      );
    };
    checkTouch();
    window.addEventListener("touchstart", checkTouch);
    return () => window.removeEventListener("touchstart", checkTouch);
  }, []);

  useEffect(() => {
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      cancelAnimationFrame(rafRef.current!);
      rafRef.current = requestAnimationFrame(() => {
        cursorX.set(e.clientX);
        cursorY.set(e.clientY);
      });
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a") ||
        target.closest("button") ||
        target.closest('[role="button"]') ||
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select");

      const isCard = target.closest(".project-card");
      const isLink = target.closest("a, button, [role='button']");

      if (isInteractive) {
        setIsHovering(true);
        if (isCard) setHoverType("card");
        else if (isLink) setHoverType("link");
      } else {
        setIsHovering(false);
        setHoverType(null);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);
    document.addEventListener("mouseover", handleElementHover);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      document.removeEventListener("mouseover", handleElementHover);
      cancelAnimationFrame(rafRef.current!);
    };
  }, [cursorX, cursorY, isTouchDevice]);

  if (isTouchDevice) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full border border-accent"
        style={{
          x: outerX,
          y: outerY,
          width: 40,
          height: 40,
          marginLeft: -20,
          marginTop: -20,
          backgroundColor:
            hoverType === "card"
              ? "rgba(59,130,246,0.1)"
              : isHovering
              ? "rgba(59,130,246,0.2)"
              : "transparent",
        }}
        animate={{
          scale: getOuterScale(),
        }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
      />
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-accent"
        style={{
          x: innerX,
          y: innerY,
          width: 8,
          height: 8,
          marginLeft: -4,
          marginTop: -4,
        }}
        animate={{
          scale: getInnerScale(),
        }}
      />
      {hoverType === "card" && (
        <motion.div
          className="fixed top-0 left-0 pointer-events-none z-[9999] text-white text-xs font-bold uppercase tracking-wider"
          style={{
            x: outerX,
            y: outerY,
            marginLeft: -20,
            marginTop: -20,
          }}
        >
          View
        </motion.div>
      )}
    </>
  );
};

export default CustomCursor;