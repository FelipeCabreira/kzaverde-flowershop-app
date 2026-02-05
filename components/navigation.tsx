import React, { FC } from 'react'

import Script from 'dangerous-html/react'

const Navigation: FC = () => {
  return (
    <>
      <div className="navigation-container1">
        <nav id="main-navigation" className="navigation-root">
          <div className="navigation-container">
            <a href="/">
              <div
                aria-label="KzaVerde Homepage"
                className="navigation-logo-link"
              >
                <div className="navigation-logo-wrapper">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="navigation-logo-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="3" cx="12" cy="12"></circle>
                      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"></path>
                    </g>
                  </svg>
                  <span className="navigation-brand-name">KzaVerde</span>
                </div>
              </div>
            </a>
            <div className="navigation-desktop-menu">
              <ul className="navigation-links-list">
                <li>
                  <a href="/">
                    <div className="navigation-link">
                      <span>Ínicio</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#catalog">
                    <div className="navigation-link">
                      <span>Produtos</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#store">
                    <div className="navigation-link">
                      <span>Nossa Loja</span>
                    </div>
                  </a>
                </li>
                <li>
                  <a href="/#contact">
                    <div className="navigation-link">
                      <span>Contato</span>
                    </div>
                  </a>
                </li>
              </ul>
              <div className="navigation-actions">
                <a
                  href="https://wa.me/c/555183388338"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <div
                    className="btn btn-sm navigation-whatsapp-btn btn-primary"
                  >
                    <svg
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                      height="20"
                      viewBox="0 0 24 24"
                      className="navigation-btn-icon"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                        <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                      </g>
                    </svg>
                    <span>WhatsApp</span>
                  </div>
                </a>
              </div>
            </div>
            <button
              id="mobile-menu-open"
              aria-label="Open navigation menu"
              aria-expanded="false"
              className="navigation-mobile-toggle"
            >
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 8h16M4 16h16"></path>
              </svg>
            </button>
          </div>
        </nav>
        <div id="mobile-overlay" className="navigation-mobile-overlay">
          <div className="navigation-overlay-header">
            <a href="/">
              <div className="navigation-logo-link">
                <div className="navigation-logo-wrapper">
                  <svg
                    width="32"
                    xmlns="http://www.w3.org/2000/svg"
                    height="32"
                    viewBox="0 0 24 24"
                    className="navigation-logo-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle r="3" cx="12" cy="12"></circle>
                      <path d="M12 16.5A4.5 4.5 0 1 1 7.5 12A4.5 4.5 0 1 1 12 7.5a4.5 4.5 0 1 1 4.5 4.5a4.5 4.5 0 1 1-4.5 4.5m0-9V9m-4.5 3H9m7.5 0H15m-3 4.5V15M8 8l1.88 1.88m4.24 0L16 8m-8 8l1.88-1.88m4.24 0L16 16"></path>
                    </g>
                  </svg>
                  <span className="navigation-brand-name">KzaVerde</span>
                </div>
              </div>
            </a>
            <button
              id="mobile-menu-close"
              aria-label="Close navigation menu"
              className="navigation-mobile-close"
            >
              <svg
                fill="none"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
                height="24"
                stroke="currentColor"
                viewBox="0 0 24 24"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6L6 18M6 6l12 12"></path>
              </svg>
            </button>
          </div>
          <div className="navigation-overlay-content">
            <ul className="navigation-overlay-links">
              <li className="navigation-stagger-item">
                <a href="/">
                  <div className="navigation-overlay-link">
                    <span>Ínicio</span>
                  </div>
                </a>
              </li>
              <li className="navigation-stagger-item">
                <a href="/#catalog">
                  <div className="navigation-overlay-link">
                    <span>Produtos</span>
                  </div>
                </a>
              </li>
              <li className="navigation-stagger-item">
                <a href="/#store">
                  <div className="navigation-overlay-link">
                    <span>Nossa Loja</span>
                  </div>
                </a>
              </li>
              <li className="navigation-stagger-item">
                <a href="/#contact">
                  <div className="navigation-overlay-link">
                    <span>Contato</span>
                  </div>
                </a>
              </li>
            </ul>
            <div className="navigation-overlay-footer navigation-stagger-item">
              <p className="section-content">Reserve your bouquet today</p>
              <a
                href="https://wa.me/c/555183388338"
                target="_blank"
                rel="noreferrer noopener"
              >
                <div
                  className="btn navigation-whatsapp-btn-mobile btn-lg btn-primary"
                >
                  <svg
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                    height="24"
                    viewBox="0 0 24 24"
                    className="navigation-btn-icon"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="m3 21l1.65-3.8a9 9 0 1 1 3.4 2.9z"></path>
                      <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0za5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"></path>
                    </g>
                  </svg>
                  <span>WhatsApp Pre-order</span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="navigation-container2">
          <div className="navigation-container3">
            <Script
              html={`<style>
@media (prefers-reduced-motion: reduce) {
.navigation-root, .navigation-mobile-overlay, .navigation-stagger-item, .navigation-link::after {
  transition: none;
}
.navigation-mobile-overlay.is-active .navigation-stagger-item {
  opacity: 1;
  transform: none;
}
}
</style>`}
            ></Script>
          </div>
        </div>
        <div className="navigation-container4">
          <div className="navigation-container5">
            <Script
              html={`<script defer data-name="navigation-logic">
(function(){
  const nav = document.getElementById("main-navigation")
  const mobileOverlay = document.getElementById("mobile-overlay")
  const openBtn = document.getElementById("mobile-menu-open")
  const closeBtn = document.getElementById("mobile-menu-close")
  const overlayLinks = document.querySelectorAll(".navigation-overlay-link")

  const toggleMenu = (state) => {
    mobileOverlay.classList.toggle("is-active", state)
    openBtn.setAttribute("aria-expanded", state)
    document.body.style.overflow = state ? "hidden" : ""
  }

  openBtn.addEventListener("click", () => toggleMenu(true))
  closeBtn.addEventListener("click", () => toggleMenu(false))

  overlayLinks.forEach((link) => {
    link.addEventListener("click", () => toggleMenu(false))
  })

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      nav.style.padding = "var(--spacing-sm) 0"
      nav.style.boxShadow = "0 10px 30px -10px rgba(0,0,0,0.3)"
    } else {
      nav.style.padding = "var(--spacing-md) 0"
      nav.style.boxShadow = "none"
    }
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && mobileOverlay.classList.contains("is-active")) {
      toggleMenu(false)
    }
  })
})()
</script>`}
            ></Script>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .navigation-container1 {
            display: contents;
          }
          .navigation-container2 {
            display: none;
          }
          .navigation-container3 {
            display: contents;
          }
          .navigation-container4 {
            display: none;
          }
          .navigation-container5 {
            display: contents;
          }
        `}
      </style>
    </>
  )
}

export default Navigation
