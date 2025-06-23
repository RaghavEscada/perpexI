import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";

const heroImages = [
  "/s3.webp",
  "/s4.webp", 
  "/s7.webp",
  "/s10.webp",

 
];

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader: React.FC<PreloaderProps> = ({ onComplete }) => {
  const preloaderRef = useRef<HTMLDivElement>(null);
  const digit1Ref = useRef<HTMLDivElement>(null);
  const digit2Ref = useRef<HTMLDivElement>(null);
  const digit3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial nav position (matching HTML version)
    gsap.set("nav", { y: -150 });

    // Split header text into spans
    function splitTextIntoSpans(selector: string) {
      const element = document.querySelector(selector);
      if (element) {
        const text = element.textContent || "";
        element.innerHTML = text
          .split("")
          .map((char) => `<span>${char}</span>`)
          .join("");
      }
    }

    splitTextIntoSpans(".header h1");

    // Add extra numbers to digit3 (exactly like HTML version)
    if (digit3Ref.current) {
      for (let i = 0; i < 2; i++) {
        for (let j = 0; j < 10; j++) {
          const div = document.createElement("div");
          div.className = "num";
          div.textContent = String(j);
          digit3Ref.current.appendChild(div);
        }
      }
      const finalDigit = document.createElement("div");
      finalDigit.className = "num";
      finalDigit.textContent = "0";
      digit3Ref.current.appendChild(finalDigit);
    }

    function animate(digit: HTMLDivElement | null, duration: number, delay = 1) {
      if (!digit) return;
      const num = digit.querySelector<HTMLElement>(".num");
      if (!num) return;
      const numHeight = num.clientHeight;
      const totalDistance = (digit.querySelectorAll(".num").length - 1) * numHeight;
      gsap.to(digit, {
        y: -totalDistance,
        duration,
        delay,
        ease: "power2.inOut"
      });
    }

    // Animation sequence (exactly matching HTML version)
    animate(digit3Ref.current, 5);
    animate(digit2Ref.current, 6);
    animate(digit1Ref.current, 2, 5);

    gsap.to(".progress-bar", {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7
    });

    gsap.to(".progress-bar", {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 8.5,
      ease: "power3.out",
      onComplete: () => {
        gsap.set(".pre-loader", { display: "none" });
        onComplete();
      }
    });

    gsap.to(".hero-imgs > div", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1,
      ease: "power4.inOut",
      stagger: 0.25,
      delay: 9
    });

    gsap.to(".hero", {
      scale: 1.3,
      duration: 3,
      ease: "power3.inOut",
      delay: 9
    });

    // End preloader right after image flip animation completes
    gsap.to(preloaderRef.current, {
      opacity: 0,
      duration: 0.5,
      delay: 10.5, // After image flip completes (9 + 1 + 0.25*4 stagger)
      ease: "power2.out",
      onComplete: () => {
        gsap.set(preloaderRef.current, { display: "none" });
        onComplete();
      }
    });
  }, [onComplete]);

  const styles = `
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html, body {
      width: 100vw;
      height: 100vh;
      overflow: hidden;
      background: #04349ce0;
    }

    .hero {
      width: 100vw;
      height: 100vh;
      padding: 3em;
    }

    .pre-loader {
      width: 200%;
      height: 100%;
      padding: 2em;
      position: fixed;
      top: 0;
      right: 0;
      display: flex;
      justify-content: flex-end;
      align-items: flex-end;
      gap: 0.5em;
      overflow: hidden;
      z-index: 2;
    }

    .pre-loader p {
      width: max-content;
      text-transform: uppercase;
      font-family: "Timmons NY", sans-serif;
      font-size: 60px;
      line-height: 60px;
      color: #fff;
    }

    .counter,
    .counter .num,
    .counter .digit-4 {
      color: #fff;
    }

    .counter {
      height: 100px;
      display: flex;
      font-family: "Timmons NY", sans-serif;
      font-size: 100px;
      font-weight: 400;
      line-height: 150px;
      clip-path: polygon(0 0, 100% 0, 100% 100px, 0 100px);
    }

    .digit-1,
    .digit-2,
    .digit-3,
    .digit-4 {
      position: relative;
      top: -15px;
    }

    .offset {
      position: relative;
      right: -7.5px;
    }

    .progress-bar {
      position: relative;
      top: -15px;
      width: 0%;
      height: 4px;
      background: #ffffff;
    }

    .hero-imgs {
      position: relative;
      width: 100%;
      height: 100%;
      overflow: hidden;
      z-index: 0;
    }

    .hero-imgs > div {
      position: absolute;
      width: 100%;
      height: 100%;
      clip-path: polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%);
    }

    .website-content {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
    }

    nav {
      position: fixed;
      top: 0;
      width: 100%;
      display: flex;
      padding: 2em;
    }

    nav > div {
      flex: 1;
      font-family: "Timmons NY", sans-serif;
      font-size: 36px;
      font-weight: lighter;
      color: #ebdc0b;
      text-transform: uppercase;
    }

    .site-info {
      text-align: center;
    }

    .menu {
      text-align: right;
    }

    .header {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    h1 {
      text-transform: uppercase;
      font-family: "PP Neue World", sans-serif;
      font-size: 20vw;
      font-weight: 200;
      color: #ebdc0b;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
    }

    h1 span {
      position: relative;
      top: 400px;
    }

    @media (max-width: 900px) {
      .pre-loader {
        padding: 1em;
        gap: 0.5em;
      }

      .counter {
        font-size: 70px;
      }

      .pre-loader p {
        font-size: 40px;
        line-height: 64px;
      }

      .offset {
        position: relative;
        right: -5px;
      }
    }
  `;

  return (
    <>
      <style>{styles}</style>
      <div ref={preloaderRef} style={{ position: "fixed", inset: 0, zIndex: 10000, background: "#04349ce0" }}>
        <section className="hero">
          <div className="pre-loader">
            <p>Loading</p>
            <div className="counter">
              <div className="digit-1" ref={digit1Ref}>
                <div className="num">0</div>
                <div className="num offset">1</div>
              </div>
              <div className="digit-2" ref={digit2Ref}>
                <div className="num">0</div>
                <div className="num offset">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
                <div className="num">6</div>
                <div className="num">7</div>
                <div className="num">8</div>
                <div className="num">9</div>
                <div className="num">0</div>
              </div>
              <div className="digit-3" ref={digit3Ref}>
                <div className="num">0</div>
                <div className="num">1</div>
                <div className="num">2</div>
                <div className="num">3</div>
                <div className="num">4</div>
                <div className="num">5</div>
                <div className="num">6</div>
                <div className="num">7</div>
                <div className="num">8</div>
                <div className="num">9</div>
              </div>
              <div className="digit-4">%</div>
            </div>
            <div className="progress-bar" />
          </div>

          <div className="hero-imgs">
            {heroImages.map((src, i) => (
              <div key={i}>
                <Image
                  src={src}
                  alt="hero"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={i === 0} // Prioritize loading the first image
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <div className="website-content">
           

           
          </div>
        </section>
      </div>
    </>
  );
};

export default Preloader;