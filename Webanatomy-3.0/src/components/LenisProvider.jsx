"use client";
import { useEffect, useState } from 'react';
import { LenisContext } from './LenisContext';
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function LenisProvider({ children }) {
  const [lenis, setLenis] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const newLenis = new Lenis({
      duration: 1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -8 * t)),
      direction: 'vertical',
      gestureDirection: 'vertical',
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    setLenis(newLenis);
    setIsLoading(false);

    // Sync Lenis with GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);
    newLenis.on('scroll', ScrollTrigger.update);

    function update(time) {
      newLenis.raf(time * 1000);
    }

    gsap.ticker.add(update);
    gsap.ticker.lagSmoothing(0);

    return () => {
      newLenis.off('scroll', ScrollTrigger.update);
      gsap.ticker.remove(update);
      newLenis.destroy();
      setLenis(null);
    };
  }, []);

  if (isLoading) {
    return null;
  }

  return (
    <LenisContext.Provider value={lenis}>
      {children}
    </LenisContext.Provider>
  );
}

export default LenisProvider;