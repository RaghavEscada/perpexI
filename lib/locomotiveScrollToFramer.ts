import { useEffect, useRef } from 'react';

interface LocomotiveScrollOptions {
  el: HTMLElement;
  smooth?: boolean;
  multiplier?: number;
  getDirection?: boolean;
  smartphone?: {
    smooth: boolean;
  };
  tablet?: {
    smooth: boolean;
  };
  [key: string]: any;
}

// Updated interface to match v5.0.0-beta.8
interface LocomotiveScrollInstance {
  scroll: { y: number };
  scrollTo: (target: string | HTMLElement, options?: any) => void;
  update: () => void;
  destroy: () => void;
  events: {
    on: (event: string, callback: (args?: any) => void) => void;
    off: (event: string, callback: (args?: any) => void) => void;
  };
}

// This function creates a bridge between Locomotive Scroll and Framer Motion's useScroll
export const useLocomotiveScrollToFramer = (
  containerRef: React.RefObject<HTMLElement>,
  scrollCallbacks: {
    onScroll?: (scrollY: number) => void;
  } = {}
) => {
  const locomotiveScrollRef = useRef<LocomotiveScrollInstance | null>(null);
  // Store the scroll handler so we can remove it on cleanup
  const scrollHandlerRef = useRef<((args: any) => void) | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    let isMounted = true;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;

        if (containerRef.current && isMounted) {
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 1,
            getDirection: true,
          } as any) as unknown as LocomotiveScrollInstance;

          // Set up scroll event listener for v5 API
          if (
            locomotiveScrollRef.current &&
            locomotiveScrollRef.current.events &&
            typeof locomotiveScrollRef.current.events.on === 'function'
          ) {
            const handler = (args: any) => {
              if (scrollCallbacks.onScroll) {
                const scrollY = args?.scroll?.y ?? args?.y ?? 0;
                scrollCallbacks.onScroll(scrollY);
              }
            };
            scrollHandlerRef.current = handler;
            locomotiveScrollRef.current.events.on('scroll', handler);
          }
        }
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      isMounted = false;
      if (
        locomotiveScrollRef.current &&
        locomotiveScrollRef.current.events &&
        typeof locomotiveScrollRef.current.events.off === 'function' &&
        scrollHandlerRef.current
      ) {
        locomotiveScrollRef.current.events.off('scroll', scrollHandlerRef.current);
      }
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
      scrollHandlerRef.current = null;
    };
  }, [containerRef, scrollCallbacks]);

  return locomotiveScrollRef;
}; 