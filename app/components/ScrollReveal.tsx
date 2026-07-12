"use client";

import { useEffect } from "react";

const revealSelector = [
  ".section-heading > *",
  ".expertise-ribbon-inner > div",
  ".client-proof-intro",
  ".portfolio-logo-marquee",
  ".project-option",
  ".case-study",
  ".project-filter-bar",
  ".website-card",
  ".project-empty-state",
  ".mid-cta",
  ".process-card",
  ".quality-bar",
  ".capability",
  ".testimonial-template",
  ".profile-card",
  ".inquiry-form",
  ".contact-panel",
  ".footer-main > *",
].join(",");

const featureSelector = ".case-study, .mid-cta, .contact-panel";

export default function ScrollReveal() {
  useEffect(() => {
    const root = document.documentElement;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const elements = Array.from(document.querySelectorAll<HTMLElement>(revealSelector));
    const siblingIndex = new Map<Element, number>();

    elements.forEach((element) => {
      const parent = element.parentElement;
      const index = parent ? siblingIndex.get(parent) ?? 0 : 0;

      element.classList.add("scroll-reveal");
      element.style.setProperty("--reveal-delay", `${Math.min(index, 4) * 75}ms`);

      if (element.matches(featureSelector)) {
        element.classList.add("scroll-reveal-feature");
      }

      if (parent) siblingIndex.set(parent, index + 1);
    });

    if (reducedMotion.matches || !("IntersectionObserver" in window)) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    let observer: IntersectionObserver | null = null;
    const frame = window.requestAnimationFrame(() => {
      root.classList.add("scroll-reveal-ready");

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add("is-visible");
            observer?.unobserve(entry.target);
          });
        },
        {
          threshold: 0.12,
          rootMargin: "0px 0px -8% 0px",
        },
      );

      elements.forEach((element) => observer?.observe(element));
    });

    return () => {
      window.cancelAnimationFrame(frame);
      observer?.disconnect();
      root.classList.remove("scroll-reveal-ready");
    };
  }, []);

  return null;
}
