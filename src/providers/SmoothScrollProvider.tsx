/**
 * SmoothScrollProvider.tsx
 * ─────────────────────────────────────────────────────────────────────────────
 * Wraps the entire app with Lenis smooth scrolling (Lenis v2, React 18 safe).
 *
 * Bugs fixed vs previous version:
 *  1. Context was always null — useRef value is captured at render time,
 *     before useEffect runs. Now uses useState so the context updates with
 *     the real Lenis instance after mount.
 *  2. React StrictMode double-invoke safety — cleanup cancels RAF and destroys
 *     the instance before the second mount creates a fresh one.
 *  3. Lenis v2 API alignment — removed deprecated `infinite` / `easing` options.
 * ─────────────────────────────────────────────────────────────────────────────
 */

import Lenis from "lenis";
import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

/* ── Context — typed as Lenis | null ── */
const LenisContext = createContext<Lenis | null>(null);

/**
 * useLenis — access the live Lenis instance from any child component.
 *
 * Example:
 *   const lenis = useLenis();
 *   lenis?.scrollTo("#features-section", { offset: -80, duration: 1.4 });
 */
export const useLenis = (): Lenis | null => useContext(LenisContext);

/* ── Provider props ── */
interface SmoothScrollProviderProps {
  children: ReactNode;
}

/* ─────────────────────────────────────────────────────────────────────────── */
const SmoothScrollProvider = ({ children }: SmoothScrollProviderProps) => {
  /**
   * KEY FIX #1 — use useState instead of useRef.
   * useRef never triggers a re-render, so the context value would always
   * be the initial null. useState forces a re-render once Lenis is ready,
   * giving every consumer the live instance.
   */
  const [lenisInstance, setLenisInstance] = useState<Lenis | null>(null);

  useEffect(() => {
    /**
     * 1. Create the Lenis instance.
     *    Lenis v2 API — duration & smoothWheel are the primary controls.
     *    `easing` and `infinite` were removed from the v2 public API.
     */
    const lenis = new Lenis({
      duration: 1.2,         // scroll animation length in seconds
      smoothWheel: true,     // smooth mouse-wheel / trackpad scrolling
      wheelMultiplier: 1,    // wheel delta multiplier  (1 = natural feel)
      touchMultiplier: 2,    // touch / trackpad multiplier
    });

    /* KEY FIX #1 continued — store in state so context consumers re-render */
    setLenisInstance(lenis);

    /**
     * 2. RequestAnimationFrame loop.
     *    Lenis.raf(time) must be called every frame.
     *    We track the RAF id so we can cancel it precisely on cleanup.
     */
    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    /**
     * 3. Cleanup — runs on unmount AND on React 18 StrictMode's
     *    double-invoke cycle.
     *    KEY FIX #2 — always cancel RAF before destroying so StrictMode's
     *    second mount starts with a completely clean slate.
     */
    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      setLenisInstance(null);
    };
  }, []); // runs once after mount

  /**
   * 4. GSAP ScrollTrigger integration (future-ready — zero changes needed).
   *    After `npm install gsap`, uncomment the block below inside useEffect
   *    right after the RAF loop:
   *
   *    import { ScrollTrigger } from "gsap/ScrollTrigger";
   *    import gsap from "gsap";
   *    gsap.registerPlugin(ScrollTrigger);
   *
   *    lenis.on("scroll", ScrollTrigger.update);
   *    gsap.ticker.add((time) => { lenis.raf(time * 1000); });
   *    gsap.ticker.lagSmoothing(0);
   */

  return (
    /* lenisInstance is null until after mount, then the real instance.
       All consumers re-render once when the value changes from null → Lenis. */
    <LenisContext.Provider value={lenisInstance}>
      {children}
    </LenisContext.Provider>
  );
};

export default SmoothScrollProvider;
