import Lenis from "lenis";

declare global {
  interface Window {
    __LENIS_CONFIG__?: {
      durationDesktop?: number;
      durationTouch?: number;
      smoothTouch?: boolean;
      touchMultiplier?: number;
      wheelMultiplier?: number;
    };
  }
}

const bootLenis = () => {
  const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
  const runtimeConfig = window.__LENIS_CONFIG__ || {};

  const lenis = new Lenis({
    duration: isCoarsePointer
      ? runtimeConfig.durationTouch ?? 1.1
      : runtimeConfig.durationDesktop ?? 1.5,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
    smoothTouch: runtimeConfig.smoothTouch ?? true,
    touchMultiplier: runtimeConfig.touchMultiplier ?? 1,
    wheelMultiplier: runtimeConfig.wheelMultiplier ?? 1.15,
    prevent: (node: HTMLElement) => {
      return !!node?.closest?.("[data-lenis-prevent]");
    },
    autoRaf: false,
  });

  let rafId = 0;
  const raf = (time: number) => {
    lenis.raf(time);
    rafId = requestAnimationFrame(raf);
  };

  const start = () => {
    if (!rafId) rafId = requestAnimationFrame(raf);
  };

  const stop = () => {
    if (rafId) {
      cancelAnimationFrame(rafId);
      rafId = 0;
    }
  };

  document.addEventListener("visibilitychange", () => {
    if (document.hidden) stop();
    else start();
  });

  window.addEventListener("pagehide", stop);
  window.addEventListener("beforeunload", stop);
  start();
};

const isCoarsePointer = window.matchMedia("(pointer: coarse)").matches;
if (isCoarsePointer) {
  const startLenisOnInteraction = () => {
    window.removeEventListener("touchstart", startLenisOnInteraction);
    window.removeEventListener("scroll", startLenisOnInteraction);
    requestAnimationFrame(bootLenis);
  };
  window.addEventListener("touchstart", startLenisOnInteraction, { passive: true, once: true });
  window.addEventListener("scroll", startLenisOnInteraction, { passive: true, once: true });
} else {
  requestAnimationFrame(bootLenis);
}
