import React, { useEffect, useRef, useState } from 'react';

/**
 * AnimatedCounter Component
 * 
 * Smoothly animates a number from 0 to `end` using an ease-out cubic curve
 * when the element scrolls into the viewport (via IntersectionObserver).
 * 
 * Props:
 * - end: number (e.g. 1000, 5500, 5, 100)
 * - duration: duration in ms (default: 2000)
 * - prefix: string (e.g. "$", default: "")
 * - suffix: string (e.g. "+", "%", default: "")
 * - decimals: number of decimals (default: 0)
 * - className: custom Tailwind classes
 */
export default function AnimatedCounter({
  end = 1000,
  duration = 2000,
  prefix = '',
  suffix = '+',
  decimals = 0,
  className = ''
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          startAnimation();
        }
      },
      { threshold: 0.25 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [end, duration]);

  const startAnimation = () => {
    const startTime = performance.now();
    const startVal = 0;
    const endVal = end;

    const animate = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Ease out cubic: fast start, soft deceleration
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = startVal + (endVal - startVal) * easeOut;

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(endVal);
      }
    };

    requestAnimationFrame(animate);
  };

  const formatNumber = (num) => {
    if (decimals > 0) {
      return num.toFixed(decimals);
    }
    return Math.floor(num).toLocaleString();
  };

  return (
    <span ref={elementRef} className={`inline-block tabular-nums ${className}`}>
      {prefix}
      {formatNumber(count)}
      {suffix}
    </span>
  );
}

