import { FC, useEffect } from "react";

const HomepageScripts: FC = () => {
  useEffect(() => {
    let didRun = false;
    let cleanup = () => {};

    const run = () => {
      if (didRun) return;
      didRun = true;

      const chips = Array.from(
        document.querySelectorAll<HTMLElement>(".quick-search__chip"),
      );
      const chipHandlers = chips.map((chip) => {
        const handler = () => {
          chips.forEach((c) => c.classList.remove("active"));
          chip.classList.add("active");
        };
        chip.addEventListener("click", handler);
        return { chip, handler };
      });

      const revealElements = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".featured-collections__item, .reserve-cta__step, .product-card",
        ),
      );

      const revealObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const target = entry.target as HTMLElement;
              target.style.opacity = "1";
              target.style.transform = "translateY(0)";
            }
          });
        },
        { threshold: 0.1 },
      );

      revealElements.forEach((el) => {
        el.style.opacity = "0";
        el.style.transform = "translateY(20px)";
        el.style.transition = "all 0.6s ease-out";
        revealObserver.observe(el);
      });

      const rails = Array.from(
        document.querySelectorAll<HTMLElement>(
          ".featured-products__rail, .inspiration-preview__rail",
        ),
      );
      const railHandlers = rails.map((rail) => {
        const handler: EventListener = (event) => {
          const wheelEvent = event as WheelEvent;
          const hasHorizontalScroll = rail.scrollWidth > rail.clientWidth;
          if (!hasHorizontalScroll) return;

          const isAtStart = rail.scrollLeft === 0;
          const isAtEnd =
            rail.scrollLeft >= rail.scrollWidth - rail.clientWidth;
          const isScrollingRight = wheelEvent.deltaY > 0;
          const isScrollingLeft = wheelEvent.deltaY < 0;
          const canScroll =
            (isScrollingRight && !isAtEnd) || (isScrollingLeft && !isAtStart);

          if (canScroll && wheelEvent.deltaY !== 0) {
            wheelEvent.preventDefault();
            rail.scrollLeft += wheelEvent.deltaY;
          }
        };
        rail.addEventListener("wheel", handler);
        return { rail, handler };
      });

      cleanup = () => {
        chipHandlers.forEach(({ chip, handler }) =>
          chip.removeEventListener("click", handler),
        );
        railHandlers.forEach(({ rail, handler }) =>
          rail.removeEventListener("wheel", handler),
        );
        revealObserver.disconnect();
      };
    };

    const deferId = window.setTimeout(run, 800);

    return () => {
      window.clearTimeout(deferId);
      cleanup();
    };
  }, []);

  return null;
};

export default HomepageScripts;
