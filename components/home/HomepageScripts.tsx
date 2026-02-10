import React, { FC } from "react";
import Script from "dangerous-html/react";

const HomepageScripts: FC = () => {
  return (
    <Script
      html={`<script defer data-name="verdantia-logic">
(function(){
  // Chip interaction for search
  const chips = document.querySelectorAll(".quick-search__chip")
  chips.forEach((chip) => {
    chip.addEventListener("click", () => {
      chips.forEach((c) => c.classList.remove("active"))
      chip.classList.add("active")
    })
  })

  // Simple intersection observer for reveal effects
  const revealElements = document.querySelectorAll(".featured-collections__item, .reserve-cta__step, .product-card")

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = "1"
          entry.target.style.transform = "translateY(0)"
        }
      })
    },
    { threshold: 0.1 }
  )

  revealElements.forEach((el) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(20px)"
    el.style.transition = "all 0.6s ease-out"
    revealObserver.observe(el)
  })

  // Horizontal scroll behavior for rails (mouse wheel support with proper event scope)
  const rails = document.querySelectorAll(".featured-products__rail, .inspiration-preview__rail")
  rails.forEach((rail) => {
    rail.addEventListener("wheel", (e) => {
      // Only handle horizontal scrolling if the carousel has overflow
      const hasHorizontalScroll = rail.scrollWidth > rail.clientWidth
      
      if (!hasHorizontalScroll) return
      
      // Check scroll boundaries
      const isAtStart = rail.scrollLeft === 0
      const isAtEnd = rail.scrollLeft >= rail.scrollWidth - rail.clientWidth
      const isScrollingRight = e.deltaY > 0
      const isScrollingLeft = e.deltaY < 0
      
      // Only prevent default if we can actually scroll in the desired direction
      const canScroll = (isScrollingRight && !isAtEnd) || (isScrollingLeft && !isAtStart)
      
      if (canScroll && e.deltaY !== 0) {
        e.preventDefault()
        rail.scrollLeft += e.deltaY
      }
    }, { passive: false }) // passive: false allows preventDefault
  })
})()
</script>`}
    />
  );
};

export default HomepageScripts;
