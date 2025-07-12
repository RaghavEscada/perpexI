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
  // Note: in v5, event handlers are added differently
  events: {
    on: (event: string, callback: (args?: any) => void) => void;
  };
}

// This function creates a bridge between Locomotive Scroll and Framer Motion's useScroll
export const useLocomotiveScrollToFramer = (
  containerRef: React.RefObject<HTMLElement>,
  scrollCallbacks: {
    onScroll?: (scrollY: number) => void;
  } = {}
) => {
  const locomotiveScrollRef = useRef<any>(null);
  
  useEffect(() => {
    if (!containerRef.current) return;

    const initLocomotiveScroll = async () => {
      try {
        // Import LocomotiveScroll
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        if (containerRef.current) {
          // Initialize LocomotiveScroll
          locomotiveScrollRef.current = new LocomotiveScroll({
            el: containerRef.current,
            smooth: true,
            multiplier: 1,
            getDirection: true,
            smartphone: {
              smooth: true
            },
            tablet: {
              smooth: true
            }
          });

          // Add scroll event listener using v5 API
          // In v5, we need to use events.on instead of directly using .on
          if (locomotiveScrollRef.current.scroll) {
            // For v5 beta API
            locomotiveScrollRef.current.scroll.on('scroll', (args: any) => {
              if (scrollCallbacks.onScroll) {
                // Get the scroll position
                const scrollY = args.scroll ? args.scroll.y : args.y;
                scrollCallbacks.onScroll(scrollY);
              }
            });
          } else if (locomotiveScrollRef.current.events) {
            // Alternative v5 API structure
            locomotiveScrollRef.current.events.on('scroll', (args: any) => {
              if (scrollCallbacks.onScroll) {
                // Get the scroll position
                const scrollY = args.scroll ? args.scroll.y : args.y;
                scrollCallbacks.onScroll(scrollY);
              }
            });
          }
        }
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScrollRef.current) {
        locomotiveScrollRef.current.destroy();
        locomotiveScrollRef.current = null;
      }
    };
  }, [containerRef, scrollCallbacks]);

  return locomotiveScrollRef;
}; 