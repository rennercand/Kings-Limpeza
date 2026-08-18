"use client";

import type { ReactNode } from "react";
import { domAnimation, LazyMotion, m, useReducedMotion } from "framer-motion";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const reducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <m.div
        className={className}
        initial={reducedMotion ? false : { y: 12 }}
        whileInView={reducedMotion ? undefined : { y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {children}
      </m.div>
    </LazyMotion>
  );
}
