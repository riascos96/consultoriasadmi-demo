"use client";

import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export function AnimatedLanding({ children }: { children: React.ReactNode }) {
  const root = useRef<HTMLDivElement | null>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: reduce)", () => {
        gsap.set("[data-hero='item'], [data-hero='image'], [data-reveal], [data-animate='nav']", {
          clearProps: "all"
        });
      });

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap
          .timeline({ defaults: { ease: "power3.out", duration: 0.8 } })
          .from("[data-animate='nav']", { y: -24, autoAlpha: 0 })
          .from("[data-hero='item']", { y: 28, autoAlpha: 0, stagger: 0.1 }, "-=0.35")
          .from("[data-hero='image']", { y: 36, scale: 0.96, autoAlpha: 0 }, "-=0.6");

        ScrollTrigger.batch("[data-reveal]", {
          start: "top 88%",
          once: true,
          onEnter: (elements) =>
            gsap.fromTo(
              elements,
              { y: 28, autoAlpha: 0 },
              {
                y: 0,
                autoAlpha: 1,
                duration: 0.7,
                stagger: 0.08,
                ease: "power2.out",
                overwrite: true,
                onComplete: () => gsap.set(elements, { clearProps: "transform,opacity,visibility" })
              }
            )
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return <div ref={root}>{children}</div>;
}
