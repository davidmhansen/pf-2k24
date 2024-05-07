import Lenis from "@studio-freight/lenis";

export const useSmoothScroll = () => {
  const lenis = new Lenis({
    duration: 1.2,
  });

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);
};
