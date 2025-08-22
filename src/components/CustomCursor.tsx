import React, { useEffect, useRef, useState } from 'react';

const CustomCursor: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;
    let dotX = 0;
    let dotY = 0;
    let animationFrame: number;
    let firstMove = true;
    let lastTime = 0;

    const updateMousePosition = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (firstMove) {
        cursorX = mouseX;
        cursorY = mouseY;
        dotX = mouseX;
        dotY = mouseY;
        setVisible(true);
        if (cursorRef.current) {
          cursorRef.current.style.transform = `translate3d(${cursorX - 9}px, ${cursorY - 9}px, 0)`;
        }
        if (dotRef.current) {
          dotRef.current.style.transform = `translate3d(${dotX - 3.5}px, ${dotY - 3.5}px, 0)`;
        }
        firstMove = false;
      }
    };

    const animate = (now: number) => {
      if (lastTime === 0) {
        lastTime = now;
      }
      const dt = Math.min(48, now - lastTime); // cap large frame gaps
      lastTime = now;

      // Convert per-frame smoothing to time-based smoothing
      const step = 1000 / 60; // 60fps baseline
      const toTimeSmoothing = (smoothingPerFrame: number) => 1 - Math.pow(1 - smoothingPerFrame, dt / step);

      const cursorSmoothing = toTimeSmoothing(0.18); // larger circle follows a bit slower
      const dotSmoothing = toTimeSmoothing(0.30); // small dot is snappier

      cursorX += (mouseX - cursorX) * cursorSmoothing;
      cursorY += (mouseY - cursorY) * cursorSmoothing;
      dotX += (mouseX - dotX) * dotSmoothing;
      dotY += (mouseY - dotY) * dotSmoothing;

      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate3d(${cursorX - 9}px, ${cursorY - 9}px, 0)`;
      }
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${dotX - 3.5}px, ${dotY - 3.5}px, 0)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', updateMousePosition);
    animationFrame = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  if (!visible) return null;

  return (
    <>
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 w-[18px] h-[18px] bg-black rounded-full opacity-90 z-[2147483647] pointer-events-none"
        style={{
          willChange: 'transform',
        }}
      />
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-[7px] h-[7px] bg-green-500 rounded-full z-[2147483647] pointer-events-none"
        style={{
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;