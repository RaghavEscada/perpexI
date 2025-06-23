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
  const logoContainerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const logoBackgroundRef = useRef<HTMLDivElement>(null);
  const digit1Ref = useRef<HTMLDivElement>(null);
  const digit2Ref = useRef<HTMLDivElement>(null);
  const digit3Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Set initial positions
    gsap.set("nav", { y: -150 });
    gsap.set(logoContainerRef.current, { opacity: 0 });
    gsap.set(logoRef.current, { y: 100, scale: 0.7, rotation: -5 });
    gsap.set(logoBackgroundRef.current, { scale: 0, opacity: 0 });

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

    // Add extra numbers to digit3
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

    // Create main timeline for better synchronization
    const tl = gsap.timeline();

    // Counter animations
    animate(digit3Ref.current, 5);
    animate(digit2Ref.current, 6);
    animate(digit1Ref.current, 2, 5);

    // Progress bar animations
    tl.to(".progress-bar", {
      width: "30%",
      duration: 2,
      ease: "power4.inOut",
      delay: 7
    })
    .to(".progress-bar", {
      width: "100%",
      opacity: 0,
      duration: 2,
      delay: 1.5,
      ease: "power3.out"
    })
    
    // Hero images reveal
    .to(".hero-imgs > div", {
      clipPath: "polygon(100% 0%, 0% 0%, 0% 100%, 100% 100%)",
      duration: 1.2,
      ease: "power4.inOut",
      stagger: 0.15,
      delay: 0.5
    }, "-=1")
    
    .to(".hero", {
      scale: 1.3,
      duration: 3,
      ease: "power3.inOut"
    }, "-=2")
    
    // Fade out loading elements smoothly
    .to(".pre-loader", {
      opacity: 0,
      duration: 0.8,
      ease: "power2.inOut"
    }, "-=1.5")
    
    // Logo sequence - much smoother
    .set(logoContainerRef.current, { opacity: 1 })
    .to(logoBackgroundRef.current, {
      scale: 1,
      opacity: 0.1,
      duration: 1.2,
      ease: "power3.out"
    }, "-=0.3")
    
    .to(logoRef.current, {
      y: 0,
      scale: 1,
      rotation: 0,
      duration: 1.5,
      ease: "back.out(1.7)"
    }, "-=1")
    
    // Logo breathing effect
    .to(logoRef.current, {
      scale: 1.05,
      duration: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: 1
    }, "-=0.5")
    
    // Logo exit with style
    .to(logoBackgroundRef.current, {
      scale: 1.5,
      opacity: 0,
      duration: 1,
      ease: "power2.in"
    }, "+=0.5")
    
    .to(logoRef.current, {
      y: -50,
      scale: 0.9,
      opacity: 0,
      rotation: 3,
      duration: 1,
      ease: "power2.in"
    }, "-=0.8")
    
    // Final preloader exit
    .to(preloaderRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      onComplete: () => {
        gsap.set(preloaderRef.current, { display: "none" });
        onComplete();
      }
    }, "-=0.3");

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

    .logo-container {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 4;
      pointer-events: none;
    }

    .logo-background {
      position: absolute;
      width: 80vw;
      height: 80vh;
      background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.02) 50%, transparent 70%);
      border-radius: 50%;
      filter: blur(20px);
    }

    .perpex-logo {
      position: relative;
      width: clamp(250px, 25vw, 400px);
      height: clamp(150px, 15vw, 250px);
      filter: drop-shadow(0 10px 30px rgba(0,0,0,0.3));
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
      box-shadow: 0 0 10px rgba(255,255,255,0.5);
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

      .perpex-logo {
        width: clamp(200px, 30vw, 300px);
        height: clamp(120px, 18vw, 180px);
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

          {/* Enhanced PERPEX Logo with background effect */}
          <div ref={logoContainerRef} className="logo-container">
            <div ref={logoBackgroundRef} className="logo-background"></div>
            <div ref={logoRef} className="perpex-logo">
              <Image
                src="/perpex.webp"
                alt="PERPEX Logo"
                fill
                style={{ objectFit: 'contain' }}
                priority
                sizes="(max-width: 900px) 300px, 400px"
              />
            </div>
          </div>

          <div className="hero-imgs">
            {heroImages.map((src, i) => (
              <div key={i}>
                <Image
                  src={src}
                  alt="hero"
                  fill
                  style={{ objectFit: 'cover' }}
                  priority={i === 0}
                  sizes="100vw"
                />
              </div>
            ))}
          </div>

          <div className="website-content"></div>
        </section>
      </div>
    </>
  );
};

export default Preloader;