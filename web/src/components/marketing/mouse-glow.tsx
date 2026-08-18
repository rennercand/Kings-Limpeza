"use client";

import { useEffect, useRef } from "react";

export function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse), (prefers-reduced-motion: reduce)").matches) return;

    let frame = 0;
    const handlePointerMove = (event: PointerEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        if (glowRef.current) {
          glowRef.current.style.transform = `translate3d(${event.clientX}px, ${event.clientY}px, 0)`;
        }
      });
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("pointermove", handlePointerMove);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      data-mouse-glow
      aria-hidden="true"
      className="pointer-events-none fixed -left-[21rem] -top-[21rem] z-20 size-[42rem] rounded-full bg-[radial-gradient(circle,rgba(34,211,238,0.10),rgba(0,168,255,0.035)_36%,transparent_68%)] will-change-transform"
    />
  );
}
