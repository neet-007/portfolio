import { useEffect, RefObject } from "react";

export function useFadeIn(ref: RefObject<HTMLElement>): void {
  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries, observer_) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }
          entry.target.setAttribute("data-appear", "true");
          observer_.unobserve(entry.target);
        });
      },
      {
        threshold: 0.60,
      }
    );

    const children = ref.current.children;
    for (let i = 0; i < children.length; i++) {
      observer.observe(children[i] as HTMLElement);
    }

    return () => {
      for (let i = 0; i < children.length; i++) {
        observer.unobserve(children[i] as HTMLElement);
      }
    }
  }, [ref]);
}
