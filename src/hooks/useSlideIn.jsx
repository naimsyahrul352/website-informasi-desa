import { useEffect, useRef, useState } from "react";

export function useSlideIn(direction = "up", delay = 0) {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const base = "transition-all duration-700 ease-out";
  const hidden = {
    up: "opacity-0 translate-y-10",
    down: "opacity-0 -translate-y-10",
    left: "opacity-0 translate-x-10",
    right: "opacity-0 -translate-x-10",
  };

  return {
    ref,
    className: `${base} ${
      show ? "opacity-100 translate-x-0 translate-y-0" : hidden[direction]
    }`,
    style: { transitionDelay: `${delay}ms` },
  };
}
