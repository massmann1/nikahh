'use client';

import { type CSSProperties, type ReactNode, useEffect, useRef, useState } from 'react';

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
};

export function ScrollReveal({
  children,
  className,
  delay = 0,
  threshold = 0.18,
  rootMargin = '0px 0px -12% 0px'
}: ScrollRevealProps) {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, [rootMargin, threshold]);

  const style = {
    '--reveal-delay': `${delay}ms`
  } as CSSProperties;

  return (
    <div
      ref={ref}
      className={['scroll-reveal', className].filter(Boolean).join(' ')}
      data-visible={visible ? 'true' : 'false'}
      style={style}
    >
      {children}
    </div>
  );
}
