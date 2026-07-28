import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "motion/react";

export default function Cursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const [hovered, setHovered] = useState(false);
  const [label, setLabel] = useState<string | null>(null);
  const [visible, setVisible] = useState(false);

  const springConfig = { damping: 22, stiffness: 280 };
  const ringX = useSpring(cursorX, { damping: 18, stiffness: 140 });
  const ringY = useSpring(cursorY, { damping: 18, stiffness: 140 });

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced || window.innerWidth < 1024) return;

    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
      if (!visible) setVisible(true);
    };

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const el = target.closest("[data-cursor]") as HTMLElement | null;
      if (el) {
        setHovered(true);
        setLabel(el.dataset.cursor || null);
      } else if (
        target.closest("a, button, [role='button'], .cursor-pointer") ||
        getComputedStyle(target).cursor === "pointer"
      ) {
        setHovered(true);
        setLabel(null);
      } else {
        setHovered(false);
        setLabel(null);
      }
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mouseover", handleOver);
    document.documentElement.style.cursor = "none";

    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseover", handleOver);
      document.documentElement.style.cursor = "";
    };
  }, []);

  if (typeof window !== "undefined" && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Dot */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-difference"
        style={{ x: cursorX, y: cursorY, translateX: "-50%", translateY: "-50%" }}
      >
        <div className="w-2 h-2 rounded-full bg-[#1565c0]" />
      </motion.div>
      {/* Ring */}
      <motion.div
        className="pointer-events-none fixed top-0 left-0 z-[9998]"
        style={{ x: ringX, y: ringY, translateX: "-50%", translateY: "-50%" }}
        animate={{
          width: hovered ? 56 : 32,
          height: hovered ? 56 : 32,
          opacity: visible ? 1 : 0,
        }}
        transition={{ type: "spring", damping: 20, stiffness: 260 }}
      >
        <div
          className="w-full h-full rounded-full border border-[#1565c0] flex items-center justify-center"
          style={{ backgroundColor: hovered ? "rgba(21,101,192,0.1)" : "transparent" }}
        >
          {label && (
            <span className="text-[9px] font-bold tracking-widest text-[#1565c0] select-none">
              {label}
            </span>
          )}
        </div>
      </motion.div>
    </>
  );
}
